import React,{useState,useEffect} from 'react'

export default function UseEffect1() {
    const [count,setCount]=useState(0)

    // let inCrese = ()=>setCount(count+1)

    useEffect(()=>{
        console.log('useEffect') 
    },[])
    

  return (
    <div>
        {console.log('rendering')}
        
        <h1>Count :{count}</h1>
        <button onClick={()=>setCount(count+1)} >+</button>
    </div>
  )
}
