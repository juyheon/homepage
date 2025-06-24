import React from 'react';
import { Link } from 'react-router-dom';

const Navie = () => {
  return (
    //space-x-4: 메뉴 항목들 사이에 가로 간격 설정 justify-center: 메뉴 항목들을 가운데 정렬 
    <nav className="bg-neutral-800 bg-opacity-95 py-6 px-8 text-white flex flex-row space-x-4 justify-center">
      {/* Introduction */}
      <div>
        <ul className="space-y-1">
          <li><Link to="/introduction/Rreeting" className="hover:underline">인사말</Link></li>
          <li><Link to="/introduction/MasterList" className="hover:underline">지도진 소개</Link></li>
          <li><Link to="/introduction/DirectionsMap" className="hover:underline">오시는 길</Link></li>
        </ul>
      </div>

      {/* Program */}
      <div>
        <ul className="space-y-1 ml-1">
          <li><Link to="/program/WeeklyPlanner" className="hover:underline">주간수련계획표</Link></li>
          <li><Link to="/program/ClassSchedule" className="hover:underline">수업시간표</Link></li>
        </ul>
      </div>

      {/* Photo */}
      <div>
        <ul className="space-y-1 ml-4">
          <li><Link to="/photo/Event" className="hover:underline">행사</Link></li>
          <li><Link to="/photo/DailyMoments" className="hover:underline">일상</Link></li>
        </ul>
      </div>

      {/* Shop */}
      <div>
        <ul className="space-y-1 ml-6">
          <li><Link to="/shop/Dobok" className="hover:underline">도복</Link></li>
          <li><Link to="/shop/Belt" className="hover:underline">띠</Link></li>
          <li><Link to="/shop/SeasonalUniform" className="hover:underline">동하복</Link></li>
        </ul>
      </div>

      {/* Service */}
      <div>
        <ul className="space-y-1 ml-6">
          <li><Link to="/service/NoticeBoard" className="hover:underline">공지사항</Link></li>
          <li><Link to="/service/ReviewSection" className="hover:underline">후기</Link></li>
          <li><Link to="/service/Contact" className="hover:underline">문의</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navie;
