// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' 사진

import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';

import Introducion from './pages/introducion/Introducion.jsx'
import Rreeting from './pages/introducion/Rreeting.jsx'
import MasterList from './pages/introducion/MasterList.jsx'
import DirectionsMap from './pages/introducion/DirectionsMap.jsx'

import Progarm from './pages/program/Program.jsx'
import WeeklyPlanner from './pages/program/WeeklyPlanner.jsx'
import ClassSchedule from './pages/program/ClassSchedule.jsx'

import Photo from './pages/photo/Photo.jsx'
import Event from './pages/photo/Event.jsx'
import DailyMoments from './pages/photo/DailyMoments.jsx'

import Shop from './pages/shop/Shop.jsx'
import Dobok from './pages/shop/Dobok.jsx'
import Belt from './pages/shop/Belt.jsx'
import SeasonalUniform from './pages/shop/SeasonalUniform.jsx'

import Service from './pages/service/Service.jsx'
import NoticeBoard from './pages/service/NoticeBoard.jsx'
import ReviewSection from './pages/service/ReviewSection.jsx'
import Contact from './pages/service/Contact.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/introduction" element={<Introducion />}>
          <Route index element={<div>소개 메인 페이지</div>} />
          <Route path="Rreeting" element={<Rreeting />} />
          <Route path="MasterList" element={<MasterList />} />
          <Route path="DirectionsMap" element={<DirectionsMap />} />
        </Route>

        <Route path="/program" element={<Progarm />}>
          <Route index element={<div>프로그램 메인 페이지</div>} />
          <Route path="WeeklyPlanner" element={<WeeklyPlanner />} />
          <Route path="ClassSchedule" element={<ClassSchedule />} />
        </Route>
        
        <Route path="/photo" element={<Photo />}>
          <Route index element={<div>포토 메인 페이지</div>} />
          <Route path="Event" element={<Event />} />
          <Route path="DailyMoments" element={<DailyMoments />} />
        </Route>

        <Route path="/shop" element={<Shop />}>
          <Route index element={<div>숍 메인 페이지</div>} />
          <Route path="Dobok" element={<Dobok />} />
          <Route path="Belt" element={<Belt />} />
          <Route path="SeasonalUniform" element={<SeasonalUniform />} />
        </Route>

        <Route path="/service" element={<Service />}>
          <Route index element={<div>서비스 메인 페이지</div>} />
          <Route path="NoticeBoard" element={<NoticeBoard />} />
          <Route path="ReviewSection" element={<ReviewSection />} />
          <Route path="Contact" element={<Contact />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App