import React from 'react'; 
import GameTile from './GameTile'

const GameRow = props => {
    return (
        <div style={rowStyle}> 
            <GameTile change={props.change} player ={props.player}/>
            <GameTile change={props.change} player ={props.player} />
            <GameTile change={props.change} player ={props.player}/>
        </div>

    )
}
const rowStyle = {
    display:'flex',
    flexDirection: 'row',
    margin: 'auto',
    height: '298px',
    width: '899px',
    border: '1px solid black'
}

export default GameRow;