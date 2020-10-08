const { config } = require('../src/index')

test('Configuration object test', () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "authentication": Object {
        "server": Object {
          "base": "spidr-ucc.genband.com",
        },
      },
      "call": Object {
        "iceserver": Array [
          Object {
            "url": "turns:turn-ucc-1.genband.com:443?transport=tcp",
          },
          Object {
            "url": "turns:turn-ucc-2.genband.com:443?transport=tcp",
          },
          Object {
            "url": "stun:turn-ucc-1.genband.com:3478?transport=udp",
          },
          Object {
            "url": "stun:turn-ucc-2.genband.com:3478?transport=udp",
          },
        ],
      },
      "subscription": Object {
        "websocket": Object {
          "server": "spidr-ucc.genband.com",
        },
      },
    }
  `)
})
