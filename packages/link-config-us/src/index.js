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
    defaultPeerConfig: {
      iceServers: [
        {
          urls: ['turns:turn-na-1.kandy.io:443?transport=tcp']
        },
        {
          urls: ['turns:turn-na-2.kandy.io:443?transport=tcp']
        },
        {
          urls: ['stun:turn-na-1.kandy.io:3478?transport=udp']
        },
        {
          urls: ['stun:turn-na-2.kandy.io:3478?transport=udp']
        }
      ]
    }
  }
}

export { config }
