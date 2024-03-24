import React from 'react'
import { useContext, createContext } from 'react'



export const theme=createContext({
    thememode:"light",
    darkTheme: ()=>{},
    lightTheme:()=>{}

})

export const ThemeProvider=theme.Provider

export default function useTheme(){
    return useContext(theme)
}