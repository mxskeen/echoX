import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-[#1d1f1e] rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl sm:leading-normal font-medium mb-10 border-b-[1px] border-zinc-700 pb-10">
        echoX is a design studio that blends creativity with bold designs, it echoes individuality through unique artistic expression.

        "we respect artists".
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4">Our approach:</h1>
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
            

At EchoX, we believe in the power of simplicity and impact. Our approach blends creative innovation with a minimalistic aesthetic, ensuring that every design resonates with clarity and purpose. We focus on crafting unique visual identities that echo the essence of our clients' vision, using bold elements and sleek, modern design. Whether it's branding, digital art, or visual storytelling, our goal is to deliver work that not only stands out but also connects on a deeper level with its audience.
            </p>
            <div className="rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
              Read more
              <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </div>
          </div>
          <img
            className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0"
            src="https://images.unsplash.com/photo-1632670570993-ee1add86d0be?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
