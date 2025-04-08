import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator', () => {
  render(<App />);
  const stringElement = screen.getByText(/String Calculator/i);
  expect(stringElement).toBeInTheDocument();
});
