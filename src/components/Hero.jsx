import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCanvas(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "AI Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden">
      {/* TOP CONTENT */}
      <div className="flex flex-col justify-center items-start flex-[0.55] px-6 sm:px-12 md:px-20 lg:px-32 pt-20 max-w-3xl">
        <h1 className="text-white text-2xl sm:text-3xl font-medium">
          Hi, I'm <span className="text-[#915EFF]">Nitin</span>
        </h1>

        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-3 leading-tight">
          <span className="text-[#915EFF]">{text}</span>
          <Cursor cursorStyle="|" />
        </h2>

        <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">
          I build scalable SaaS platforms, enterprise systems, and AI-powered
          applications using React, Next.js, ASP.NET, and Python.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#project">
            <button className="bg-[#915EFF] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#7a4ed9] transition">
              View Projects
            </button>
          </a>

          <a href="mailto:31nitinthakur@gmail.com">
            <button className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
              Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* CANVAS */}
      <div className="flex-[0.45] w-full">
        {!showCanvas ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">
            Loading 3D Preview...
          </div>
        ) : (
          <div className="w-full h-full [&>div]:h-full">
            <ComputersCanvas />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
