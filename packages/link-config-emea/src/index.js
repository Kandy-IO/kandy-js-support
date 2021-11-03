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
    defaultPeerConfig: {
      iceServers: [
        {
          urls: ['turns:turn-em-1.kandy.io:443?transport=tcp']
        },
        {
          urls: ['turns:turn-em-2.kandy.io:443?transport=tcp']
        },
        {
          urls: ['stun:turn-em-1.kandy.io:3478?transport=udp']
        },
        {
          urls: ['stun:turn-em-2.kandy.io:3478?transport=udp']
        }
      ]
    }
  }
}

export { config }
