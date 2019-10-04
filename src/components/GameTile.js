import React, { useState} from 'react'; 

const GameTile = props => {
    const [selected, setSelected] = useState('true');

    return (
        <div style={tileStyle} onClick={useState}>
             X
        </div>

    )
}
const tileStyle = {
    // margin: 'auto',
    height: '300px',
    width: '300px',
    borderRight: '1px solid black'
}

export default GameTile;