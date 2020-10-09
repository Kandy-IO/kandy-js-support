const { expect } = require('@jest/globals')
const index = require('../src/index.js')

test('Exports the correct list of functions', () => {
  expect(Object.keys(index)).toMatchInlineSnapshot(`
    Array [
      "createCodecRemover",
    ]
  `)
})
