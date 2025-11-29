
import { Squares } from "./Squares"

export const Board =({xIsNext, squares, onPlay})=>{

  //lift up these states to game component
// const [squares, setSquares] =   useState(Array(9).fill(null))
// const [xIsNext, setXIsNext] = useState(true)


const winningLine =  winnerFunction(squares.squaresArray)
console.log('win line', winningLine)


console.log('squares b', squares.squaresArray)
console.log('squares b', squares.location)

  let status;
  if(winningLine){
    const winnerSymbol = squares.squaresArray[winningLine[0]]
    console.log('s',winnerSymbol)
     status= "Winner: "+ winnerSymbol;
    // let symbol = squares[winningLine[0]]
    // status ="Winner :"+ symbol
  }else if(squares.squaresArray.every(Boolean))  {
    status = "No winner"
  }else{
    status ="next player: "+ (xIsNext ? "X" : "O")
  } 
   


 const handleClick =(i)=>{
  if( winningLine||squares.squaresArray[i]) return;; 
  
  const nextSquares = squares.squaresArray.slice();
  
  // if(xIsNext){
  //   nextSquares[i] = "X"
  // }else{
  //   nextSquares[i] = "O"
  // }
  nextSquares[i] = xIsNext? "X": "O"

  //  setSquares(nextSquares)
  //  setXIsNext(!xIsNext)
  
  onPlay(nextSquares,i)
 }

   const size  = 3;
   const board = [];
 
   for(let row = 0; row < size; row++){
     const cols =[];
      for(let col = 0; col < size; col++){
        const index = row * size + col;       
        
        cols.push(
            <Squares key={index}
             value={squares.squaresArray[index]}
             highlight={winningLine?.includes(index)} //highlight it if part of winning combo
            onSquareClick= { ()=> handleClick(index)} />)
      }
      board.push(<div key={row} className="row">{cols}</div>)    
   }

    return (<>
       <h2 className="status" style={{color:"skyblue"}}>{status}</h2>
       <div className="board"> 
      {board}
      </div>  
    </>)
}



const  winnerFunction = (squares)=>{
    const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ] 
      
    for(let i=0; i< winner.length; i++){
      const [a,b,c]=winner[i]
      if(squares.squaresArray[a] 
        && squares.squaresArray[a] === squares.squaresArray[b] 
        && squares.squaresArray[a]===squares.squaresArray[c]){
      //  return squares[a] // return winning item
     
        return [a,b,c] //array of winning  indexes
      }
    }
    return null;
}
  
