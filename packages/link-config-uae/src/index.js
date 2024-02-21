import { createCodecRemover } from '@kandy-io/sdp-handlers'

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
    defaultPeerConfig: {
      iceServers: [
        {
          urls: ['turns:ct-turn1.etisalat.ae:443?transport=tcp']
        },
        {
          urls: ['turns:ct-turn2.etisalat.ae:443?transport=tcp']
        },
        {
          urls: ['stun:ct-turn1.etisalat.ae:3478']
        },
        {
          urls: ['stun:ct-turn2.etisalat.ae:3478']
        }
      ]
    },
    removeH264Codecs: false,
    sdpHandlers: [removeCodecsOnSetLocalOffer]
  }
}

export { config }
