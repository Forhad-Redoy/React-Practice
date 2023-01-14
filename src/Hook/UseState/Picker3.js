import React, { useState } from "react";  
import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css";  
  
// CSS Modules, react-datepicker-cssmodules.css  
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';  
  
const Example2 = () => {  
  const [startDate, setStartDate] = useState(null);  
  return (  
    <div className="flex space-x-5">
      <div className="">
        <DatePicker placeholderText='Date' selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} isClearable filterDate={date=>date.getDay()!=6 && date.getDay()!=0}/>  
      </div>

        <input type="text" placeholder="Hi" />
        <input type="text" placeholder="Hello" />
    </div>
  );  
}; 
export default Example2;