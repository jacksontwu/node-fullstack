module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: ['json', 'text', 'lcov', 'html'],
    collectCoverageFrom: ['src/**/*.ts', '!src/index.ts'],
    moduleNameMapper: {
        'src/(.+)$': '<rootDir>/src/$1',
    },
};
