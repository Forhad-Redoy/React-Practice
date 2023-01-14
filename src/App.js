import logo from './logo.svg';
import './App.css';
import { Routes, Route }from 'react-router-dom';
import Buttons from './component/Buttons'; //import in Route tag
import HttpRequest from './component/HttpRequest';
import Quran from './component/Quran';
import ContactForm from './component/ContactForm';
import BG from './component/BG';
import Jokes from './Hook/UseState/Jokes';
import Form from './Hook/UseState/Form';
import Responsive from './Hook/UseState/Responsive';
import FavoriteColor from './Hook/UseState/Hook';
import Hook_UseState2 from './Hook/UseState/Hook_UseState2';
import BG2 from './component/BG2';
import Onchange from './component/Onchange';
import Example from './Hook/UseState/Picker2';
import Example2 from './Hook/UseState/Picker3';
import Image1 from './component/Image';




function App() {
  return (
    <div>
      
      {/* <HttpRequest/> */}
      {/* <Quran/> */}
      {/* <ContactForm/> */}

      {/* <Routes>
        <Route path='/' element={<Buttons/>}>
          <Route path='http' element={<HttpRequest/>}/>
          <Route path='quran' element={<Quran/>}/>
        </Route>
      </Routes> */}

      <BG/>
      {/* <Jokes/> */}
      {/* <Form/> */}
      {/* <Responsive/> */}
      {/* <FavoriteColor/> */}
      {/* <Hook_UseState2/> */}
      {/* <BG2/>       */}
      {/* <Onchange/> */}
      {/* <Example/> */}
      {/* <Example2/> */}
      {/* <Form/> */}
      {/* <Image1/> */}
      

    </div>
  );
}

export default App;
