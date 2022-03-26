import { Button } from '@mui/material';
import {
    fireEvent,
    getByRole as globalGetByRole,
    getByText as globalGetByText,
    render,
} from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import ComboBox from './MyAutocomplete';

test('that autocomplete works', async () => {
    const { getByTestId, getByRole, queryByRole } = render(<ComboBox />, {});

    describe('Test Button component', () => {
        it('Test click event', () => {
          const mockCallBack = jest.fn();
      
          const button = shallow((<Button onClick={mockCallBack}>filter</Button>));
          button.find('button').simulate('click');
          expect(mockCallBack.mock.calls.length).toEqual(1);
        });
    });

    const AutoCompleteSearch = getByTestId('asynchronousDemo');
    const Input = globalGetByRole(AutoCompleteSearch, 'textbox');

    expect(queryByRole('listbox')).toBeNull();

    fireEvent.mouseDown(Input);
    const ListBox = getByRole('listbox');
    expect(ListBox).toBeDefined();
    expect(queryByRole('listbox')).toBeNull();

    fireEvent.mouseDown(Input);
    const ListBoxAfter = getByRole('listbox');
    expect(ListBoxAfter).toBeDefined();
    expect(queryByRole('listbox')).toBeNull();
});
