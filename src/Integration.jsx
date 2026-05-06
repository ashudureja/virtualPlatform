import React from "react";
import {
  ShoppingCart,
  Users,
  CreditCard,
  Activity,
  Ticket,
  Settings,
  Bell,
  Layers,
} from "lucide-react";
import { motion } from "motion/react";
import LoaderPinwheelApple from "./Icons/Loader";

const Integration = () => {
  const integrationIcons = [
    {
      id: "orders",
      Icon: ShoppingCart,
      color: "text-white",
      bg: "bg-[#FF4F00]",
      angle: 0, // top
    },
    {
      id: "customers",
      Icon: Users,
      color: "text-black",
      bg: "bg-white",
      angle: 45,
    },
    {
      id: "qualification",
      Icon: Activity,
      color: "text-black",
      bg: "bg-[#FFE01B]",
      angle: 90,
    },
    {
      id: "monitoring",
      Icon: Activity,
      color: "text-white",
      bg: "bg-[#0061FF]",
      angle: 135,
    },
    {
      id: "lifecycle",
      Icon: Settings,
      color: "text-emerald-400",
      bg: "bg-zinc-900",
      angle: 180,
      isDashed: true,
    },
    {
      id: "tickets",
      Icon: Ticket,
      color: "text-black",
      bg: "bg-white",
      angle: 225,
    },
    {
      id: "billing",
      Icon: CreditCard,
      color: "text-white",
      bg: "bg-[#635BFF]",
      angle: 270,
    },
    {
      id: "notifications",
      Icon: Bell,
      color: "text-blue-500",
      bg: "bg-white",
      angle: 315,
    },
  ];

  return (
    <section className="relative flex flex-col gap-24 items-center justify-center min-h-screen py-24 overflow-hidden bg-[#0a0a0a] text-white">

         <div
    className="absolute inset-0 mask-b-from-40% mask-r-from-40% mask-l-from-40% mask-t-from-40% z-1 opacity-5"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />
      {/* Top notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <svg viewBox="0 0 402 16" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0H201H402H394.13C389.76 0 385.766 2.46879 383.811 6.3771L381.211 11.5777C379.856 14.288 377.086 16 374.056 16H27.9443C24.9141 16 22.144 14.288 20.7889 11.5777L18.1885 6.37709C16.2344 2.46879 12.2398 0 7.87019 0H0Z"
            className="fill-neutral-100"
          />
        </svg>
      </div>

      {/* Bottom notch */}
      <div className="absolute bottom-0 scale-y-[-1] left-1/2 -translate-x-1/2">
        <svg viewBox="0 0 402 16" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0H201H402H394.13C389.76 0 385.766 2.46879 383.811 6.3771L381.211 11.5777C379.856 14.288 377.086 16 374.056 16H27.9443C24.9141 16 22.144 14.288 20.7889 11.5777L18.1885 6.37709C16.2344 2.46879 12.2398 0 7.87019 0H0Z"
            className="fill-neutral-100"
          />
        </svg>
      </div>

      {/* Dotted background grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* Header */}



       <motion.div
                initial={{ opacity: 0, y: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16"
              >
                <h2 className="mb-4 font-[f3] text-3xl tracking-tight text-neutral-100 sm:text-4xl md:text-5xl">
                  API-First.
                  <span style={{ color: "#2386f8" }}>Built for MSPs.</span>
                </h2>
      
                <p className="mx-auto max-w-xs sm:max-w-xl font-[f2] text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg">
                  Every supplier, every service, every workflow — connected through a single wholesale
          platform. Qualify, order, support and bill without switching tabs.
                </p>
              </motion.div>

      {/* Orbit UI */}
      <div className="relative z-10 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px]">
        {/*
          The trick:
          1. A wrapper div rotates continuously (the "orbit ring")
          2. Each icon counter-rotates by the same amount so it stays upright
          Both use the same CSS animation duration to stay in sync.
        */}
        <style>{`
          @keyframes orbit-ring {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes counter-rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to   { transform: translate(-50%, -50%) rotate(-360deg); }
          }

          .orbit-ring {
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            animation: orbit-ring 18s linear infinite;
          }

          .orbit-icon {
            position: absolute;
            animation: counter-rotate 18s linear infinite;
            transform-origin: center center;
          }

          
        `}</style>

        {/* Static dashed ring */}
        <div className="absolute inset-0 border border-dashed rounded-full border-white/20 pointer-events-none" />

        {/* Rotating ring */}
        <div className="orbit-ring">
          {integrationIcons.map(({ id, Icon, color, bg, angle, isDashed }) => {
            // Convert angle to position on the circle (radius = 50% of container)
            const rad = (angle - 90) * (Math.PI / 180); // -90 so 0° = top
            // We use percentage from center: radius is 50%
            const x = 50 + 50 * Math.cos(rad);
            const y = 50 + 50 * Math.sin(rad);

            return (
              <div
                key={id}
                className="orbit-icon w-12 h-12 sm:w-16 sm:h-16"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                {/* Glow */}
                <div className={`absolute inset-0 rounded-2xl blur-md opacity-40 ${bg}`} />

                {/* Icon box */}
                <div
                  className={`
                    relative z-10 flex items-center justify-center w-full h-full rounded-[14px] shadow-lg
                    ${bg}
                    ${isDashed ? "border border-dashed border-white/30" : "border border-black/10"}
                    transition-transform duration-200 hover:scale-110
                  `}
                >
                  <Icon
                    className={`w-5 h-5 sm:w-7 sm:h-7 ${color}`}
                    strokeWidth={isDashed ? 2 : 1.5}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Central logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-blue-500/40 blur-[50px]" />
          <div className="relative font-[f3] text-neutral-400 flex items-center justify-center  shadow-2xl w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] bg-gradient-to-b from-gray-800 to-black ">
           
            <LoaderPinwheelApple/>
          </div>
        </div>
      </div>

      <motion.a
        href="#"
        whileHover={{ x: 4 }}
        className="inline-flex font-[f3] items-center gap-2 mt-5 text-sm font-semibold"
        style={{ color: "#2386f8", textDecoration: "none" }}
      >
        See all 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="#2386f8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  );
};

export default Integration;