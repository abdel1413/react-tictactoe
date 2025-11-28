
import { Squares } from "./Squares"

export const Board =({xIsNext, squares, onPlay})=>{

  //lift up these states to game component
// const [squares, setSquares] =   useState(Array(9).fill(null))
// const [xIsNext, setXIsNext] = useState(true)


const winner =  winnerFunction(squares)


  let status;
  if(winner){
    status= "Winner: "+ winner
  }else if(squares.every(Boolean))  {
    status = "No winner"
  }else{
    status ="next player: "+ (xIsNext ? "X" : "O")

  } 
   


 const handleClick =(i)=>{
  
  if( winner||squares[i]){
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

   const size  = 3;
   const board = [];

   for(let row = 0; row < size; row++){
     const cols =[];
      for(let col = 0; col < size; col++){
        const index = row * size + col;
        cols.push( <Squares key={index} value={squares[index]} onSquareClick= { ()=> handleClick(index)} />)
      }
    
      cols.forEach(e => console.log(e))

      board.push(<div key={row} className="row">{cols}</div>)
      
   }
   board.forEach(b =>console.log(b.props.children))
    
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
      if(squares && squares[a] === squares[b] && squares[a]===squares[c]){
        return squares[a]
      }
    }
    return null;
}
  