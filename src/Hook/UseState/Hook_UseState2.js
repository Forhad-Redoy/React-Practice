import React,{useState} from 'react'

export default function Hook_UseState2() {

    const [count,setCount]=useState(0)


    // const inCrease =()=> setCount(count+1)
    // const deCrease =()=>setCount(count-1)  
    // const reSet=()=>setCount(0)      
    


  return (
    <div className='text-center'>
        <h1 className='btn'>Count : {count}</h1>
        <button className=' ' onClick={()=> setCount(count+1)} disabled={count===60?true:false}>Increse</button>
        <button className='' onClick={()=>setCount(count-1)} disabled={count===0?true:false}>Increse</button>
        <button className=' ' onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}