import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10)

  const reduce=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
  }
  

  return (
    <>
      <h1> learning react</h1>
      <h2> counter value {counter}</h2>
      <button onClick={()=>{setCounter(counter+1)}}>ADD</button>
      <button onClick={reduce}>REMOVE</button>
    </>
  )
}

export default App
