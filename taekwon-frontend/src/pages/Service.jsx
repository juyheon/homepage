import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import NoticeBoard from "../components/nav/NoticeBoard"
import ReviewSection from "../components/nav/ReviewSection"
import Contact from "../components/nav/Contact"

const Service = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Taekwon</h1>
        <p className="text-lg text-white">
          service one page.
        </p>
      </main>

      {/* nav폴더의 컴포넌트 소항목  */}
      <NoticeBoard />

      <ReviewSection />

      <Contact />

      <Footer />
    </div>
  );
}

export default Service;