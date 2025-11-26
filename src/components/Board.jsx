
import { Squares } from "./Squares"

export const Board =({xIsNext, squares, onPlay})=>{

  //lift up these states to game component
// const [squares, setSquares] =   useState(Array(9).fill(null))
// const [xIsNext, setXIsNext] = useState(true)


const winner =  winnerFunction(squares)

  let status;
  if(winner){
    status= "Winner: "+ winner
  }else{
    status ="next player: "+ (xIsNext ? "X" : "O")
  }



 const handleClick =(i)=>{
  
  if(squares[i] || winnerFunction(squares)){
    return;; 
  }
  const nextSquares = squares.slice();
  
  if(xIsNext){
    nextSquares[i] = "X"
  }else{
    nextSquares[i] = "O"
  }
  //  setSquares(nextSquares)
  //  setXIsNext(!xIsNext)
  onPlay(nextSquares)
 }
    return (<>
       <h2 className="status" style={{color:"skyblue"}}>{status}</h2>
       <div>
      <div  className="board-row">
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

      
      if(squares && squares[a] === squares[b] && squares[a]===squares[c]){
        return squares[a]
      }
    }
    return null;
}
  