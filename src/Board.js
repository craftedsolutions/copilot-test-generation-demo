import { Square } from './Square';

export default function Board() {
    return (
        <>
            <div className="board-row" role="group">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row" role="group">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row" role="group">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}
