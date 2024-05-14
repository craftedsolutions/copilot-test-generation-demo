import React, { useState } from 'react';
import { Square } from './Square';

export default function Board() {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);

    const handleClick = (i) => {
        const newSquares = squares.slice();
        newSquares[i] = 'X';
        setSquares(newSquares);
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    return (
        <>
            <div className="board-row" role="group">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row" role="group">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row" role="group">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
}
