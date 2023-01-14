import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    //   const aust ={
    //     backgroundImage:"url('./img/Switzerland.jpg')",
    //     height:'100vh',
    //     marginTop:'-70px',
    //     fontSize:'50px',
    //     padding:'300px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // }; 
    // const swit={
    //     backgroundImage:"url('./img/aki.jpg')",
    //     height:'100vh',
    //     marginTop:'-70px',
    //     fontSize:'50px',
    //     padding:'300px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };
    // const bali={
    //     backgroundImage:"url('./img/Bali.jpg')",
    //     height:'100vh',
    //     marginTop:'-70px',
    //     fontSize:'50px',
    //     padding:'300px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };
      // let num =['1','2','3','4','5']
    // let img =[{img:"img/Australia.jpg"},
    //           {img:"img/6.jpg"},
    //           {img:"img/Bali.jpg"}]
  return (
    <div> 
        <div>
        <Slider {...settings}>
        <div className="relative" >
          <img className="w-[100%] h-[850px] " style={{background:"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))"}} src="./img/Australia.jpg" alt="" />
          <h1 className='text-white font-normal text-8xl absolute z-1 top-[430px] left-[740px]' style={{fontFamily:"Nothing You Could Do ,cursive"}}> Australia </h1>
        </div>
        <div className="relative">
          <img className="w-[100%] h-[850px]" src="./img/6.jpg" alt="" />
          <h1 className='text-white font-normal text-8xl absolute  top-[430px] left-[700px]' style={{fontFamily:"Nothing You Could Do ,cursive"}}> Switzerland </h1>
          <button className="w-[170px] h-[60px] bg-teal-400 rounded absolute top-[530px] left-[700px]">Explore Me</button>
        </div>
        <div className="relative">
          <img className="w-[100%] h-[850px]" src="./img/Bali.jpg" alt="" />
          <h1 className='text-white font-normal text-8xl absolute z-1 top-[0px] left-[880px]' style={{fontFamily:"Nothing You Could Do ,cursive"}}> Bali </h1>
        </div>






            {/* {(img).map((i)=>
             <div className="w-[1900px] h-[700px]" ><img src={i.img} alt="" /></div>
            )} */}
            {/* <div className=""><img src="./images/Australia.jpg" alt="" /></div>
            <div><img src="./images/Bali.jpg" alt="" /></div>
            <div><img src="./images/6.jpg" alt="" /></div>
          */}
        </Slider>
     </div>
  </div>
  )
}