"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./components/ui/animated-beam";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex min-h-[64px] w-full max-w-[130px] items-center justify-center rounded-lg border border-white/10 p-1 text-center font-[f2] text-[12px] leading-tight text-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] sm:min-h-[72px] sm:max-w-[170px] sm:text-sm md:max-w-[190px] lg:h-20 lg:w-50 lg:max-w-none lg:text-lg",
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center rounded-sm border border-white/5 bg-[#1a1a1c] px-2">
        {children}
      </div>
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center overflow-hidden px-1 py-4 sm:px-4 sm:py-6 md:p-8 lg:p-10"
    >
      <div className="flex size-full w-full max-w-5xl flex-col items-stretch justify-between gap-4 sm:gap-6 lg:max-h-[600px] lg:gap-10">
        {/* Labels */}
        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-2 px-1 font-[f3] text-[11px] text-blue-500 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] sm:text-sm lg:flex lg:justify-between lg:px-2.5">
          <h1 className="text-left">Current Reality</h1>
          <div className="lg:hidden" />
          <h1 className="text-right">Using VirtualPlatform</h1>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] lg:flex lg:flex-row lg:justify-between">
          <div className="flex justify-start">
            <Circle ref={div1Ref}>
              <h1>Reactive Support</h1>
            </Circle>
          </div>

          <div className="lg:hidden" />

          <div className="flex justify-end">
            <Circle ref={div5Ref}>
              <h1>Monitoring & Diagnostics</h1>
            </Circle>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] lg:flex lg:flex-row lg:justify-between">
          <div className="flex justify-start">
            <Circle ref={div8Ref}>
              <h1>Supplier Complexity</h1>
            </Circle>
          </div>

          <div className="lg:hidden" />

          <div className="flex justify-end">
            <Circle ref={div9Ref}>
              <h1>Multi-Supplier Aggregation</h1>
            </Circle>
          </div>
        </div>

        {/* Center Row */}
        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] lg:flex lg:flex-row lg:justify-between">
          <div className="flex justify-start">
            <Circle ref={div2Ref}>
              <h1>
                Painful Billing &
                <br />
                Revenue Leakage
              </h1>
            </Circle>
          </div>

          <div className="flex justify-center">
            <Circle
              ref={div4Ref}
              className="size-11 min-h-0 max-w-none rounded-full text-sm sm:size-16 lg:size-16"
            >
              <h1 className="text-neutral-600">VP</h1>
            </Circle>
          </div>

          <div className="flex justify-end">
            <Circle ref={div6Ref}>
              <h1>Rebill & Payment Gateway</h1>
            </Circle>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] lg:flex lg:flex-row lg:justify-between">
          <div className="flex justify-start">
            <Circle ref={div10Ref}>
              <h1>Onerous Commercials</h1>
            </Circle>
          </div>

          <div className="lg:hidden" />

          <div className="flex justify-end">
            <Circle ref={div11Ref}>
              <h1>Qualify, compare, purchase all in one place</h1>
            </Circle>
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] lg:flex lg:flex-row lg:justify-between">
          <div className="flex justify-start">
            <Circle ref={div3Ref}>
              <h1>Manual Supplier Interaction</h1>
            </Circle>
          </div>

          <div className="lg:hidden" />

          <div className="flex justify-end">
            <Circle ref={div7Ref}>
              <h1>Automation & Value-Add</h1>
            </Circle>
          </div>
        </div>
      </div>

      {/* 
        Beams are hidden on very small screens so the layout stays clean.
        From sm and above, the animation appears normally.
      */}
      <div className="pointer-events-none ">
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          endYOffset={-10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          endYOffset={10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          endYOffset={-10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          endYOffset={10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={div4Ref}
          endYOffset={10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={div4Ref}
          endYOffset={10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div10Ref}
          toRef={div4Ref}
          endYOffset={10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div11Ref}
          toRef={div4Ref}
          endYOffset={10}
        />
      </div>
    </div>
  );
}