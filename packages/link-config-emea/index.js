/**
 * Default SDK configurations for Link using IOT2.
 * @type {Object}
 */
const config = {
  authentication: {
    server: {
      base: 'emea server'
    }
  },
  subscription: {
    websocket: {
      server: 'emea server'
    }
  },
  call: {
    earlyMedia: false,
    removeH264Codecs: true,
    serverProvidedTurnCredentials: true,
    iceserver: [
      {
        url: 'emea turn server',
        credentials: ''
      },
      {
        url: 'emea stun server',
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
