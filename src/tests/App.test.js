import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import App from '../components/App';

const store = createStore(rootReducer);

const renderWithRedux = component => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

test('renders without crashing', () => {
  renderWithRedux(<App />);
});

test('renders header correctly', () => {
  const { getByText } = renderWithRedux(<App />);
  const header = getByText(/The Pokemon League/i);
  expect(header).toBeInTheDocument();
});

export default renderWithRedux;
