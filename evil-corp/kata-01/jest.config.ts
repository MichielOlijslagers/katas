import { InitialOptionsTsJest } from 'ts-jest';

const jestConfig: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  maxWorkers: 1,
  preset: 'ts-jest',
  testPathIgnorePatterns: ['dist'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.ts'],
};

export default jestConfig;
