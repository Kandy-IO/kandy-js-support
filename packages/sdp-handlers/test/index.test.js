import { test, expect } from '@jest/globals'
import * as index from '../src/index.js'

test('Exports the correct list of functions', () => {
  expect(Object.keys(index)).toMatchInlineSnapshot(`
    Array [
      "createCodecRemover",
    ]
  `)
})
