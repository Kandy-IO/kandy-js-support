/**
 * Wraps a SDP Handler to make it compatible for both 3.x and 4.x versions of the SDK
 * @method wrapHandler
 * @param {Function} handler The SDP Handler to wrap.
 * @returns {Function} normalizedHandler The normalized handler compatible with the 3.x and 4.x SDKs.
 */
function normalizeSdpHandler (handler) {
  const normalizedHandler = (...params) => {
    /**
     * Old format (3.x) passes an object to each sdp
     *  handler that contains the current and original SDPs.
     * New format (4.x) passes 3 arguments to each sdp handler:
     *  newSdp, info, originalSdp
     */
    let oldCallstack = true

    let currentSdp
    let info
    let originalSdp

    if (params[0].currentSdp) {
      // Old Callstack
      currentSdp = params[0].currentSdp
      originalSdp = params[0].originalSdp
    } else if (params.length === 3) {
      // New Callstack
      oldCallstack = false
      currentSdp = params[0]
      info = params[1]
      originalSdp = params[2]
    }

    // Clone the currentSdp to be sent in as the 'newSdp'
    currentSdp = JSON.parse(JSON.stringify(currentSdp))

    const newSdp = handler(currentSdp, info, originalSdp)

    // If old callstack, then return the results of the next sdp handler
    // If new callstack, then just return the modified sdp
    return oldCallstack ? params[0].next(newSdp) : newSdp
  }

  return normalizedHandler
}

module.exports = normalizeSdpHandler
