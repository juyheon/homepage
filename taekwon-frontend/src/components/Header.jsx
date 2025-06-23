import logo from '../assets/logo.png';
import Navie from "./Navie";

import { useState } from "react";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {/* 전체 헤더 컨테이너 */}
      {/* bg-neutral-800: 어두운 회색 배경 (이미지 분석 결과, 이 색상이 가장 유사합니다.) */}
      {/* text-white: 모든 자식 요소의 기본 텍스트 색상을 흰색으로 설정 */}
      {/* py-4: 상하 패딩 (1rem), px-4: 좌우 패딩 (1rem) */}
      {/* sm:px-6 lg:px-8: 반응형 디자인을 위해 중간/큰 화면에서 좌우 패딩을 더 넓게 설정 */}
      {/* shadow-md: 헤더에 부드러운 그림자 효과를 주어 입체감을 더합니다. */}
      <header 
      className="fixed top-0 left-0 w-full bg-neutral-800 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      >
        {/* 내부 컨테이너 */}
        {/* flex: Flexbox 컨테이너로 설정 */}
        {/* flex-wrap: 내용이 많아지면 줄바꿈을 허용하여 반응형으로 만듭니다. */}
        {/* justify-between: 자식 요소(로고, 내비게이션, 버튼)를 양 끝으로 정렬 */}
        {/* items-center: 자식 요소들을 세로 축 기준으로 중앙 정렬 */}
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* 로고 영역 */}
          {/* flex-shrink-0: 로고 영역이 줄어들지 않도록 고정 */}
          {/* mb-4 sm:mb-0: 모바일 화면에서만 아래쪽 마진(공백)을 주고, sm(태블릿) 이상에서는 마진 제거 */}
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            {/* hover:opacity-80 transition duration-300: 마우스 오버 시 투명도 변경 효과 */}
            <a href="/" className="block hover:opacity-80 transition duration-300 ease-in-out">
              <img
                src={logo} // 로고 이미지 삽입
                alt="사이트 로고" // 웹 접근성을 위한 alt 텍스트
                className="h-10 w-auto" // 이미지 높이를 10 (40px)으로 설정하고 너비는 자동으로 조절
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x40/A33D4F/FFFFFF?text=Logo+Error"; e.target.alt="로고 이미지 로드 실패"; }} // 이미지 로드 실패 시 대체 이미지
              />
            </a>
          </div>
          {/* 네비게이션 메뉴 */}
          {/* flex-grow: 사용 가능한 공간을 최대한 차지하도록 설정하여 메뉴가 중앙에 위치하도록 돕습니다. */}
          <nav className="flex-grow">
            {/* 메뉴 항목들 */}
            {/* flex flex-wrap: 메뉴 아이템을 가로로 정렬하고, 작은 화면에서 줄바꿈을 허용 */}
            {/* justify-center sm:justify-start lg:justify-center: 반응형 정렬 (모바일에서는 가운데, 태블릿에서는 왼쪽, 데스크탑에서는 다시 가운데 정렬) */}
            {/* space-x-4 sm:space-x-6: 메뉴 아이템들 사이에 가로 간격 설정 */}
            <ul className="flex flex-wrap justify-center sm:justify-start lg:justify-center space-x-4 sm:space-x-6">
              {/* 각 메뉴 항목 */}
              {/* text-lg: 폰트 크기 */}
              {/* hover:underline: 마우스 오버 시 밑줄 효과 */}
              {/* transition duration-300 ease-in-out: 밑줄 효과에 부드러운 전환 추가 */}
              {/* px-2 py-1 rounded-md: 링크 클릭 영역을 좀 더 넓히고 부드러운 모서리 추가 (미세한 터치 영역 개선) */}
              <li><a href="/introduction" className="text-lg hover:underline transition duration-300 ease-in-out px-2 py-1 rounded-md">Introduction</a></li>
              <li><a href="/photo" className="text-lg hover:underline transition duration-300 ease-in-out px-2 py-1 rounded-md">Photo</a></li>
              <li><a href="/program" className="text-lg hover:underline transition duration-300 ease-in-out px-2 py-1 rounded-md">Program</a></li>
              <li><a href="/shop" className="text-lg hover:underline transition duration-300 ease-in-out px-2 py-1 rounded-md">Shop</a></li>
              <li><a href="/service" className="text-lg hover:underline transition duration-300 ease-in-out px-2 py-1 rounded-md">Service</a></li>
            </ul>
          </nav>
          {/* 가입하기 버튼 기능 구현 X*/}
          {/* mt-4 sm:mt-0: 모바일 화면에서 위쪽 마진을 주고, sm(태블릿) 이상에서는 마진 제거 */}
          <div className="mt-4 sm:mt-0">
            {/* 버튼 스타일 */}
            {/* bg-[#A33D4F]: 이미지 버튼과 유사한 커스텀 빨간색 배경 (HEX 코드 사용) */}
            {/* text-white: 흰색 텍스트, font-semibold: 글씨 굵기 */}
            {/* py-2 px-6: 세로/가로 패딩, rounded-md: 중간 정도의 둥근 모서리, shadow-md: 그림자 효과 */}
            {/* hover:bg-[#8F3546]: 마우스 오버 시 배경색을 더 진한 빨간색으로 변경 */}
            {/* transition duration-300 transform hover:scale-105: 호버 시 부드러운 확대 애니메이션 추가 */}
            {/* focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50: 키보드 포커스 시 아웃라인 제거 및 링 효과 추가 */}
            <button
              className="bg-[#A33D4F] text-white font-semibold py-2 px-6 rounded-md shadow-md
                        hover:bg-[#8F3546] transition duration-300 transform hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50"
            >
              가입하기
            </button>
          </div>
        </div>
      </header>

      {/* 소항목 메뉴, 상태에 따라 표시 */}
      {isHovering && (
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="fixed top-[72px] w-full z-40 bg-white shadow-md transition-all duration-200"
        >
          <Navie />
        </div>
      )}
    </>
  );
}

export default Header;