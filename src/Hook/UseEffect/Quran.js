import React ,{useState,useEffect}from 'react'
import axios from "axios"

export default function Quran() {
    const [surah,setSurah]=useState([])




useEffect(()=>{
    axios.get(`https://api.quran.com/api/v4/chapters?language=en`)
    .then((data)=>{
        console.log("data...",data)
        setSurah(data.data.chapters )
    })
},[])

   
  return (
    <div className='text-center' >
        <h1 className='font-bold '>Quran Surah List</h1>
        <div className=''>
            <ul>
                {
                    surah?.map((surah,id)=>(
                        <li key={id}>
                            {surah.name_simple}-{surah.name_arabic}
                        </li>
                    ))
                        
                }
            </ul>
        </div>
    </div>
  )
}
