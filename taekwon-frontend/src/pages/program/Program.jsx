import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const Program = () => {
  return (
    <div>
      <h1>프로그램 안내</h1>

      <div className="pt-[72px]">
        {/* 공통적으로 보여줄 내용 (예: 프로그램 소개, 서브 메뉴 등) */}
        <nav className="mb-4">
          {/* 이제 Link를 사용할 수 있습니다. */}
          <Link to="/program/WeeklyPlanner" className="mr-4 text-blue-600 hover:underline">주간 계획</Link>
          <Link to="/program/ClassSchedule" className="text-blue-600 hover:underline">시간표</Link>
        </nav>

        <hr className="my-4" />

        {/* 여기가 중요! 자식 라우트의 컴포넌트가 렌더링될 위치 */}
        <Outlet />
      </div>
      
    </div>
  );
};

export default Program;