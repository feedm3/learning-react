import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(() => {
    cleanup();
});

describe('<App />', () => {
    it('should render a heading', function () {
        const { getByText } = render(<App/>);
        const header = getByText(/Learning/i);
        expect(header).toBeInTheDocument();
    });
});
