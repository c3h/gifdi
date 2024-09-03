import nextJest from 'next/jest.js';
import {config} from './jest.config';

const createJestConfig = nextJest({dir: './'});

config.testMatch = ['**/*.test.ts'];

export default createJestConfig(config);
