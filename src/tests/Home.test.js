import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
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

test('it integrates all components perfectly', async () => {
  renderWithRedux(<Home />);
  user.type(screen.getByLabelText(/search/i), '17');
  const button = screen.getByTestId('clickHere');
  fireEvent.click(button);
  const add = await screen.findByText(/Add Pokemon/i);
  fireEvent.click(add);
  expect(screen.getAllByAltText('pokemon pic').length).toBe(2);
  const viewButton = screen.getByTestId('viewButton');
  fireEvent.click(viewButton);
  await screen.findByText(/Nickname/i);
  user.type(screen.getByLabelText(/Nickname:/i), 'Test Pokemon');
  const saveButton = screen.getByTestId('saveButton');
  fireEvent.click(saveButton);
  expect(viewButton.textContent).toBe('Test Pokemon');
  fireEvent.click(viewButton);
  await screen.findByText(/Nickname/i);
  expect(screen.getByLabelText(/Nickname:/i).value).toBe('Test Pokemon');
  const deleteButton = screen.getByTestId('deleteButton');
  fireEvent.click(deleteButton);
  expect(screen.getAllByAltText('pokemon pic').length).toBe(1);
  const pokemon = await screen.findByText(/You have not chosen any pokemons/i);
  expect(pokemon).toBeInTheDocument();
});
