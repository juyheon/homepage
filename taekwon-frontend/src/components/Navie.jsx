

const Navie = () => {
  return (
    <nav className="bg-neutral-800 py-6 px-8 text-white flex flex-col space-y-6">
      {/* Introduction */}
      <div>
        <ul className="space-y-1">
          <li><a href="/introduction" className="hover:underline">인사말</a></li>
          <li><a href="/introduction" className="hover:underline">지도진 소개</a></li>
          <li><a href="/introduction" className="hover:underline">오시는 길</a></li>
        </ul>
      </div>

      {/* Program */}
      <div>
        <ul className="space-y-1">
          <li><a href="/program" className="hover:underline">주간 수련계획표</a></li>
          <li><a href="/program" className="hover:underline">수업시간표</a></li>
        </ul>
      </div>

      {/* Photo */}
      <div>
        <ul className="space-y-1">
          <li><a href="/photo" className="hover:underline">행사</a></li>
          <li><a href="/photo" className="hover:underline">일상</a></li>
        </ul>
      </div>

      {/* Shop */}
      <div>
        <ul className="space-y-1">
          <li><a href="/shop" className="hover:underline">도복</a></li>
          <li><a href="/shop" className="hover:underline">띠</a></li>
          <li><a href="/shop" className="hover:underline">동하복</a></li>
        </ul>
      </div>

      {/* Service */}
      <div>
        <ul className="space-y-1">
          <li><a href="/service" className="hover:underline">공지사항</a></li>
          <li><a href="/service" className="hover:underline">후기</a></li>
          <li><a href="/service" className="hover:underline">문의</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navie;
