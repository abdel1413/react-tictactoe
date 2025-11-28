

export const Squares=({value,onSquareClick, highlight})=>{
      
    return <button  className={`square ${highlight? "highlight": ""}`} onClick={onSquareClick}
   
    >{value}</button>
}