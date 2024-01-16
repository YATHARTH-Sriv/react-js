import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className=' w-full h-screen relative  ' style={{backgroundColor:color}}>
      <div className=' bg-lime-500 p-3 rounded-md w-1/3 flex justify-center absolute inset-x-1/3 bottom-1/4 '>
        <button className=' rounded-md m-3 p-3 font-serif  bg-red-500 text-black ' onClick={()=>{setColor("red")}} >Red</button>
        <button className=' rounded-md m-3 p-3 font-serif  bg-green-400 text-black' onClick={()=>{setColor("green")}} >Green</button>
        <button className=' rounded-md m-3 p-3 font-serif  bg-yellow-400 text-black' onClick={()=>{setColor("yellow")}}>Yellow</button>
      </div>
    </div>
  )
}

export default App
