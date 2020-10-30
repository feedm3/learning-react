import React, { createContext, Dispatch, useContext, useReducer } from "react";

interface Counter {
    amount: number;
}

interface Action {
    type: 'add' | 'sub';
}

const CounterContext = createContext<{ state: Counter, dispatch: Dispatch<Action> }>(null as any);

const CounterContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer((state: Counter, action: Action) => {
        switch (action.type) {
            case "add":
                return {
                    amount: state.amount + 1
                }
            case "sub":
                return {
                    amount: state.amount - 1
                }
        }
        return state;
    }, { amount: 0 })

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

const ExampleComponent: React.FC = () => {
    const counterContext = useContext(CounterContext);

    return (
        <div>
            <div>Counter: {counterContext.state.amount}</div>
            <button onClick={() => counterContext.dispatch({ type: 'sub' })}>-</button>
            <button onClick={() => counterContext.dispatch({ type: 'add' })}>+</button>
        </div>
    )
}

/**
 * - CreateContext
 * - <App>
 *      - <ContextProvider>
 *      - reducer + initial state
 *          - <Component>
 *          - useContext
 * @constructor
 */
export const ReducerAndContextContainer: React.FC = () => {
    return (
        <CounterContextProvider>
            <ExampleComponent/>
        </CounterContextProvider>
    )
}
