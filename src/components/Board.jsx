import { useState } from "react"
import { Squares } from "./Squares"

export const Board =()=>{
const [squares, setSquares] =   useState(Array(9).fill(null))
const [xIsNext, setXIsNext] = useState(true)


 const handleClick =(i)=>{
  console.log('sqi', squares[i])
  if(squares[i]){
    return;; 
  }
  const nextSquares = squares.slice();
  console.log('copy',nextSquares)
  
  if(xIsNext){
    nextSquares[i] = "X"
  }else{
    nextSquares[i] = "O"
  }
   setSquares(nextSquares)
   setXIsNext(!xIsNext)
 }
    return (<>

      <div className="board-row">
        <Squares value={squares[0]} onSquareClick= { ()=> handleClick(0)} />
        <Squares value={squares[1]} onSquareClick= { ()=> handleClick(1)}/>
        <Squares value={squares[2]} onSquareClick= { ()=> handleClick(2)}/>
      </div>
      <div className="board-row">
        <Squares value={squares[3]} onSquareClick= { ()=> handleClick(3)}/>
        <Squares value={squares[4]}onSquareClick= { ()=> handleClick(4)}/>
        <Squares value={squares[5]} onSquareClick= { ()=> handleClick(5)}/>
      </div>
      <div className="board-row">
        <Squares value={squares[6]} onSquareClick= { ()=> handleClick(6)}/>
        <Squares value={squares[7]} onSquareClick= { ()=> handleClick(7)}/>
        <Squares value={squares[8]} onSquareClick= { ()=> handleClick(8)}/>
      </div>
    </>)
}