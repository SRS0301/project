
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts';


export default function App() {
  return (
    <>
     <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contacts" element={<Contacts />} />
       <Route path="/about" element={<About />} />
    </Routes>
 </>
  )
}
