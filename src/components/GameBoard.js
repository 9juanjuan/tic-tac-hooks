import React, {useState, useEffect}  from 'react'; 
import GameTile from './GameTile'

export const squaresArray = [];


const GameBoard = props => {
   

    return (
        <div style={boardStyle}>
            <div style={rowStyle}> 
                <GameTile change={props.change} player ={props.player} value={0} />
                <GameTile change={props.change} player ={props.player} value ={1}  />
                <GameTile change={props.change} player ={props.player} value ={2}/>
            </div>
            <div style={rowStyle}> 
                <GameTile change={props.change} player ={props.player} value={3}/>
                <GameTile change={props.change} player ={props.player} value={4}/>
                <GameTile change={props.change} player ={props.player} value={5}/>
            </div>
            <div style={rowStyle}> 
                <GameTile change={props.change} player ={props.player} value={6}/>
                <GameTile change={props.change} player ={props.player} value={7}/>
                <GameTile change={props.change} player ={props.player} value={8}/>
            </div>
        </div>
    )
}


const boardStyle = {
    margin: 'auto',
    height: '900px',
    width: '900px',
    border: '1px solid black'
}
const rowStyle = {
    display:'flex',
    flexDirection: 'row',
    margin: 'auto',
    height: '298px',
    width: '899px',
    border: '1px solid black'
}

export default GameBoard;