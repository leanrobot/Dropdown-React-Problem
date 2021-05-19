import {render, screen} from '@testing-library/react';
import React from 'react';
import ExampleNav from './ExampleNav';

test('renders page 1', () => {
  render(<ExampleNav />);
  const linkElement = screen.getByText(/pege 1/i);
  expect(linkElement).toBeInTheDocument();
});
