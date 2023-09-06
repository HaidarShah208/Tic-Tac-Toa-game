import React, { useState,useEffect } from "react";
import Sqaure from "./sqaure";
import "../css/board.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [youWinners, setYouWinner] = useState(null);
  const [isXTurn, setIsXTurn] = useState(true);
  console.log(state);

  const chkWinner = () => {
    const winnerLogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogin) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        return state[a];
      }
    }
    return false;
  };

  const youWinner = chkWinner();

  const handClick = (index) => {
    //if box already o or x then not replace 
    if(state[index]!==null){
      return
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "x" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
    console.log("clicked on index", index);
  };

  //reset game
const handleReset=()=>{
  setState(Array(9).fill(null))
}

  return (
    <div style={{margin:'6% 20%'}} className="board-container">
     {youWinner ?<div style={{position:"absolute",top:'30%',left:'45%'}}>
     <h1 style={{marginBottom:'30px'}}><span style={{color:'green',paddingRight:'10px'}}>{youWinner}</span> win this</h1>
     <button onClick={handleReset} className='btn btn-outline-success'>play again </button>
     </div> :
      <>
      <h2 style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 15px 15px'}} className="my-5 py-3 text-center">Please <span style={{color:'green ',}}>{isXTurn? 'X':"0"} </span> move now</h2>
     <div className="board-row">
        <Sqaure onClick={() => handClick(0)} value={state[0]} />
        <Sqaure onClick={() => handClick(1)} value={state[1]} />
        <Sqaure onClick={() => handClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Sqaure onClick={() => handClick(3)} value={state[3]} />
        <Sqaure onClick={() => handClick(4)} value={state[4]} />
        <Sqaure onClick={() => handClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Sqaure onClick={() => handClick(6)} value={state[6]} />
        <Sqaure onClick={() => handClick(7)} value={state[7]} />
        <Sqaure onClick={() => handClick(8)} value={state[8]} />
      </div>
  </>
     }
    </div>
  );
};

export default Board;
