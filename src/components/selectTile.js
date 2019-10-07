

const selectTile = (player, selected) => {
    console.log('Selected tile')
    let icon = (player===1 && selected ===true) ? 'X' : (player ===2 && selected === true) ? 'O': null;
    return icon
}


export default selectTile;
