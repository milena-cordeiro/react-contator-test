import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from 'user-event';
import App from './App';
import renderWithRedux from './renderWithRedux';

test('se o clique dos botões incrementa corretamente o valor do estado global', () => {
  renderWithRedux(<App />);
  const incrementBtns = screen.queryAllByRole('button');
  const elementValue = screen.getByText('0');
  userEvent(incrementBtns[0]);
  expect(elementValue).toBe(1);
});
