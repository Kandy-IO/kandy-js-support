import { describe, test, expect } from '@jest/globals'
import { createCodecRemover } from '../src/codecRemover'
import * as sdp from './support/sdp.fixture'
import { parse as createSdpObject } from 'sdp-transform'

const { NORMAL: NORMAL_SDP, ...EDGE_CASES_SDP } = sdp

/**
 * Tests for the codecRemover SDP Handler
 */
describe('codecRemover SDP Handler', () => {
  test('should return a newSdp of type Object', () => {
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover()
    const newSdp = codecRemover(dummySdp)
    expect(newSdp).toEqual(expect.any(Object))
  })

  test('should not filter anything if the codecs parameter is undefined', () => {
    const codecs = undefined
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)
    expect(newSdp).toEqual(dummySdp)
  })

  test('should not remove codecs if no values are passed in', () => {
    const codecs = []
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)
    expect(newSdp).toEqual(dummySdp)
  })

  test('should not remove a codec if specified codec(s) are blank', () => {
    const codecs = ['']
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)
    expect(newSdp).toEqual(dummySdp)
  })

  test('should remove codec if provided as a of string', () => {
    // ISAC = [103, 104]
    const codecs = ['ISAC']
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    // Payloads check
    const payloadList = newSdp.media[0].payloads.split(' ')
    expect(payloadList.includes('103')).toBe(false)
    expect(payloadList.includes('104')).toBe(false)
    expect(payloadList.length).toBe(11)

    // rtp check
    const rtpMatchFound = newSdp.media[0].rtp.some(rtp => {
      return [103, 104].includes(rtp.payload)
    })
    expect(rtpMatchFound).toBe(false)
    expect(newSdp.media[0].rtp.length).toBe(11)

    // fmtp check
    const fmtpMatchFound = newSdp.media[0].fmtp.some(fmtp => {
      return [103, 104].includes(fmtp.payload)
    })
    expect(fmtpMatchFound).toBe(false)
    expect(newSdp.media[0].fmtp.length).toBe(1)

    // rtcpFb check
    const rtcpFbMatchFound = newSdp.media[0].rtcpFb.some(rtcpFb => {
      return [103, 104].includes(rtcpFb.payload)
    })
    expect(rtcpFbMatchFound).toBe(false)
    expect(newSdp.media[0].fmtp.length).toBe(1)
  })

  test('should accept and remove multiple codecs passed in as an array of strings', () => {
    // [103, 104, 9, 106, 105, 13]
    const codecs = ['ISAC', 'G722', 'CN']

    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    // Payloads check
    const payloadList = newSdp.media[0].payloads.split(' ')
    const payloadMatchFound = payloadList.some(payload => {
      return ['103', '104', '9', '106', '105', '13'].includes(payload)
    })
    expect(payloadMatchFound).toBe(false)

    // rtp check
    const rtpMatchFound = newSdp.media[0].rtp.some(rtp => {
      return [103, 104, 9, 106, 105, 13].includes(rtp.payload)
    })
    expect(rtpMatchFound).toBe(false)
    expect(newSdp.media[0].rtp.length).toBe(7)

    // fmtp check
    const fmtpMatchFound = newSdp.media[0].fmtp.some(fmtp => {
      return [103, 104, 9, 106, 105, 13].includes(fmtp.payload)
    })
    expect(fmtpMatchFound).toBe(false)
    expect(newSdp.media[0].fmtp.length).toBe(1)

    // rtcpFb check
    const rtcpFbMatchFound = newSdp.media[0].rtcpFb.some(rtcpFb => {
      return [103, 104, 9, 106, 105, 13].includes(rtcpFb.payload)
    })
    expect(rtcpFbMatchFound).toBe(false)
    expect(newSdp.media[0].fmtp.length).toBe(1)
  })

  test('should not remove a codec if the name param is empty', () => {
    const codecs = [{ name: '' }]
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)
    expect(newSdp).toEqual(dummySdp)
  })

  test('should accept and remove codecs if passed in as objects', () => {
    // CN = [106, 105, 13]
    const codecs = [
      {
        name: 'CN'
      }
    ]
    const dummySdp = createSdpObject(NORMAL_SDP)

    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    // Payloads check
    const payloadList = newSdp.media[0].payloads.split(' ')
    const payloadMatchFound = payloadList.some(payload => {
      return ['106', '105', '13'].includes(payload)
    })
    expect(payloadMatchFound).toBe(false)

    // rtp check
    const rtpMatchFound = newSdp.media[0].rtp.some(rtp => {
      return [106, 105, 13].includes(rtp.payload)
    })
    expect(rtpMatchFound).toBe(false)
    expect(newSdp.media[0].rtp.length).toBe(10)

    // fmtp check
    const fmtpMatchFound = newSdp.media[0].fmtp.some(fmtp => {
      return [106, 105, 13].includes(fmtp.payload)
    })
    expect(fmtpMatchFound).toBe(false)
    expect(newSdp.media[0].fmtp.length).toBe(1)

    // rtcpFb check
    const rtcpFbMatchFound = newSdp.media[0].rtcpFb.some(rtcpFb => {
      return [106, 105, 13].includes(rtcpFb.payload)
    })
    expect(rtcpFbMatchFound).toBe(false)
    expect(newSdp.media[0].rtcpFb.length).toBe(1)
  })

  test('should remove codec if fmtp params is specified but empty', () => {
    // H264 = [100, 102, 127, 125, 101, 123, 122, 107]
    const codecs = [
      {
        name: 'H264',
        fmtpParams: []
      }
    ]
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    // Video (media[1]) payloads check
    const payloadList = newSdp.media[1].payloads.split(' ')
    const payloadMatchFound = payloadList.some(payload => {
      return ['100', '102', '127', '125', '101', '123', '122', '107'].includes(payload)
    })
    expect(payloadMatchFound).toBe(false)
    expect(payloadList.length).toBe(7)

    // rtp check
    const rtpMatchFound = newSdp.media[1].rtp.some(rtp => {
      return [100, 102, 127, 125, 101, 123, 122, 107].includes(rtp.payload)
    })
    expect(rtpMatchFound).toBe(false)
    expect(newSdp.media[1].rtp.length).toBe(7)

    // fmtp check
    const fmtpMatchFound = newSdp.media[1].fmtp.some(fmtp => {
      return [100, 102, 127, 125, 101, 123, 122, 107].includes(fmtp.payload)
    })
    expect(fmtpMatchFound).toBe(false)
    expect(newSdp.media[1].fmtp.length).toBe(3)

    // rtcpFb check
    const rtcpFbMatchFound = newSdp.media[1].rtcpFb.some(rtcpFb => {
      return [100, 102, 127, 125].includes(rtcpFb.payload)
    })
    expect(rtcpFbMatchFound).toBe(false)
    expect(newSdp.media[1].rtcpFb.length).toBe(10)
  })

  test('should remove codecs if all fmtp params are found in the fmtp codecs', () => {
    // H264 = [100, 102, 127, 125, 101, 123, 122, 107]
    const codecs = [
      {
        name: 'H264',
        fmtpParams: ['level-asymmetry-allowed=1']
      }
    ]
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    // Video (media[1]) payloads check
    const payloadList = newSdp.media[1].payloads.split(' ')
    const payloadMatchFound = payloadList.some(payload => {
      return ['100', '102', '127', '125', '101', '123', '122', '107'].includes(payload)
    })
    expect(payloadMatchFound).toBe(false)
    expect(payloadList.length).toBe(7)

    // rtp check
    const rtpMatchFound = newSdp.media[1].rtp.some(rtp => {
      return [100, 102, 127, 125, 101, 123, 122, 107].includes(rtp.payload)
    })
    expect(rtpMatchFound).toBe(false)
    expect(newSdp.media[1].rtp.length).toBe(7)

    // fmtp check
    const fmtpMatchFound = newSdp.media[1].fmtp.some(fmtp => {
      return [100, 102, 127, 125, 101, 123, 122, 107].includes(fmtp.payload)
    })
    expect(fmtpMatchFound).toBe(false)
    expect(newSdp.media[1].fmtp.length).toBe(3)

    // rtcpFb check
    const rtcpFbMatchFound = newSdp.media[1].rtcpFb.some(rtcpFb => {
      return [100, 102, 127, 125].includes(rtcpFb.payload)
    })

    expect(rtcpFbMatchFound).toBe(false)
    expect(newSdp.media[1].rtcpFb.length).toBe(10)
  })

  test('should not remove codec if any fmtp params are missing from the fmtp codecs', () => {
    // H264 = [100, 102, 127, 125, 101, 123, 122, 107]
    const codecs = [
      {
        name: 'H264',
        fmtpParams: ['notarealfmtpparam=1']
      }
    ]
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    const payloadList = newSdp.media[1].payloads.split(' ')

    expect(payloadList.includes('100')).toBe(true)
    expect(payloadList.includes('102')).toBe(true)
    expect(payloadList.includes('127')).toBe(true)
    expect(payloadList.includes('125')).toBe(true)
    expect(payloadList.includes('101')).toBe(true)
    expect(payloadList.includes('123')).toBe(true)
    expect(payloadList.includes('122')).toBe(true)
    expect(payloadList.includes('107')).toBe(true)
    expect(payloadList.length).toBe(15)

    // rtp check
    const rtpPayloadList = newSdp.media[1].rtp.map(rtp => rtp.payload)
    expect(rtpPayloadList.includes(100)).toBe(true)
    expect(rtpPayloadList.includes(102)).toBe(true)
    expect(rtpPayloadList.includes(127)).toBe(true)
    expect(rtpPayloadList.includes(125)).toBe(true)
    expect(rtpPayloadList.includes(101)).toBe(true)
    expect(rtpPayloadList.includes(123)).toBe(true)
    expect(rtpPayloadList.includes(122)).toBe(true)
    expect(rtpPayloadList.includes(107)).toBe(true)
    expect(newSdp.media[1].rtp.length).toBe(15)

    // fmtp check
    const fmtpPayloadList = newSdp.media[1].fmtp.map(fmtp => fmtp.payload)
    expect(fmtpPayloadList.includes(100)).toBe(true)
    expect(fmtpPayloadList.includes(102)).toBe(true)
    expect(fmtpPayloadList.includes(127)).toBe(true)
    expect(fmtpPayloadList.includes(125)).toBe(true)
    expect(fmtpPayloadList.includes(101)).toBe(true)
    expect(fmtpPayloadList.includes(123)).toBe(true)
    expect(fmtpPayloadList.includes(122)).toBe(true)
    expect(fmtpPayloadList.includes(107)).toBe(true)
    expect(newSdp.media[1].fmtp.length).toBe(11)

    // rtcpFb check
    const rtcpFbPayloadList = newSdp.media[1].rtcpFb.map(rtcpFb => rtcpFb.payload)
    expect(rtcpFbPayloadList.includes(100)).toBe(true)
    expect(rtcpFbPayloadList.includes(102)).toBe(true)
    expect(rtcpFbPayloadList.includes(127)).toBe(true)
    expect(rtcpFbPayloadList.includes(125)).toBe(true)
    expect(newSdp.media[1].rtcpFb.length).toBe(30)
  })

  it('should not filter codec if any fmtp params are missing from the fmtp codecs', () => {
    const codecs = [
      {
        name: 'H264',
        fmtpParams: ['profile-level-id=42001f']
      },
      {
        name: 'H264',
        fmtpParams: ['profile-level-id=42e01f']
      },
      {
        name: 'H264',
        fmtpParams: ['profile-level-id=4d0032']
      }
    ]
    const dummySdp = createSdpObject(NORMAL_SDP)
    const codecRemover = createCodecRemover(codecs)
    const newSdp = codecRemover(dummySdp)

    const payloadList = newSdp.media[1].payloads.split(' ')
    expect(payloadList.includes('100')).toBe(false)
    expect(payloadList.includes('101')).toBe(false)

    expect(payloadList.includes('102')).toBe(false)
    expect(payloadList.includes('123')).toBe(false)

    expect(payloadList.includes('127')).toBe(false)
    expect(payloadList.includes('122')).toBe(false)

    expect(payloadList.includes('125')).toBe(true)
    expect(payloadList.includes('107')).toBe(true)

    expect(payloadList.length).toBe(9)
  })

  test.each(Object.entries(EDGE_CASES_SDP))('can handle %p edge case.', (name, edgeCaseSdp) => {
    const dummySdp = createSdpObject(edgeCaseSdp)
    const codecRemover = createCodecRemover([])
    const newSdp = codecRemover(dummySdp)

    expect(newSdp).toEqual(dummySdp)
  })
})
