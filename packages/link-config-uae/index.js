/**
 * Default SDK configurations for Link using IOT2.
 * @type {Object}
 */
const config = {
  authentication: {
    server: {
      base: 'uae server'
    }
  },
  subscription: {
    websocket: {
      server: 'uae server'
    }
  },
  call: {
    earlyMedia: false,
    removeH264Codecs: true,
    serverProvidedTurnCredentials: true,
    iceserver: [
      {
        url: 'uae turn server',
        credentials: ''
      },
      {
        url: 'uae stun server',
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
