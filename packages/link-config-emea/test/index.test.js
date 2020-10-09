import { config } from '../src/index'

test('Configuration object test', () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "authentication": Object {
        "server": Object {
          "base": "spidr-em.genband.com",
        },
      },
      "call": Object {
        "iceserver": Array [
          Object {
            "url": "turns:turn-em-1.genband.com:443?transport=tcp",
          },
          Object {
            "url": "turns:turn-em-2.genband.com:443?transport=tcp",
          },
          Object {
            "url": "stun:turn-em-1.genband.com:3478?transport=udp",
          },
          Object {
            "url": "stun:turn-em-2.genband.com:3478?transport=udp",
          },
        ],
      },
      "subscription": Object {
        "websocket": Object {
          "server": "spidr-em.genband.com",
        },
      },
    }
  `)
})
