const config = {
  authentication: {
    server: {
      base: 'webrtc-na.kandy.io'
    }
  },
  subscription: {
    websocket: {
      server: 'webrtc-na.kandy.io'
    }
  },
  call: {
    iceserver: [
      {
        url: 'turns:turn-na-1.kandy.io:443?transport=tcp'
      },
      {
        url: 'turns:turn-na-2.kandy.io:443?transport=tcp'
      },
      {
        url: 'stun:turn-na-1.kandy.io:3478?transport=udp'
      },
      {
        url: 'stun:turn-na-2.kandy.io:3478?transport=udp'
      }
    ]
  }
}

export { config }
