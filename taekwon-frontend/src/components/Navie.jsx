

const Navie = () => {
    return (
        // 전체 네비 컨테이너
        <nav className="flex flex-col min-h-screen">
            {/*  Introducion link list */}
            <div>
                <li className="text-lg text-white"><a href="/introduction"> 인사말 </a></li>
                <li className="text-lg text-white"><a href="/introduction"> 지도진 소개 </a></li>
                <li className="text-lg text-white"><a href="/introduction"> 오시는 길 </a></li>
            </div>

            {/*  Program link list */}
            <div>
                <li className="text-lg text-white"><a href="/Program"> 주간 수련계획표 </a></li>
                <li className="text-lg text-white"><a href="/Program"> 수업시간표 </a></li>
            </div>

            {/*  Photo link list */}
            <div>
                <li className="text-lg text-white"><a href="/Photo"> 행사 </a></li>
                <li className="text-lg text-white"><a href="/Photo"> 일상 </a></li>
            </div>

            {/*  Shop link list */}
            <div>
                <li className="text-lg text-white"><a href="/Shop"> 도복 </a></li>
                <li className="text-lg text-white"><a href="/Shop"> 띠 </a></li>
                <li className="text-lg text-white"><a href="/Shop"> 동하복 </a></li>
            </div>
            
            {/*  Service link list */}
            <div>
                <li className="text-lg text-white"><a href="/Service"> 공지사항 </a></li>
                <li className="text-lg text-white"><a href="/Service"> 후기 </a></li>
                <li className="text-lg text-white"><a href="/Service"> 문의 </a></li>
            </div>
        </nav>
    );
}

export default Navie;