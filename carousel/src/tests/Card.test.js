import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';


// CAROUSEL SMOKE TEST

test('Component should render', () => {
    render(<Card/>);
});

test('It should match the snapshot', () => {
    const {asFragment} = render(<Card/>);;
    expect(asFragment()).toMatchSnapshot();
})