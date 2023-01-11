import React from 'react'

export default function Tailwind() {
  return (
    <div>
    <body className="h-screen flex items-center  justify-center bg-grey-100 dark:bg-gray-600">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 lg:flex xl:flex dark:bg-gray-900" >
        <img className="h-40 w-40 mx-auto rounded-full ring-4 ring-red-500 hover:scale-105 duration-500" src="./img/aki.jpg" alt="" />
        <div className=" text-center ">
          <p className="font-bold space-y-2 text-blue-500">Aki</p>
          <p className="font-normal  text-sky-500">Anime Character</p>
          <button className="btn ">HeHe</button>
        </div>
        
      </div>
    
    </body>
    </div>
  )
}

