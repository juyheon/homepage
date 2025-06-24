// components/Navie.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navie = () => {
    return (
        <nav className="py-6 text-white grid grid-cols-5 gap-x-4">
            <div className="flex flex-col items-center">
                <ul className="space-y-1 text-center">
                    <li><Link to="/introduction/Rreeting" className="hover:underline">인사말</Link></li>
                    <li><Link to="/introduction/MasterList" className="hover:underline">지도진 소개</Link></li>
                    <li><Link to="/introduction/DirectionsMap" className="hover:underline">오시는 길</Link></li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <ul className="space-y-1 text-center">
                    <li><Link to="/program/WeeklyPlanner" className="hover:underline">주간수련계획표</Link></li>
                    <li><Link to="/program/ClassSchedule" className="hover:underline">수업시간표</Link></li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <ul className="space-y-1 text-center">
                    <li><Link to="/photo/Event" className="hover:underline">행사</Link></li>
                    <li><Link to="/photo/DailyMoments" className="hover:underline">일상</Link></li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <ul className="space-y-1 text-center">
                    <li><Link to="/shop/Dobok" className="hover:underline">도복</Link></li>
                    <li><Link to="/shop/Belt" className="hover:underline">띠</Link></li>
                    <li><Link to="/shop/SeasonalUniform" className="hover:underline">동하복</Link></li>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <ul className="space-y-1 text-center">
                    <li><Link to="/service/NoticeBoard" className="hover:underline">공지사항</Link></li>
                    <li><Link to="/service/ReviewSection" className="hover:underline">후기</Link></li>
                    <li><Link to="/service/Contact" className="hover:underline">문의</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navie;