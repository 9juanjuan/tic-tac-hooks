import React from 'react';
import GameBoard from './GameBoard';
function App() {
  return (
    <div>
      <div style={titleStyle}>
      Tic-Tac-Hooks
      </div>
      <GameBoard/>
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
