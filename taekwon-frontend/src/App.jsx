// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' 사진

import './App.css'
import "tailwindcss"

import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import Introducion from './pages/Introducion.jsx'
import Photo from './pages/Photo.jsx'
import Progarm from './pages/Program.jsx'
import Service from './pages/Service.jsx'
import Shop from './pages/Shop.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introducion />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/program" element={<Progarm />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
