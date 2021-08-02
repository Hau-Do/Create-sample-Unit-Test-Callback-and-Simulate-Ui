import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testing Counter component', () => {
  test('counter is incremented on increment button click', () => {
    render(<App />);
    const counterEl = screen.getByTestId("counter");
    const incrementEl = screen.getByText("Increment");
    userEvent.click(incrementEl, "button");
    userEvent.click(incrementEl, "button");
    expect(counterEl.textContent).toEqual('2');
  });
  test('counter is decremented on decrement button click', () => {
    render(<App />);
    const counterEl = screen.getByTestId("counter");
    const decrementEl = screen.getByText("Increment");
    userEvent.click(decrementEl);
    userEvent.click(decrementEl);
    userEvent.click(decrementEl);
    expect(counterEl.textContent).toEqual("3");
  });
});