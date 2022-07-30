import { render, screen } from '@testing-library/react';
import App from './App';

test('renders productivity tracker link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Productivity Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
