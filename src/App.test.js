import { render, screen } from '@testing-library/react';
import Hook from './HookUseState';

test('renders learn react link', () => {
  render(<Hook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
