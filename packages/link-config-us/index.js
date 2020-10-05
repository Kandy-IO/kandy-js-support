/**
 * Baseline SDK configurations for Link US instance.
 * @type {Object}
 */
const config = {
  authentication: {
    server: {
      base: 'sr1.genband.com'
    }
  },
  subscription: {
    websocket: {
      server: 'sr1.genband.com'
    }
  },
  call: {
    iceserver: [
      {
        url: 'turns:turn-sr2.genband.com:443?transport=tcp',
        credentials: ''
      },
      {
        url: 'stun:turn-sr2.genband.com:3478?transport=udp',
        credentials: ''
      }
    ]
  }
}

export { config }
