import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from './HomePage';

test('Home page rendering', () => {
  const { getByText } = render(<HomePage />);
  expect(getByText(/Home/i)).toBeInTheDocument();
});