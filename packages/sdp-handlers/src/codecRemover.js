const normalizeSdpHandler = require('./utils/normalizeSdpHandler')

/**
 * Creates and returns an SDP Handler function that will remove the desired codecs
 *  from the SDP when passed to the pipeline.
 *
 * @method createCodecRemover
 * @param  {Array<string|Object} codecs An array of strings or objects representing the desired codecs to be removed.
 * @example
 * // `codecs` paramters can be an array of strings (i.e., ['VP8', 'VP9']) or as objects with the following signature:
 * const codecsToBeRemoved = [{
 *   name: 'codecname',
 *   fmtpParams: 'specific ftmp parameter target'
 * }]
 * const codecRemover = createCodecRemover(codecsToBeRemoved)
 * @return {Function} returns an SDP handler function
 */
function createCodecRemover (codecs) {
  if (!codecs) {
    codecs = []
  }
  // We allow the user to pass in a codecs of objects or strings, so here we format the strings into objects for uniformity.
  codecs = codecs.map(item => (typeof item === 'string' ? { name: item } : item))

  return normalizeSdpHandler(function (newSdp, info, originalSdp) {
    // This is an array of strings representing codec names we want to remove.
    const codecStringsToRemove = codecs.map(codec => codec.name)

    newSdp.media.forEach(media => {
      // This is an array of just the codes (codec payloads) that we FOR SURE want to remove.
      const finalRemoveList = []
      // This is an array of RTP objects who have codecs that are the same as strings passed in via codecs.
      let filteredRtp = []

      // If the current rtp.codec is in the codecStringsToRemove list, add the rtp to filteredRtp
      filteredRtp = media.rtp.filter(rtp => codecStringsToRemove.includes(rtp.codec))

      filteredRtp.forEach(rtp => {
        // We grab the relevantCodec codecs object from the passed in codecs, based on the name string.
        const relevantCodecs = codecs.filter(codec => codec.name === rtp.codec)

        // We check the relevantCodec. If it is not present, then we have no codecs info for this specific rtp.
        relevantCodecs.forEach(relevantCodec => {
          // If fmtpParams doesnt exist or is of length 0 then we assume we can remove all instances of this codec
          if (!relevantCodec.fmtpParams || (relevantCodec.fmtpParams && relevantCodec.fmtpParams.length === 0)) {
            // We want to delete this codec no matter what, since no fmtp params were included.
            finalRemoveList.push(rtp.payload)
          } else {
            // There are fmtp values for this codec. Therefore we have to check each media.fmtp object to see if it is the right one.
            // Then when we find the right fmtp object, we check its config to see if it has the parameters specified in the input.
            media.fmtp.forEach(fmtp => {
              // We check each iteration to see if we found the right fmtp object.
              if (fmtp.payload === rtp.payload) {
                // If we found the right fmtp object, we have to make sure each config param is in the fmtp.config.
                if (relevantCodec.fmtpParams.every(c => fmtp.config.includes(c))) {
                  finalRemoveList.push(rtp.payload)
                }
              }
            })
          }
        })
      })

      // At this point we should have an array (finalRemoveList) that contains all ORIGINAL codec payloads that we need to remove.
      // We now need to check fmtp for all rtx payloads ASSOCIATED with the original codec payload.
      media.fmtp.forEach(fmtp => {
        // Check if the config contains apt=, which indicates this fmtp is associated with another.
        if (fmtp.config.includes('apt=')) {
          // If so, lets grab the whole string WITHOUT the apt= part, and convet it into an integer. This should be a payload number.
          var payload = parseInt(fmtp.config.replace('apt=', ''))

          // Check if the finalRemoveList contains the payload that this fmtp is associated with.
          if (finalRemoveList.includes(payload)) {
            // If so, then we need to add this fmtp.payload to the finalRemoveList
            finalRemoveList.push(fmtp.payload)
          }
        }
      })

      // We assume past this point that the finalRemoveList is all powerful.
      // For each codec in the media.payloads string, if it is in our finalRemoveList list, we remove it.
      let isNumber = false
      if (typeof media.payloads === 'number') {
        media.payloads = media.payloads.toString()
        isNumber = true
      }
      if (media.payloads) {
        media.payloads = media.payloads
          .split(' ')
          .filter(payload => !finalRemoveList.includes(parseInt(payload)))
          .join(' ')
      }
      if (media.payloads && isNumber) {
        media.payloads = parseInt(media.payloads)
      }

      // For each codec object, if the payload is in our filteredCodes list, we remove the object.
      if (media.rtp) {
        media.rtp = media.rtp.filter(rtp => !finalRemoveList.includes(rtp.payload))
      }

      if (media.fmtp) {
        media.fmtp = media.fmtp.filter(fmtp => !finalRemoveList.includes(fmtp.payload))
      }
      if (media.rtcpFb) {
        media.rtcpFb = media.rtcpFb.filter(rtcpFb => !finalRemoveList.includes(rtcpFb.payload))
      }
    })

    return newSdp
  })
}

module.exports = createCodecRemover
