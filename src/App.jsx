import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AlertButton from "./AlertButton.jsx"
import Game from "./Game.jsx";
import './App.css'

function App() {

  
 function Toolbar() {
    return (
      <>
      <Game 
          game={{name:"The Legend of Zelda", imgURL:"../src/assets/NES.png"}}
      />
      <Game 
          game={{name:"A Link to the Past", imgURL:"../src/assets/SNES.png"}}
      />

      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
        <AlertButton message="Test">sssss</AlertButton>
      </div>
      </>
    );
  }

  return (
    <>
     <Toolbar />
    </>
  )
}

export default App
