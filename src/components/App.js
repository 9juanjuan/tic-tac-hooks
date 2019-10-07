import React, { useState } from 'react';
import GameBoard from './GameBoard';
function App() {
  const [activePlayer, setActivePlayer] = useState(1);

  return (
    <div>
      <div style={titleStyle}>
      Tic-Tac-Hooks......Player {activePlayer}
      </div>
      <GameBoard change={setActivePlayer} player={activePlayer}/>
    </div>
  );
}
const titleStyle= {
  margin: 'auto',
  marginTop : '20px',
  marginBottom: '20px',
  fontSize: '30px',
  textAlign: 'center',

}


export default App;
