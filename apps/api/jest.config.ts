import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>/src'],
  testRegex: ['.*.spec.ts$', '.*.test.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/src/*.(t|j)s'],
  coverageDirectory: '.tmp/coverage',
  testEnvironment: 'node',
};

export default config;
