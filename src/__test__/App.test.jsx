/* eslint-disable import/no-extraneous-dependencies */
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('Renders Hello 🧁', () => {
    render(<App />);
    expect(screen.getByTestId('test')).toHaveTextContent('Vite + React + SWC');
  });
});
