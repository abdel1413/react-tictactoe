import { useState } from "react"

export const Squares=({onSquareClick})=>{
   const [value, setValue] =  useState(null)


    return <button className="square" onClick={onSquareClick}>{value}</button>
}