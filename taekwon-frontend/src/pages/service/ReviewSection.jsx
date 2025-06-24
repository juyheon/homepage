import { useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ReviewSection = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 mt-20">
        <p>후기</p>
        {Array.from({ length: 4 }).map((_, index) => (
          <br key={index} /> // 반복되는 요소에는 고유한 'key' prop이 필요합니다.
          ))}
      </main>
      <Footer />
    </div>
  );
}

export default ReviewSection;