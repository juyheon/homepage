import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import programe7 from "../../assets/7year/7_programe.jpg";
import programe7_1 from "../../assets/7year/7_programe1.jpg";
import programe7_2 from "../../assets/7year/7_programe2.jpg";
import programe7_3 from "../../assets/7year/7_programe3.jpg";
import programe7_4 from "../../assets/7year/7_programe4.jpg";

const images = [programe7, programe7_1, programe7_2, programe7_3, programe7_4];

const Program = () => {
  const location = useLocation();
  // 현재 경로가 /programPages 또는 /programPages/program 인 경우에만 이미지 슬라이드 보이게
  const showImages = location.pathname === '/programPages' || location.pathname === '/programPages/program.jsx';

  return (
    <div>
      {/* {showImages && (
        <div className="w-full overflow-x-auto py-4">
          <div className="flex gap-4 min-w-max">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`프로그램 이미지 ${idx + 1}`}
                className="h-60 rounded shadow-md object-cover flex-shrink-0"
                style={{ minWidth: '320px' }}
              />
            ))}
          </div>
        </div>
      )} */}
      <div text-white>안녕하세요</div>
      {/* 여기가 중요! 자식 라우트의 컴포넌트가 렌더링될 위치 */}
      <Outlet />
    </div>
  );
};

export default Program;