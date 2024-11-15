import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { describe, expect, test } from 'bun:test'

describe('App', () => {
  test('Counter increments when button is clicked', async () => {
    render(<App />)

    const button = screen.getByText('count is 0');

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('count is 1')).toBeTruthy()
    });
  });
});