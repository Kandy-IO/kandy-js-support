/**
 * Default SDK configurations for Link using IOT2.
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
    earlyMedia: false,
    removeH264Codecs: true,
    serverProvidedTurnCredentials: true,
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
  },
  common: {
    enableReduxDevTools: true,
    allowProxy: true
  },
  logs: {
    logLevel: 'debug',
    logActions: {
      flattenActions: false,
      actionOnly: false,
      exposePayloads: true
    },
    enableFcsLogs: true
  }
}

export { config }
