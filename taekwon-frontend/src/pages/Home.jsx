import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Taekwon</h1>
        <p className="text-lg">
          홈.
        </p>
         {Array.from({ length: 100 }).map((_, index) => (
          <br key={index} /> // 반복되는 요소에는 고유한 'key' prop이 필요합니다.
          ))}
      </main>
      <Footer />
    </div>
  );
}

export default Home;