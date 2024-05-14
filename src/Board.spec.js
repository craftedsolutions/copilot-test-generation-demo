// Test file for Board component

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Board from './Board';
import { describe, expect, it } from "@jest/globals";

describe('Board', () => {
    it('renders three groups of three Squares', () => {
        render(<Board />);
        const groups = screen.getAllByRole('group');
        expect(groups).toHaveLength(3);
        groups.forEach((group) => {
            expect(group.children).toHaveLength(3);
        });
    })
    it('updates the square value to "X" when a square is clicked', () => {
        render(<Board />);
        const squares = screen.getAllByRole('button');
        fireEvent.click(squares[0]);
        expect(squares[0]).toHaveTextContent('X');
    });
});