import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../components/SearchBar';
import renderWithRedux from './App.test';

test('it changes state as input value changes', () => {
  const { getByLabelText } = renderWithRedux(<SearchBar />);
  const input = getByLabelText(/search/i);
  input.value = 45;
  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).not.toBe(45);
  expect(input.value).toBe('23');
});

test('it displays an error on search with wrong input or empty input', async () => {
  const { getByTestId, findByText } = renderWithRedux(<SearchBar />);
  const button = getByTestId('clickHere');
  fireEvent.click(button);
  const error = await findByText(/There was an error with your search/i);
  expect(error).toBeInTheDocument();
});

test('it finds the pokemon on correct input', async () => {
  const { getByTestId, findByText, getByLabelText } = renderWithRedux(<SearchBar />);
  const button = getByTestId('clickHere');
  const input = getByLabelText(/search/i);
  input.value = 45;
  fireEvent.change(input, { target: { value: 23 } });
  fireEvent.click(button);
  const name = await findByText(/ekans/i);
  const add = await findByText(/Add Pokemon/i);
  expect(name).toBeInTheDocument();
  expect(add).toBeInTheDocument();
  fireEvent.click(add);
  expect(screen.getByAltText('pokemon pic')).toBeInTheDocument();
});
