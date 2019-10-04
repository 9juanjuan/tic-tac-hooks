import React, { useState} from 'react'; 
// import selectTile from './selectTile';

// const selectTile = () => {
//     console.log('Selected tile')
// }

const GameTile = props => {
    const [player, setPlayer] = useState(1); 
    const [selected, setSelected] = useState(false);
    function selectTile () {
        selected ? setSelected(false) : setSelected(true);

    }
    let icon = (player===1 && selected ) ? 'X' :(player===2 && selected) ? 'O' : null;



    return (
        <div style={tileStyle} onClick={selectTile}>
            {icon} 
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