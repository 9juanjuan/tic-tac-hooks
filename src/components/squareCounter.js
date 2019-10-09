
export const squaresArray = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

export default (player, square) => {
    const value = player ===1 ? 1 : 2
    const row = square < 3 ? 0: square < 6 && square > 2 ? 1: 2;
    squaresArray[row][row > 0 ? square % 3: square] = value 
    console.log(squaresArray);
    // Check if there is winner by row
    for ( let i = 0; i < squaresArray.length; i++) {
        if (squaresArray[i][0]=== squaresArray[i][1] && squaresArray[i][1]===squaresArray[i][2])
        {
            console.log(squaresArray[i])
            if (squaresArray[i][0]=== 1) {
                console.log(player + ' Row win! Row: ' + i)
                console.log(i)
                return i;
                // const winArr=squaresArray[i]
                // winArr.push(i)
                // console.log(winArr);
                // const winArr = []
                // winArr.push()
            } else if (squaresArray[i][0]===2) {
                console.log('Row win!')
                return i;
            }
        }

    }

    // check if there is a winner by column
    for (let col = 0; col<3; col++) 
    { 
        if (squaresArray[0][col]===squaresArray[1][col] && squaresArray[1][col]===squaresArray[2][col]) 
        { 
            if (squaresArray[0][col]===1)  {
                console.log(col)
                return col+3  
            }
            else if (squaresArray[0][col]===2) { 
                console.log(col);
                return col+3
            }
        } 
    } 
    // Winner by diagonal
    if (squaresArray[0][0]===squaresArray[1][1] && squaresArray[1][1]===squaresArray[2][2]) 
    { 
        if (squaresArray[0][0]===1) {
            console.log('diagonal win');
        } else if (squaresArray[0][0]===2) {
            console.log('diagonal win');
        }
    } 
    if (squaresArray[0][2]===squaresArray[1][1] && squaresArray[1][1]===squaresArray[2][0]) 
    { 
        if (squaresArray[0][2]===1) {
            console.log('diagonal win')
        }
        else if (squaresArray[0][2]===2) {
            console.log('diagonal win'); 
        }
    } else {
        console.log('0')
    }
  
    // Else if none of them have won then return 0 
} 
  


