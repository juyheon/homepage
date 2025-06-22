const DirectionsMap = () => {
    return (
        <div className="master-list">
            <ul className="list-none p-0 m-0">
                <p className="text-2xl font-bold mb-4 text-white">오시는 길</p>
                주소.<br />
                <li className="text-lg text-white">서울시 강남구 테헤란로 123</li>
                <li className="text-lg text-white">전화번호: 02-123-4567</li>
                <li className="text-lg text-white">이메일: info@taekwon</li>
                <li className="text-lg text-white">지도: <a href="https://www.google.com/maps" className="text-blue-500 hover:underline">Google Maps</a></li>
            </ul>
        </div>
    );
}

export default DirectionsMap;