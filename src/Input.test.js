import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input component', () => {
    test('input value is updated correctly', () => {
        render(<App />);
        const inputEl = screen.getByRole('textbox');
        userEvent.type(inputEl, 'Peter Do');
        expect(inputEl.value).toEqual('Peter Do');
    });
    test('callback handleChange is called everytime input value is changed', () => {
        const handleChange = jest.fn();
        render(<Input handleChange={handleChange} inputValue='' />);
        const inputEl = screen.getByRole('textbox');
        userEvent.type(inputEl, 'Peter');
        expect(handleChange).toHaveBeenCalledTimes(5);
    });
});