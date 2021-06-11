import { config } from '../src/index'

test('Configuration object test', () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "authentication": Object {
        "server": Object {
          "base": "webrtc-na.kandy.io",
        },
      },
      "call": Object {
        "iceserver": Array [
          Object {
            "url": "turns:turn-na-1.kandy.io:443?transport=tcp",
          },
          Object {
            "url": "turns:turn-na-2.kandy.io:443?transport=tcp",
          },
          Object {
            "url": "stun:turn-na-1.kandy.io:3478?transport=udp",
          },
          Object {
            "url": "stun:turn-na-2.kandy.io:3478?transport=udp",
          },
        ],
      },
      "subscription": Object {
        "websocket": Object {
          "server": "webrtc-na.kandy.io",
        },
      },
    }
  `)
})
