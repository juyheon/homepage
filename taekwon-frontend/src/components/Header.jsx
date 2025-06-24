// components/Header.jsx

import logo from '../assets/logo.png';
import Navie from "./Navie";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [modal, setModal] = useState(null);

    return (
        <>
            <header
                className="fixed top-0 left-0 w-full bg-neutral-800 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md z-20"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <div className="flex-shrink-0 mb-4 sm:mb-0">
                        <Link to="/" className="block hover:opacity-80 transition duration-300 ease-in-out">
                            <img
                                src={logo}
                                alt="사이트 로고"
                                className="h-10 w-auto"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x40/A33D4F/FFFFFF?text=Logo+Error"; e.target.alt="로고 이미지 로드 실패"; }}
                            />
                        </Link>
                    </div>
                    {/* 상위 메뉴 항목을 감싸는 컨테이너에 container mx-auto를 적용하여 Navie와 동일한 너비 규칙을 따르도록 합니다. */}
                    {/* flex-grow는 여전히 사용하되, container의 max-width에 의해 제한됩니다. */}
                    <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
                        <ul className="grid grid-cols-5 gap-x-4 justify-items-center">
                            <li className="w-full">
                                <Link to="/introduction" className="block text-lg text-center hover:underline transition duration-300 ease-in-out py-1 rounded-md">Introduction</Link>
                            </li>
                            <li className="w-full">
                                <Link to="/program" className="block text-lg text-center hover:underline transition duration-300 ease-in-out py-1 rounded-md">Program</Link>
                            </li>
                            <li className="w-full">
                                <Link to="/photo" className="block text-lg text-center hover:underline transition duration-300 ease-in-out py-1 rounded-md">Photo</Link>
                            </li>
                            <li className="w-full">
                                <Link to="/shop" className="block text-lg text-center hover:underline transition duration-300 ease-in-out py-1 rounded-md">Shop</Link>
                            </li>
                            <li className="w-full">
                                <Link to="/service" className="block text-lg text-center hover:underline transition duration-300 ease-in-out py-1 rounded-md">Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 sm:mt-0 flex gap-3">
                        <button
                            className="bg-[#A33D4F] text-white font-semibold py-2 px-6 rounded-md shadow-md
                                       hover:bg-[#8F3546] transition duration-300 transform hover:scale-105
                                       focus:outline-none focus:ring-2 focus:ring-[#A33D4F] focus:ring-opacity-50"
                            onClick={() => setModal('signup')}
                        >
                            가입하기
                        </button>
                    </div>
                </div>
            </header>

            {isHovering && (
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="fixed top-[72px] w-full z-40 bg-neutral-800 bg-opacity-95 shadow-md transition-all duration-200"
                >
                    {/* Navie는 이미 container mx-auto로 감싸져 있으므로 그대로 둡니다. */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Navie />
                    </div>
                </div>
            )}

            {/* ... 모달들 ... */}
        </>
    );
}

export default Header;