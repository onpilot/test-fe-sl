/* eslint-disable import/no-extraneous-dependencies */
// tests/setup.js
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
