
const squaresArray = [[0,0,0],[0,0,0],[0,0,0]]

export default (player, square) => {
    const value = player ===1 ? 1 : 2
    const row = square < 3 ? 0: square < 6 && square > 3 ? 1: 2;
    squaresArray[row][row > 0 ? square % 3: square] = value 
    console.log(squaresArray);
}
