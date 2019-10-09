import React, { useState, useEffect} from 'react'; 
import squareCounter from './squareCounter'
export let winState = null; 


const GameTile = props => {
    const [icon, setIcon] = useState(null)
    const [selected, setSelected] = useState(true);

    const selectTile =()=> {
        let win = squareCounter(props.player, props.value);
        console.log(win)
        // if (props.value >= 0 && props.value <= 2) {
            winState = win;
        // }


        selected ? setSelected(false): setSelected(true);
        props.player === 1 ? props.change(2) : props.change(1);
        return props.player === 1 && selected ===true ? setIcon('X') : props.player ===2 && selected === true ? setIcon('O') : null;
    }




    
    return (
        <div style={tileStyle} onClick={selectTile}>
            <div style={iconStyle}> {icon} </div>
        </div>

    )
}
const tileStyle = {
    // margin: 'auto',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    width: '300px',
    borderRight: '1px solid black'
}
const iconStyle = {
    // margin: 'auto',
    fontSize: '140px',
    // textAlign: 'center',
    

}

export default GameTile;