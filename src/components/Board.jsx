import { useState } from "react"
import { Squares } from "./Squares"

export const Board =()=>{
const [squares, setSquares] =   useState(Array(9).fill(null))
const [xIsNext, setXIsNext] = useState(true)


 const handleClick =(i)=>{
  if(squares[i]){
    return;; 
  }
  const nextSquare = squares.slice();
  
  if(xIsNext){
    nextSquare[i] = "X"
  }else{
    nextSquare[i] = "O"
  }
   setSquares(nextSquare)
   setXIsNext(!xIsNext)
 }
    return (<>

      <div className="board-row">
        <Squares value={squares[0]} onSquareClick= {handleClick} />
        <Squares value={squares[1]} onSquareClick= {handleClick}/>
        <Squares value={squares[2]} onSquareClick= {handleClick}/>
      </div>
      <div className="board-row">
        <Squares value={squares[3]} onSquareClick= {handleClick}/>
        <Squares value={squares[4]}onSquareClick= {handleClick}/>
        <Squares value={squares[5]} onSquareClick= {handleClick}/>
      </div>
      <div className="board-row">
        <Squares value={squares[6]} onSquareClick= {handleClick}/>
        <Squares value={squares[7]} onSquareClick= {handleClick}/>
        <Squares value={squares[8]} onSquareClick= {handleClick}/>
      </div>
    </>)
}