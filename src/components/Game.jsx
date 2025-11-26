import { useState } from "react"
import { Board } from "./Board"

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState(Array(9).fill(null))

  //get the current squares history
  const currentSquares = history[history.length-1]


  const handlePlay =(nextSquare) =>{
    console.log(nextSquare)
    // copy the current history and append next square 
    // update the boolean xisNext 
    setHistory([...history, nextSquare])
  setXIsNext(!xIsNext)
  }

  
    return (<>
         <div className="game">
          <div className="game-board">

         <Board xIsNext={xIsNext} squares={currentSquares} onplay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>list hist goes there</ol>
          </div>
         </div>
        </>)
};