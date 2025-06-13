import Footer from '../components/Footer';
import Header from '../components/Header';


import { useEffect } from 'react';

function Introducion() {
    return (
        <>
            <Header />
                <div className="introducion">
                    <h1>태권도 소개</h1>
                    <p>태권도는 한국의 전통 무술로, 발차기와 손 기술을 중심으로 한 격투 스포츠입니다.</p>
                    <p>태권도의 역사는 오랜 역사를 가지고 있으며, 세계적으로 인기 있는 무술 중 하나입니다.</p>
                    <p>태권도는 신체적 능력뿐만 아니라 정신적인 훈련과 자기 수양을 강조합니다.</p>
                    <p>태권도는 다양한 연령대와 체력 수준의 사람들이 참여할 수 있는 스포츠입니다.</p>
                    <p>태권도는 국제적으로 인정받는 스포츠로, 올림픽 종목으로도 채택되어 있습니다.</p>
                    <p>태권도를 배우면 자기 방어 능력뿐만 아니라 체력과 집중력을 향상시킬 수 있습니다.</p>
                    <p>태권도는 규칙과 예절을 중시하며, 도복을 착용하고 수련합니다.</p>
                </div>
            <Footer />
        </>
    );
}

export default Introducion;