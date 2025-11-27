import { useState } from "react"
import { Board } from "./Board"
import { ResetGame } from "./ResetGame";

export default function Game(){
  // const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] =useState(0);

  
console.log('crr',currentMove)
  //get the current squares history
  // const currentSquares = history[history.length-1]
  //
  //as we know that currentMove return true of false, 
  //we can  set its value to xIsNext. no need to use useState to
  // track the status.
  const xIsNext = currentMove%2===0;
  const currentSquares = history[currentMove]
  console.log(currentSquares)


  const handlePlay =(nextSquare) =>{
    console.log('n',nextSquare.includes("X")|| nextSquare.includes("O"))
    // copy the current history and append next square 
    //setHistory([...history, nextSquare])


    //keep history up to the point or square we are viewing
    //instead of using the whole squares length;
    const nextHistory = [...history.slice(0, currentMove+1), nextSquare]
    setHistory(nextHistory)

    //each time we make a move, update current move 
    //to point to latest history  entry
    setCurrentMove(nextHistory.length-1)
  // setXIsNext(!xIsNext)

 
  }

const  handleReset = ()=>{
    if(currentMove>0){
      setHistory([Array(9).fill(null)])
      setCurrentMove(0)
     
    }
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
   
     setCurrentMove(nextMove)
    //  setXIsNext(nextMove%2===0)
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
          <div className="reset-game">
          </div>
            {currentMove >0 && <ResetGame onReset={handleReset}/>}
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
         </div>
        </>)


};