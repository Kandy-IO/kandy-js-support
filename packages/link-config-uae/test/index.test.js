import { config } from '../src/index'
import { NORMAL } from './support/sdp.fixture'
import { parse as createSdpObject } from 'sdp-transform'

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
        "removeH264Codecs": false,
        "sdpHandlers": Array [
          [Function],
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

test('removeCodecsOnSetLocalOffer returns the newSdp if info shows the operation is not a local offer set', () => {
  const removeCodecsOnSetLocalOffer = config.call.sdpHandlers[0]
  const newSdp = 'newSdp'
  const info = {
    step: 'set',
    endpoint: 'remote',
    type: 'offer'
  }
  const originalSdp = 'originalSdp'
  const sdp = removeCodecsOnSetLocalOffer(newSdp, info, originalSdp)
  expect(sdp).toEqual(newSdp)
})

test('removeCodecsOnSetLocalOffer calls the codecRemover handler if info shows the operation is a local offer set', () => {
  const removeCodecsOnSetLocalOffer = config.call.sdpHandlers[0]

  const newSdp = createSdpObject(NORMAL)
  const info = {
    endpoint: 'local',
    step: 'set',
    type: 'offer'
  }
  const originalSdp = createSdpObject(NORMAL)

  const sdp = removeCodecsOnSetLocalOffer(newSdp, info, originalSdp)

  // Removes the audio codecs
  const audioPayloadList = sdp.media[0].payloads.split(' ')
  expect(audioPayloadList.includes('9')).toBe(false) // G722 codec removed
  expect(audioPayloadList.includes('13')).toBe(false) // CN codec removed
  expect(audioPayloadList.includes('103')).toBe(false) // ISAC codec removed
  expect(audioPayloadList.includes('104')).toBe(false) // ISAC codec removed
  expect(audioPayloadList.includes('105')).toBe(false) // CN codec removed
  expect(audioPayloadList.includes('106')).toBe(false) // CN codec removed
  expect(audioPayloadList.includes('111')).toBe(false) // opus codec removed
  expect(audioPayloadList.length).toEqual(6)

  // Removes VP8 and VP9 Video Codecs
  const videoPayloadList = sdp.media[1].payloads.split(' ')
  expect(videoPayloadList.includes('96')).toBe(false)
  expect(videoPayloadList.includes('97')).toBe(false)
  expect(videoPayloadList.includes('98')).toBe(false)
  expect(videoPayloadList.includes('99')).toBe(false)
  expect(videoPayloadList.length).toEqual(11)
})
