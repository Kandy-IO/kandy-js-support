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
        "defaultPeerConfig": Object {
          "iceServers": Array [
            Object {
              "urls": Array [
                "turns:turn-na-1.kandy.io:443?transport=tcp",
              ],
            },
            Object {
              "urls": Array [
                "turns:turn-na-2.kandy.io:443?transport=tcp",
              ],
            },
            Object {
              "urls": Array [
                "stun:turn-na-1.kandy.io:3478?transport=udp",
              ],
            },
            Object {
              "urls": Array [
                "stun:turn-na-2.kandy.io:3478?transport=udp",
              ],
            },
          ],
        },
      },
      "subscription": Object {
        "websocket": Object {
          "server": "webrtc-na.kandy.io",
        },
      },
    }
  `)
})
