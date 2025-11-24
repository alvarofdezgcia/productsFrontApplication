module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@features/(.*)$': '<rootDir>/src/features/$1',
        '^@ui/(.*)$': '<rootDir>/src/ui/$1',
        '^@app/(.*)$': '<rootDir>/src/app/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
