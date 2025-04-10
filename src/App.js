import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import '../src/front/css/responsive.css';
import Main from './Page/Main';
import Gallery from './Page/Gallery'
import {Routes,Route} from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Routes>
      <Route path='*' element={<Main/>} />
      {/* <Route path='/gallery' element={<Gallery/>} /> */}
    </Routes>
    </>
  );
}

export default App;
