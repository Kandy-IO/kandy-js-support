export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  testMatch: ['**/test/**/*.test.js'],
  transform: { '^.+\\.js$': 'babel-jest' },
  transformIgnorePatterns: ['node_modules/(?!(@kandy-io)/)']
}
