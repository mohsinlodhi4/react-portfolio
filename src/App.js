import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/animations.css';
import './App.css';
import Main from './Page/Main';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      offset: 100
    });
  }, []);

  return (
    <Routes>
      <Route path='*' element={<Main />} />
    </Routes>
  );
}

export default App;
