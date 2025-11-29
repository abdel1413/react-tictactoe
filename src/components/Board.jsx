
import { Squares } from "./Squares"

export const Board =({xIsNext, squares, onPlay})=>{

  //lift up these states to game component
// const [squares, setSquares] =   useState(Array(9).fill(null))
// const [xIsNext, setXIsNext] = useState(true)


const winningLine =  winnerFunction(squares)
console.log('win line', winningLine)

  let status;
  if(winningLine){
    const winnerSymbol = squares[winningLine[0]]
    console.log('s',winnerSymbol)
     status= "Winner: "+ winnerSymbol;
    // let symbol = squares[winningLine[0]]
    // status ="Winner :"+ symbol
  }else if(squares.every(Boolean))  {
    status = "No winner"
  }else{
    status ="next player: "+ (xIsNext ? "X" : "O")
  } 
   


 const handleClick =(i)=>{
  if( winningLine||squares[i]) return;; 
  
  const nextSquares = squares.slice();
  
  // if(xIsNext){
  //   nextSquares[i] = "X"
  // }else{
  //   nextSquares[i] = "O"
  // }
  nextSquares[i] = xIsNext? "X": "O"

  //  setSquares(nextSquares)
  //  setXIsNext(!xIsNext)
  
  onPlay(nextSquares)
 }

   const size  = 3;
   const board = [];
 
   for(let row = 0; row < size; row++){
     const cols =[];
      for(let col = 0; col < size; col++){
        const index = row * size + col;       
        
        cols.push(
            <Squares key={index}
             value={squares[index]}
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
      if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
      //  return squares[a] //array of items
      console.log(squares[a])
        return [a,b,c] //array of indexes
      }
    }
    return null;
}
  
