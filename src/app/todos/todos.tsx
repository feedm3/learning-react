import React, { useRef, useState } from "react";
import { getClientWidth } from "./todos-util";

interface Todo {
    id: string;
    title: string;
    checked: boolean;
}

export const Todos: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const todoInputRef = useRef<HTMLInputElement>(null);

    const onClickAddTodo = () => {
        // we just call this function to test mocking
        getClientWidth(todoInputRef.current!);

        const title = todoInputRef.current!.value;

        if (!title) {
            return;
        }

        const newTodo: Todo = {
            id: title + Math.random(),
            title: title,
            checked: false
        };
        setTodos([...todos, newTodo]);

        todoInputRef.current!.value = '';
    };

    return (
        <div>
            <h2>Todos:</h2>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.id} data-testid={'todo-item-' + todo.id}>{todo.title}</li>
                        )
                    })
                }
            </ul>
            <input data-testid='todo-input' ref={todoInputRef}/>
            <button onClick={onClickAddTodo}>Add todo</button>
        </div>
    )
};
