const { expect, test } = require('@jest/globals')
const { config } = require('../src/index')

test('Configuration object test', () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "authentication": Object {
        "server": Object {
          "base": "ct-webrtc.etisalat.ae",
        },
      },
      "call": Object {
        "iceserver": Array [
          Object {
            "url": "turns:ct-turn1.etisalat.ae:443?transport=tcp",
          },
          Object {
            "url": "turns:ct-turn2.etisalat.ae:443?transport=tcp",
          },
          Object {
            "url": "stun:ct-turn1.etisalat.ae:3478?transport=udp",
          },
          Object {
            "url": "stun:ct-turn2.etisalat.ae:3478?transport=udp",
          },
        ],
      },
      "subscription": Object {
        "websocket": Object {
          "server": "ct-webrtc.etisalat.ae",
        },
      },
    }
  `)
})
