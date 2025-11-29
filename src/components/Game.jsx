import { useState } from "react"
import { Board } from "./Board"
import { ResetGame } from "./ResetGame";

export default function Game(){
  // const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([
     {squaresArray:Array(9).fill(null), location: null}])
  const [currentMove, setCurrentMove] =useState(0);

  //get the current squares history
  // const currentSquares = history[history.length-1]
  //
  //as we know that currentMove return true of false, 
  //we can  set its value to xIsNext. no need to use useState to
  // track the status.
  const xIsNext = currentMove%2===0;
  const currentSquares = history[currentMove]
 


  const handlePlay =(nextSquare,moveIndex) =>{
    // copy the current history and append next square 
    //setHistory([...history, nextSquare])
    const row = Math.floor(moveIndex/3)+1;
    const col = (moveIndex %3) +1;
    
    //keep history up to the point or square we are viewing
    //instead of using the whole squares length;
    const nextHistory = [...history.slice(0, currentMove+1),
      {squaresArray:nextSquare, location: {row, col}} ]

    setHistory(nextHistory)
    console.log(history)
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
  const moves = history.map((step, move)=>{
    console.log('ste',step, 'move',move)
    let description;
    if(move > 0){
      const {row, col} = step.location
   description = `You are at move #${move} [${row}${col}]` ;
    }else{
      description ="Go to game start"
    }

    const jumpTo =(nextMove)=>{
     setCurrentMove(nextMove)
    //  setXIsNext(nextMove%2===0)
   let curr =   step.filter(i => i !=null)
   alert(`you click on square # ${step.indexOf(curr[0])}` )
   
    }
    return <li key={move}>
      <button onClick={()=>{jumpTo(move)}} >{description}</button>
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