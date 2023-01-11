import React from 'react'

export default function BG() {
  const myStyle={
    backgroundImage:"url('./img/Switzerland.jpg')",
    height:'200px',
    width:'250px',
    // marginTop:'-70px',
    fontSize:'30px',
    padding:'170px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const aki={
  backgroundImage:"url('./img/aki.jpg')",
  height:'200px',
  width:'145px',
  // marginTop:'-70px',
  fontSize:'30px',
  padding:'200px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const aust={
  backgroundImage:"url('./img/Australia.jpg')",
  height:'200px',
    width:'145px',
  // marginTop:'-70px',
  fontSize:'30px',
  padding:'200px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const bali={
  backgroundImage:"url('./img/Bali.jpg')",
  height:'200px',
  width:'145px',
  // marginTop:'-70px',
  fontSize:'30px',
  padding:'200px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
// const myStyle={
//   backgroundImage:"url('./img/Switzerland.jpg')",
//   height:'500px',
//   width:'500px',
//   marginTop:'-70px',
//   fontSize:'30px',
//   padding:'200px',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

  return (
    <div>
      <div className='flex gap-10 m-10'>
       <div className='hover:translate-y-[-40px] duration-500 rounded cursor-pointer' style={myStyle}>
          {/* <h1> Switzerland </h1> */}
        </div>
        <div className='hover:translate-y-[-40px] duration-500 rounded cursor-pointer' style={aki}>
          <h1> Switzerland </h1>
        </div>
        <div className='hover:translate-y-[-40px] duration-500 rounded cursor-pointer' style={aust}>
          <h1> Switzerland </h1>
        </div>
        <div className='hover:translate-y-[-40px] duration-500 rounded cursor-pointer' style={bali}>
          <h1> Switzerland </h1>
        </div>
      </div>
       
      
    </div>
  )
}
