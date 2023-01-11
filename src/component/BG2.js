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
      const aust ={
        backgroundImage:"url('./img/Switzerland.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        padding:'300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }; 
    const swit={
        backgroundImage:"url('./img/aki.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        padding:'300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const bali={
        backgroundImage:"url('./img/Bali.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        padding:'300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
      // let num =['1','2','3','4','5']
    // let img =[{img:"img/Australia.jpg"},
    //           {img:"img/6.jpg"},
    //           {img:"img/Bali.jpg"}]
  return (
    <div> 
        <div>
        <Slider {...settings}>
        <div style={aust}>
         <h1 className=''> geeksforgeeks </h1>
        </div>
        <div style={swit}>
         <h1 className=''> geeksfor </h1>
        </div>
        <div style={bali}>
         <h1 className=''> geeks </h1>
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