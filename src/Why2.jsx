import React from "react";
import { AnimatedBeamDemo } from "./animated-beam-demo";
import { motion } from "motion/react";

const Why2 = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] px-4 py-20 sm:px-6 sm:py-24 md:px-12 lg:px-20 lg:py-30">
      {/* Grid Background */}
   

      {/* Top Shape */}
      <div className="absolute left-1/2 top-0 z-[2] w-[220px] -translate-x-1/2 sm:w-[320px] lg:w-[402px]">
        <svg
          viewBox="0 0 402 16"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H201H402H394.13C389.76 0 385.766 2.46879 383.811 6.3771L381.211 11.5777C379.856 14.288 377.086 16 374.056 16H27.9443C24.9141 16 22.144 14.288 20.7889 11.5777L18.1885 6.37709C16.2344 2.46879 12.2398 0 7.87019 0H0Z"
            className="fill-neutral-100"
          />
        </svg>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-1/2 z-[2] w-[220px] -translate-x-1/2 scale-y-[-1] sm:w-[320px] lg:w-[402px]">
        <svg
          viewBox="0 0 402 16"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H201H402H394.13C389.76 0 385.766 2.46879 383.811 6.3771L381.211 11.5777C379.856 14.288 377.086 16 374.056 16H27.9443C24.9141 16 22.144 14.288 20.7889 11.5777L18.1885 6.37709C16.2344 2.46879 12.2398 0 7.87019 0H0Z"
            className="fill-neutral-100"
          />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-[3] mx-auto flex w-full max-w-8xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-4 font-[f3] text-3xl tracking-tight text-neutral-100 sm:text-4xl md:text-5xl">
            Why do I need{" "}
            <span style={{ color: "#2386f8" }}>MPSaaS?</span>
          </h2>

          <p className="mx-auto max-w-xl font-[f2] text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg">
            Our technology marketplace is an online hub where service providers
            can easily qualify, compare, purchase and manage best-in-breed ICT
            products and services including network access tails, backup, voice,
            hosting and so much more.
          </p>
        </motion.div>

        <AnimatedBeamDemo />
      </div>
    </div>
  );
};

export default Why2;