module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  testMatch: ['**/*.test.ts'],
  resetModules: true,
  coveragePathIgnorePatterns: ['node_modules']
}
