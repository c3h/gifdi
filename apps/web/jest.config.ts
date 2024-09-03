import {type Config} from '@jest/types';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({dir: './'});

export const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: '.tmp/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    'package.json': '<rootDir>/package.json',
    '[#]/(.*)': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);
