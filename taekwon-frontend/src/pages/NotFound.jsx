import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-3xl font-bold mb-4 text-white">
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <p>요청하신 페이지가 존재하지 않거나, 잘못된 주소입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>     
    </div>
  );
};

export default NotFound;