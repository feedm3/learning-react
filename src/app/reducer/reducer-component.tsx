import React, { useReducer, useRef } from 'react';

interface State {
    name: string;
}

type Action = { type: 'setName'; name: string }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setName":
            return {
                name: action.name,
            };
        default:
            return state;
    }
};

export const ReducerComponent: React.FC = () => {
    const nameInput = useRef<HTMLInputElement>(null);
    const [state, dispatch] = useReducer(reducer, { name: 'test' });

    return (
        <div>
            {'Hi ' + state.name}
            <br />
            <input ref={nameInput}/>
            <button onClick={() => dispatch({ type: 'setName', name: nameInput.current!.value})}>Set name</button>
        </div>
    )
};
