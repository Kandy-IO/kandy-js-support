/**
 * Test file for the `normalizeSdpHandler` util.
 */
const normalizeSdpHandler = require('../src/utils/normalizeSdpHandler')

describe('normalizeSdpHandler util', () => {
  test('should return a normalized handler of type Function', () => {
    const mockSdpHandler = () => {}
    const normalizedHandler = normalizeSdpHandler(mockSdpHandler)
    expect(normalizedHandler).toEqual(expect.any(Function))
  })
})
