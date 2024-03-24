import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className=' bg-slate-700 text-orange-400 text-4xl p-4 text-center '>User:{userid}</div>
  )
}

export default User