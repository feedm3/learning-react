import React from 'react';
import { Todos } from "./testing/todos";
import { ReducerComponent } from "./reducer/reducer-component";

const App: React.FC = () => {
    return (
        <div>
            <h1>Learning React</h1>
            <h2>Testing</h2>
            <Todos/>
            <h2>Reducer</h2>
            <ReducerComponent />
        </div>
    );
};

export default App;
