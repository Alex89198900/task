import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/Aboutus';
import Notfound from '../pages/Notfoundpage';
import Main from '../pages/Main';

import Contact from '../pages/Contact';

function Routeses() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} errorElement={<Notfound />} />
        <Route path="/about" element={<About />} errorElement={<Notfound />} />
        <Route path="/contact" element={<Contact />} errorElement={<Notfound />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default Routeses;
