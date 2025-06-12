import './App.css'

import reactLogo from './assets/react.svg' // 이미지 파일을 가져옵니다

import { useState, useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Introducion from "./pages/introducion";
import Photo from "./pages/photo";
import Program from "./pages/program";
import Service  from "./pages/service";
import Shop from "./pages/shop";
import NotFound from "./pages/notfound";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introducion" element={<Introducion />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/program" element={<Program />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      }

    </>
  )
}

export default App
