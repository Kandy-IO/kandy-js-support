module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/src/**/*.js', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: { '^.+\\.js$': 'babel-jest' },
  projects: [
    '<rootDir>/packages/link-config-emea',
    '<rootDir>/packages/link-config-uae',
    '<rootDir>/packages/link-config-us',
    '<rootDir>/packages/sdp-handlers'
  ]
}
