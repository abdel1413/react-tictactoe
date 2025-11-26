import { useState } from "react"
import { Board } from "./Board"

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] =useState(0);

  //get the current squares history
  // const currentSquares = history[history.length-1]
  //
  const currentSquares = history[currentMove]
  console.log(currentSquares)


  const handlePlay =(nextSquare) =>{
    console.log(nextSquare)
    // copy the current history and append next square 
    //setHistory([...history, nextSquare])

    
    //keep history up to the point or square we are viewing
    //instead of using the whole squares length;
    const nextHistory = [...history.slice(0, currentMove+1), nextSquare]
    setHistory(nextHistory)

    //each time we make a move, update current move 
    //to point to latest history  entry
    setCurrentMove(nextHistory.length-1)
  setXIsNext(!xIsNext)
  }

  //create moves using history 
  const moves = history.map((squares, i)=>{
    let description;
    if(i >0){
   description = "Go to next "+ i;
    }else{
      description ="Go to game start"
    }


    const jumpTo =(nextMove)=>{
     console.log(nextMove)
     setCurrentMove(nextMove)
     setXIsNext(nextMove%2===0)
    }

    return <li key={i}>
      <button onClick={()=>{jumpTo(i)}}>{description}</button>
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