import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/picture";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      smoothTouch: true,
      touchMultiplier: 1,
    },
  });

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
