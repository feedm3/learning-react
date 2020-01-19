import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Todos } from "./Todos";

afterEach(() => {
    cleanup();
});

describe('<Todos />', () => {
    it('should render', function () {
        const { container } = render(<Todos/>);
        expect(container).toBeInTheDocument();
    });

    it('should match the snapshot', function () {
        const tree = renderer
            .create(<Todos/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should not add todo if input is empty', function () {
        // arrange
        const { getByText, queryAllByTestId } = render(<Todos/>);
        const addButton = getByText('Add todo');

        // act
        fireEvent.click(addButton);

        // assert
        const allTodos = queryAllByTestId('todo-item', { exact: false });
        expect(allTodos).toHaveLength(0);
    });

    it('should add input as todo', function () {
        // arrange
        const { getByText, getByTestId, getAllByTestId, container } = render(<Todos/>);
        const input = getByTestId('todo-input');
        const addButton = getByText('Add todo');

        // act
        fireEvent.change(input, { target: { value: 'todo 1'}});
        fireEvent.click(addButton);

        // assert
        const todo = getByText('todo 1');
        expect(todo).toBeInTheDocument();

        const allTodos = getAllByTestId('todo-item', { exact: false });
        expect(allTodos).toHaveLength(1);

        const allListElements = container.querySelectorAll('li');
        expect(allListElements).toHaveLength(1);
    });
});
