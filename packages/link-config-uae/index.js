/**
 * Baseline SDK configurations for Link using IOT2.
 * @type {Object}
 */
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
        url: 'turns:ct-turn1.etisalat.ae:443?transport=tcp',
        credentials: ''
      },
      {
        url: 'turns:ct-turn2.etisalat.ae:443?transport=tcp',
        credentials: ''
      },
      {
        url: 'stun:ct-turn1.etisalat.ae:3478?transport=udp',
        credentials: ''
      }
      {
        url: 'stun:ct-turn2.etisalat.ae:3478?transport=udp',
        credentials: ''
      }
    ]
  }
}

export { config }
