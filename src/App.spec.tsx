import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';


describe('App', () => {
    test('renders App componant', () => {
        render(<App/>);

        screen.debug();
    })
})
