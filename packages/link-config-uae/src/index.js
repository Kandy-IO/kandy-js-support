import { createCodecRemover } from '@kandy-io/sdp-handlers/src'

const codecRemover = createCodecRemover([
  'VP8',
  'VP9',
  'opus',
  'CN',
  'G722',
  'ISAC',
  {
    name: 'H264',
    fmtpParams: ['packetization-mode=0']
  }
])

const removeCodecsOnSetLocalOffer = (newSdp, info, originalSdp) => {
  if (info.endpoint === 'local' && info.step === 'set' && info.type.toLowerCase() === 'offer') {
    return codecRemover(newSdp, info, originalSdp)
  }
  return newSdp
}

const config = {
  authentication: {
    server: {
      base: 'ct-webrtc.etisalat.ae'
    }
  },
  subscription: {
    websocket: {
      server: 'ct-webrtc.etisalat.ae'
    }
  },
  call: {
    iceserver: [
      {
        url: 'turns:ct-turn1.etisalat.ae:443?transport=tcp'
      },
      {
        url: 'turns:ct-turn2.etisalat.ae:443?transport=tcp'
      },
      {
        url: 'stun:ct-turn1.etisalat.ae:3478?transport=udp'
      },
      {
        url: 'stun:ct-turn2.etisalat.ae:3478?transport=udp'
      }
    ],
    removeH264Codecs: false,
    sdpHandlers: [removeCodecsOnSetLocalOffer]
  }
}

export { config }
