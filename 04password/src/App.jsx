import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-screen bg-amber-300 relative'>
      <h1 className=' bg-violet-500 text-black rounded-md w-1/4 flex justify-center absolute inset-x-1/3 bottom-1/4 p-4 '>password generator</h1>
    </div>
  )
}

export default App
