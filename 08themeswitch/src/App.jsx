import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, theme } from './context/theme'
import { useEffect } from 'react'
import Card from './components/card'
import ThemeBtn from './components/theme'

function App() {
  const [themeMode,SetTheme]=useState("light")

  const lightTheme=()=>{
    return SetTheme("light")
  }
  const darkTheme=()=>{
    return SetTheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
                          <div className="w-full">
                              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                                <ThemeBtn/> 
                              </div>

                              <div className="w-full max-w-sm mx-auto">
                                <Card/>
                                
                              </div>
                          </div>
            </div>
    </ThemeProvider>

  )
}

export default App
