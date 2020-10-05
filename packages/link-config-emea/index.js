/**
 * Baseline SDK configurations for Link using IOT2.
 * @type {Object}
 */
const config = {
  authentication: {
    server: {
      base: 'spidr-em.genband.com'
    }
  },
  subscription: {
    websocket: {
      server: 'spidr-em.genband.com'
    }
  },
  call: {
    iceserver: [
      {
        url: 'turns:turn-em-1.genband.com:443?transport=tcp',
        credentials: ''
      },
      {
        url: 'turns:turn-em-2.genband.com:443?transport=tcp',
        credentials: ''
      },
      {
        url: 'stun:turn-em-1.genband.com:3478?transport=udp',
        credentials: ''
      }
      {
        url: 'stun:turn-em-2.genband.com:3478?transport=udp',
        credentials: ''
      }
    ]
  }
}

export { config }
