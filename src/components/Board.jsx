import { useState } from "react"
import { Squares } from "./Squares"

export const Board =()=>{
const [squares, setSquares] =   useState(Array(9).fill(null))
    return (<>

      <div className="board-row">
        <Squares value={squares[0]}/>
        <Squares value={squares[1]}/>
        <Squares value={squares[2]}/>
      </div>
      <div className="board-row">
        <Squares value={squares[3]}/>
        <Squares value={squares[4]}/>
        <Squares value={squares[5]}/>
      </div>
      <div className="board-row">
        <Squares value={squares[6]}/>
        <Squares value={squares[7]}/>
        <Squares value={squares[8]}/>
      </div>
    </>)
}