const config = {
  authentication: {
    server: {
      base: 'webrtc-em.kandy.io'
    }
  },
  subscription: {
    websocket: {
      server: 'webrtc-em.kandy.io'
    }
  },
  call: {
    iceserver: [
      {
        url: 'turns:turn-em-1.kandy.io:443?transport=tcp'
      },
      {
        url: 'turns:turn-em-2.kandy.io:443?transport=tcp'
      },
      {
        url: 'stun:turn-em-1.kandy.io:3478?transport=udp'
      },
      {
        url: 'stun:turn-em-2.kandy.io:3478?transport=udp'
      }
    ]
  }
}

export { config }
