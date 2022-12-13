import React from "react";

function EndGame ({winner, draw, handleRestart}) {
    return (
    <> 
        <div className="end-game-screen"> 
        {winner && <span className="text">{winner} is win!</span>}
        {draw && <span className="text">It's a Draw</span>}
        <button className="btn" onClick={handleRestart}>Play Again</button>
        </div>
    </>
    )
    
}

export default EndGame;