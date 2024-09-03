import '@testing-library/jest-dom';
import '@testing-library/react';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated but added for compatibility
    removeListener: jest.fn(), // Deprecated but added for compatibility
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// this is an example
global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
} as unknown as Console;
