import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

test('Footer rendering', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/footer/i)).toBeInTheDocument();
});