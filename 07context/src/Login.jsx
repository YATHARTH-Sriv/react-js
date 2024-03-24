import React from 'react'
import { useState,useContext } from 'react'
import Usercontext from './context/UserContext'

function Login(){
     const [username,Setusername]=useState([])
     const [password, Setpassword] = useState([])
     const {Setuser}=useContext(Usercontext)

     function handleSubmitButton(e){
         e.preventDefault()
         Setuser({username,password})
     }

  return(
  <div>
    <input type="text" placeholder='username' value={username} onChange={(e)=>{Setusername(e.target.value)}}/>
    <input type="text" placeholder='password' value={password} onChange={(e)=>{Setpassword(e.target.value)}}/>
    <div>
        <button onClick={handleSubmitButton}>Submit</button>
    </div>
  </div>
  )

}

export default Login