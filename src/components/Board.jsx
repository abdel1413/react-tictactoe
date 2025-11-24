import { Squares } from "./Squares"

export const Board =()=>{
    return (<>

      <div className="board-row">
        <Squares value={1}/>
        <Squares value={2}/>
        <Squares value={3}/>
      </div>
      <div className="board-row">
        <Squares value={4}/>
        <Squares value={5}/>
        <Squares value={6}/>
      </div>
      <div className="board-row">
        <Squares value={7}/>
        <Squares value={8}/>
        <Squares value={9}/>
      </div>
    </>)
}