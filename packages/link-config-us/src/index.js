const config = {
  authentication: {
    server: {
      base: 'spidr-ucc.genband.com'
    }
  },
  subscription: {
    websocket: {
      server: 'spidr-ucc.genband.com'
    }
  },
  call: {
    iceserver: [
      {
        url: 'turns:turn-ucc-1.genband.com:443?transport=tcp'
      },
      {
        url: 'turns:turn-ucc-2.genband.com:443?transport=tcp'
      },
      {
        url: 'stun:turn-ucc-1.genband.com:3478?transport=udp'
      },
      {
        url: 'stun:turn-ucc-2.genband.com:3478?transport=udp'
      }
    ]
  }
}

export { config }
