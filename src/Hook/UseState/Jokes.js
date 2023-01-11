import axios from 'axios'
import React ,{useState}from 'react'

export default function Jokes() {
    let [jokes,setJokes]=useState([])

    let newJoke =()=>{
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((data)=>{
            console.log(data)
            setJokes(data.data.setup +"..." +data.data.punchline)
        })
    }
  return (
    <div>
        <button  className='btn' onClick={newJoke}>Clike For New One :  </button>
        {jokes}
       
    </div>
  )
}
