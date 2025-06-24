import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Introducion = () => {
  const location = useLocation(); // 현재 URL의 정보를 가져옵니다.

  // 각 섹션에 대한 ref를 생성합니다.
  const masterListRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    // URL 해시(#)가 변경될 때마다 실행됩니다.
    if (location.hash === '#master-list' && masterListRef.current) {
      masterListRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#location' && locationRef.current) {
      locationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]); // location.hash가 변경될 때마다 이 효과를 재실행합니다.

  return (
    <>
      <Header />

      <h1>학원 소개</h1>

      {/* 지도진 소개 섹션 */}
      <section ref={masterListRef} id="master-list" style={{ minHeight: '500px', border: '1px solid gray', marginBottom: '20px' }}>
        <h2>지도진 소개</h2>
        <p>저희 학원의 훌륭한 지도진을 소개합니다...</p>
        {/* 지도진 관련 내용 */}
      </section>

      {/* 오시는 길 섹션 */}
      <section ref={locationRef} id="location" style={{ minHeight: '500px', border: '1px solid gray', marginBottom: '20px' }}>
        <h2>오시는 길</h2>
        <p>저희 학원은 여기에 위치해 있습니다...</p>
        {/* 오시는 길 관련 내용 (지도 등) */}
      </section>

      {/* 다른 섹션들... */}

      <Footer />  
    </>
  );
};

export default Introducion;