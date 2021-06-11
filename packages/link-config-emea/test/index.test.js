import { config } from '../src/index'

test('Configuration object test', () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "authentication": Object {
        "server": Object {
          "base": "webrtc-em.kandy.io",
        },
      },
      "call": Object {
        "iceserver": Array [
          Object {
            "url": "turns:turn-em-1.kandy.io:443?transport=tcp",
          },
          Object {
            "url": "turns:turn-em-2.kandy.io:443?transport=tcp",
          },
          Object {
            "url": "stun:turn-em-1.kandy.io:3478?transport=udp",
          },
          Object {
            "url": "stun:turn-em-2.kandy.io:3478?transport=udp",
          },
        ],
      },
      "subscription": Object {
        "websocket": Object {
          "server": "webrtc-em.kandy.io",
        },
      },
    }
  `)
})
