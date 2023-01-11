import React, { useState } from 'react'
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"

export default function Responsive() {
    const [respons,setRespons]=useState()

    let handleChange =()=>{
        setRespons(!respons)
    }

    const navItem =['Home','Blog','About','Commiunity']


  return (
    <div>
        <div className='xl:flex lg:flex md:flex items-center justify-between'>
            <div className='w-32'>
             <FaConnectdevelop color='orange' size='3rem'/>
            </div>

         <div>
          <nav>
                <ul className='xl:flex lg:flex md:flex sm:hidden md:items-center space-x-3'>
                    {
                      navItem.map((x)=>(
                        <li className='md:ml-10  text-lg font-semibold'><a href="">{x}</a></li>
                      ))  
                    }
                </ul>
            </nav>
         </div>
        </div>

        {
            respons &&  <nav className=''>
            <ul className=' absolute w-[70%] top-[40px] right-[-400px] xl:hidden lg:hidden md:hidden'>
                {
                  navItem.map((x)=>(
                    <li className=''><a href="">{x}</a></li>
                  ))  
                }
            </ul>
        </nav>
        }
        <div className='xl:hidden lg:hidden md:hidden' onClick={handleChange}>
            { respons ===false ? <AiOutlineMenu/>:<RxCross1/>}
        </div>
    </div>
  )
}
