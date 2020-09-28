import React from 'react';
import './App.css';
import Board from './components/Board/Board'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
class App extends React.Component{
state={
  squares:[
    {
      id:0,
      clicked: false,
      sign: " "      
    },
    {
      id: 1,
      clicked: false,
      sign: " "     
    },
    {
      id: 2,
      clicked: false,
      sign: " "     
    },
    {
      id: 3,
      clicked: false,
       sign: " "     
    },
    {
      id: 4,
      clicked: false,
      sign: " "     
    },
    {
      id: 5,
      clicked: false,
       sign: " "     
    },
    {
      id: 6,
      clicked: false,
      sign: " "     
    },
    {
      id: 7,
      clicked: false,
      sign: " "     
    },
    {
      id: 8,
      clicked: false,
      sign: " "     
    },   
  
  ],
  PlayerOneTurn: true,
  GameOver: false,
  isDraw:false
}


handleSquareOnClick = (id) =>{
  
  let gameOver = false;
  if(this.state.GameOver){
    return
  }

 
  const boardArray = [...this.state.squares]
  boardArray.forEach(item=>{
   
    if(item.id === id){
      item.clicked = true;
      if (this.state.PlayerOneTurn) {
        item.sign = "cross"
      }
      else {
        item.sign = "circle"
      }
      
    }
  })
  
  if (this.checkingWin(this.state.PlayerOneTurn)) {
   gameOver = true;
  } 
  this.setState({
    squares: boardArray,
    PlayerOneTurn: !this.state.PlayerOneTurn,
    GameOver: gameOver    
  })
  this.isDraw();
}


checkingWin = (turn) => { 
  const sign = turn ? "cross" : "circle"
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every((index) => {

      if(this.state.squares[index].sign === sign)
      {
      return true;
      }
      else{
     
      return false;
      }
    })

  })
}
isDraw = () => {
  const boardArray = [...this.state.squares]
  const isDraw = boardArray.every(item => 
    {      
      return item.clicked === true
    })
  if(isDraw){
  this.setState(
  {
    isDraw
  })
  
  }
}
restartGame = () =>{
  const boardArray = [...this.state.squares]
  boardArray.map(square => {
         return square.sign = " ",
          square.clicked = false;
  
  })
  this.setState({
    squares: boardArray,
    PlayerOneTurn: true,
    GameOver: false,
    isDraw: false

  })
  
}

render(){
  const { squares, PlayerOneTurn, GameOver, isDraw} = this.state
  return (
    <div className="App">
      <h2>TIC TAC TOE</h2>
      <Board squares={squares} turn={PlayerOneTurn} clickHandle={this.handleSquareOnClick}/>
      <ScoreBoard turn={PlayerOneTurn} win={GameOver} draw={isDraw} restart={this.restartGame}/>
    </div>
  )
}
}


export default App;
