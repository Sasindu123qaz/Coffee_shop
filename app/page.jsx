"use client";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero"
import { useEffect } from "react";

const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, [])
  return ( 
  <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      {/* tempory div */}
      <div className="h-[4000px]"></div>
    </div> 
    );
};

export default Home