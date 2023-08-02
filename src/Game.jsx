import { useState } from "react";



function Game({game}){

    const  [likes, setLikes] = useState(0);

    function increment(){
        setLikes(likes => likes + 1);
    }
    return(
        <>
        <figure className="game-card">
        <img className="cover" src={game.imgURL}/>
        <figcaption>{game.name}</figcaption>
        </figure>
        <button onClick={() =>increment()}> Like {likes}</button>
        </>
    )
}

export default Game;