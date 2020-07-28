import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from './App.test';
import Home from '../components/Home';

test('renders without crashing', () => {
  renderWithRedux(<Home />);
});

test('renders all children correctly', () => {
  const { getByText } = renderWithRedux(<Home />);
  const heading = getByText(/You have not chosen any pokemons/i);
  const search = getByText(/Please keep me busy/i);
  const customize = getByText(/customize it's properties/i);
  expect(heading).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(customize).toBeInTheDocument();
});
