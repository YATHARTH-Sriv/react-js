import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    })
  return (
    <div className='text-3xl bg-slate-600 text-orange-500 text-center p-3'>
        Github:{data.name}
        <img src={data.avatar_url} width={300} />
    </div>
  )
}

export default Github