import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  let navigate = useNavigate();
  return (
    <div className='text-center'>
    <h1 className='font-bold text-4xl '>Eikhane Kiso Nai</h1>
    <button className='bg-red-500 rounded-md ' onClick={()=>{navigate("/")}}>Phire Jao</button>
    </div>
  )
}
