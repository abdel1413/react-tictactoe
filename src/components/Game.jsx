import { useState } from "react"
import { Board } from "./Board"

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])

  //get the current squares history
  const currentSquares = history[history.length-1]
  console.log(currentSquares)


  const handlePlay =(nextSquare) =>{
    console.log(nextSquare)
    // copy the current history and append next square 
    // update the boolean xisNext 
    setHistory([...history, nextSquare])
  setXIsNext(!xIsNext)
  }

  //create moves using history 
  const moves = history.map((squares, move)=>{
    let description;
    if(move >0){
   description = "Go to next"+ move;
    }else{
      description ="Go to game start"
    }


    const jumpTo =(nextMove)=>{
     console.log(nextMove)
    }
    return <li>
      <button onClick={()=>{jumpTo(move)}}>{description}</button>
    </li>
  })
  
    return (<>
         <div className="game">
          <div className="game-board">

         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
         </div>
        </>)
};