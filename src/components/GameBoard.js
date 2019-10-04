import React, {useState, useEffect}  from 'react'; 
import GameRow from './GameRow'

const GameBoard = props => {
    const [activePlayer, setActivePlayer] = useState(1);

    return (
        <div style={boardStyle}>
            <GameRow/>
            <GameRow/>
            <GameRow/>
        </div>

    )
}

const boardStyle = {
    margin: 'auto',
    height: '900px',
    width: '900px',
    border: '1px solid black'
}

export default GameBoard;