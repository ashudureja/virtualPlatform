import React from "react";
import Silk from "./components/Silk";
import { FlipWords } from "./components/ui/flip-words";

const Hero = () => {
  const words = [
    "Efficiency",
    "Cashflow",
    "Rebilling",
    "Automation",
    "Awareness",
    "Convenience",
    "Value",
  ];

  return (
    <section className="relative sm:min-h-screen gradient-bg font-[f3] w-full overflow-hidden px-4 py-14  sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Optional extra gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-blue-900/10 to-transparent" />

      {/* Main content wrapper */}
      <div className="relative z-[2] mx-auto flex w-full max-w-8xl flex-col items-center gap-8 sm:gap-10">
        {/* Top badge */}
        <div className="flex items-center justify-center gap-2 text-white">
          <img
            className="h-6 invert sm:h-7"
            src="https://framerusercontent.com/images/OP5xqzrm4dKZhH4FwsQz7YRT7D8.svg?width=21&height=32"
            alt=""
          />

          <div className="flex flex-col">
            <h1 className="text-center text-[10px] sm:text-[11px]">
              Award-Winning Service
            </h1>
            <h1 className="text-center text-[10px] sm:text-[11px]">
              Provider Automation
            </h1>
          </div>

          <img
            className="h-6 invert sm:h-7"
            src="https://framerusercontent.com/images/hzM86XbMqz8brSR3xW4p8yQM3c.svg?width=21&height=32"
            alt=""
          />
        </div>

        {/* Heading */}
        <div className="flex w-full flex-col items-center justify-center gap-5 text-white">
          <div className="flex w-full flex-col items-center">
            <h1 className="text-center text-3xl font-medium tracking-tight text-white/95 sm:text-4xl md:text-4xl lg:text-6xl">
              One platform to run your MSP
            </h1>

            <h1 className="flex  sm:hidden flex-wrap items-center justify-center gap-x-3 text-center text-3xl font-medium tracking-tight text-white/95 sm:text-4xl md:text-4xl lg:text-6xl">
              <span>business with more Efficency</span>
              <FlipWords
                className="inline-flex min-w-[150px] justify-center text-white sm:min-w-[180px] lg:min-w-[230px]"
                words={words}
              />
            </h1>

            <div className="text-3xl hidden sm:block sm:text-4xl md:text-4xl lg:text-6xl mx-auto text-white/90">
    business with more
        <FlipWords className="text-white" words={words} /> 
       
      </div>
          </div>

          <div className="mx-auto flex max-w-xl  flex-col px-2">
            <p className="text-center text-sm leading-relaxed text-white/80 sm:text-lg">
              Stop juggling 15 supplier portals. Virtualplatform unifies
              internet, voice, backup, Microsoft 365 and more into one
              wholesale hub—built for Australian MSPs.
            </p>
          </div>
        </div>

        {/* Hero image/card */}
        <div className="w-full max-w-6xl rounded-[10px] border border-white/20 bg-white/10 p-1.5 shadow-2xl backdrop-blur-sm sm:p-2">
          <img
            className="h-full w-full rounded-[6px] border border-white/20 object-cover"
            src="https://virtualplatform.com.au/wp-content/uploads/2023/08/virtual-banner.png"
            alt="Virtual Platform dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;