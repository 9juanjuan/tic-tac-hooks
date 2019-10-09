import React, {useState, useEffect}  from 'react'; 
import GameTile, {winState} from './GameTile'
// import winState from './GameTile'
// import squareCounter from './squareCounter'

const GameBoard = props => {

    // const [winningTile, setWin] = useState(false);

    // useEffect(()=> {
    //     let win = squareCounter(props.player, props.value);
    //     console.log(win)
    //     if (win === 0 && props.value >= 0 && props.value <= 2) {
    //         setWin(true)
    //     }
    // }, [winningTile])


    return (
        <div style={boardStyle}>
            <div style={rowStyle}> 
            {winState === 0 ? <div style ={rowWin}></div> : winState === 3 ? <div style={colWin}></div> : null}
                <GameTile change={props.change} player ={props.player} value={0}/>
                {winState === 4 ? <div style={colWin}></div> : null}
                <GameTile change={props.change} player ={props.player} value ={1}/>
                {winState === 5 ? <div style={colWin}></div> : null}
                <GameTile change={props.change} player ={props.player} value ={2}/>
            </div>
            <div style={rowStyle}> 
            {winState === 1 ? <div style = {rowWin}>  </div> : null }
                <GameTile change={props.change} player ={props.player} value={3}/>
                <GameTile change={props.change} player ={props.player} value={4}/>
                <GameTile change={props.change} player ={props.player} value={5}/>
            </div>
            <div style={rowStyle}> 
            {winState === 2 ? <div style = {rowWin}>  </div> : null }
                <GameTile change={props.change} player ={props.player} value={6}/>
                <GameTile change={props.change} player ={props.player} value={7}/>
                <GameTile change={props.change} player ={props.player} value={8}/>
            </div>
        </div>
    )
}

const colWin = {
    position: 'absolute',
    zIndex: '-1',
    height: '900px',
    width: '150px',
    borderRight: '2px solid red'
    
}
const rowWin = {
    position: 'absolute',
    zIndex: '-1',
    height: '150px',
    width: '900px',
    borderBottom: '2px solid red'
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