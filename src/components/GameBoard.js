import React, {useState, useEffect}  from 'react'; 
import GameRow from './GameRow'

const GameBoard = props => {



    return (
        <div style={boardStyle}>
            <GameRow change={props.change} player ={props.player} />
            <GameRow change={props.change} player ={props.player}/>
            <GameRow change={props.change} player ={props.player}/>
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