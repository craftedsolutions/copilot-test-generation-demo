// Test file for Square component

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Square } from './Square';
import { describe, expect, it } from "@jest/globals";

describe('Square', () => {
    it('renders a square with no text', () => {
        render(<Square value={null} onClick={() => {}} />);
        const square = screen.getByRole('button');
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent('');
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Square value={null} onClick={handleClick} />);
        const square = screen.getByRole('button');
        fireEvent.click(square);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});