import React from 'react'
import { useState } from 'react'
import Usercontext from './UserContext'

const UserContextProvider=({children})=>{
    const[user,Setuser]=useState("")
  return (
    <Usercontext.Provider value={{user,Setuser}}>
    {children}
    </Usercontext.Provider>
  )
}

export default UserContextProvider