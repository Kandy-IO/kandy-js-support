/**
 * Test file for the `normalizeSdpHandler` util.
 */
const normalizeSdpHandler = require('../src/utils/normalizeSdpHandler')

describe('normalizeSdpHandler util', () => {
  // Setup mock SDP
  const mockSdp = {
    sdpType: 'original'
  }
  // Setup a mock SDP handler that will change sdpType from original to new
  const mockSdpHandler = (newSdp, info, originalSdp) => {
    newSdp.sdpType = 'new'
    return newSdp
  }

  // Setup Mock functions for the different ways the 3.x and 4.x SDKs call the SDP handlers
  const mock3xPipeline = (handler, callId, sdp, operation, step, type) => {
    const next = sdp => sdp
    const originalSdp = sdp
    const currentSdp = JSON.parse(JSON.stringify(originalSdp))

    return handler({
      next,
      originalSdp,
      currentSdp,
      operation,
      step,
      type,
      callId
    })
  }
  const mock4xPipline = (handler, sdp, info) => {
    const newSdp = JSON.parse(JSON.stringify(sdp))
    return handler(newSdp, info, sdp)
  }

  test('should return a normalized handler of type Function', () => {
    const normalizedHandler = normalizeSdpHandler(mockSdpHandler)
    expect(normalizedHandler).toEqual(expect.any(Function))
  })

  test('returned normalized handler should work with 3.x SDK', () => {
    const callId = '123'
    const operation = 'START_CALL'
    const step = 'PRE_LOCAL'
    const type = 'offer'

    const normalizedHandler = normalizeSdpHandler(mockSdpHandler)
    const newSdp = mock3xPipeline(normalizedHandler, callId, mockSdp, operation, step, type)

    const expectedSdp = {
      sdpType: 'new'
    }
    expect(newSdp).toEqual(expectedSdp)
  })

  test('returned normalized handler should work with 4.x SDK', () => {
    const normalizedHandler = normalizeSdpHandler(mockSdpHandler)
    const newSdp = mock4xPipline(normalizedHandler, mockSdp, {})

    const expectedSdp = {
      sdpType: 'new'
    }
    expect(newSdp).toEqual(expectedSdp)
  })
})
