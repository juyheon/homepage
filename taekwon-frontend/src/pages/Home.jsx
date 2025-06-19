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
      </main>
      <Footer />
    </div>
  );
}

export default Home;