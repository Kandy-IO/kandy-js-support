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
    ]
  }
}

module.exports = { config }
