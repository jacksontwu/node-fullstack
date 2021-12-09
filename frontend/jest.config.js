module.exports = {
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.(vue)$': 'vue3-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,vue}','!<rootDir>/src/vue.d.ts'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
};
