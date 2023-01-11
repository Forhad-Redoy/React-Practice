import React,{ useState, useEffect } from 'react'

export default function Timer() {
    
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          setTimeout(() => {
            setCount( count + 1);
          }, 1000);
        });
  return (
    <div>
        <h1 className='font-semibold text-center'>Timer : {count}</h1>
    </div>
  )
}
