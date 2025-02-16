import React from "react";
import { TextHoverEffect } from "./ui/bgtexthover";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="relative md:h-[30rem] h-[40rem] flex flex-col md:flex-row items-center justify-center">
      <TextHoverEffect text="Srinjay" />

      <div className="relative mb-8 md:mb-0">
        {/* Any foreground content goes here */}
        <h1 className="text-2xl font-bold whitespace-nowrap overflow-hidden text-center">
          Developer | Problem Solver | Innovator
        </h1>
        <span className="font-bold">&gt; </span>B.Sc in Software Systems
        <br />
        <span className="font-bold">&gt; </span>FAS,{" "}
        <a
          href="https://www.sfu.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {" "}
          SFU{" "}
        </a>
        <div className="pt-5 flex  flex-col md:flex-row ">
          <div>
            <a
              href="https://drive.google.com/file/d/120UytUHpjRZPS9qdLsvG97F1lnq8Ffuo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-green-500 text-green-border-green-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                <span className="font-bold">&gt; </span>
                Résumé
              </button>
            </a>
          </div>
          <div className="md:ml-2 md:mt-0 mt-2">
            <Link href="#contact">
              <button className=" shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-green-500 text-green-border-green-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                <span className="font-bold">&gt; </span>
                Reach Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
