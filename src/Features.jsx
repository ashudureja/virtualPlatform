import React from "react";
import { Globe } from "./components/ui/globe";
import AnimatedOTP from "./components/forgeui/animated-otp";
import LifecycleCard from "./components/forgeui/fraud-card";
import { Bell, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

/* ─── Status Notifications Card ───────────────────────────────────────── */



/* ─── Features Layout ───────────────────────────────────────── */

const Features = () => {
  return (
    <div className="min-h-screen w-full bg-[#eef0f1] px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-30 lg:pb-30">
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-8 sm:gap-10">
        <h3 className="font-[f3] text-3xl sm:text-4xl lg:text-5xl">
          Key Features
        </h3>

        {/* MAIN CONTAINER */}
        <div className="grid w-full grid-cols-1 gap-3 rounded-lg border border-white bg-[#f5f8fc]/70 px-2 py-2 shadow-border backdrop-blur-2xl sm:px-3 sm:py-3 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-3">
            {/* Product Marketplace */}
            <div className="rounded-lg bg-blue-50/10 p-0.5 shadow-border lg:h-115">
              <div className="h-[260px] w-full overflow-hidden rounded-lg sm:h-[340px] md:h-[420px] lg:h-90 lg:mask-b-from-90%">
                <img
                  className="h-full w-full object-cover"
                  src="./b2.png"
                  alt="Unified Product Marketplace"
                />
              </div>

              <div className="px-4 pb-5 pt-4 font-[f2] lg:pl-4 lg:pt-0">
                <h3 className="text-xl sm:text-2xl">
                  Unified Product Marketplace
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[16px]">
                  Access connectivity, voice, cloud, web and core MSP products
                  <br className="hidden lg:block" /> from one place — without
                  jumping between suppliers or portals.
                </p>
              </div>
            </div>

            {/* Qualification */}
            <div className="relative flex h-[370px] items-center justify-center overflow-hidden rounded-lg border border-white bg-gradient-to-bl from-white to-blue-300 shadow-border sm:h-[620px] md:h-[620px] ">
              <div className="absolute bottom-5 left-4 z-10 pr-4 font-[f2] sm:left-5 lg:pl-4">
                <h3 className="text-xl sm:text-2xl">
                  Instant Service Qualification
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[16px]">
                  Search an address, check pricing and availability across
                  multiple carriers,
                  <br className="hidden lg:block" /> and match customers with
                  the best supplier options in their area.
                </p>
              </div>

              <Globe className="-top-10 scale-75 sm:scale-90 lg:scale-100" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-3">
            <div className="h-[560px] overflow-hidden rounded-lg bg-white p-0.5 shadow-border sm:h-[620px] ">
              <LifecycleCard />
            </div>

            <div className="relative flex h-[420px] items-end justify-center overflow-hidden rounded-lg border border-white bg-gradient-to-br from-white to-blue-300 shadow-border sm:h-[460px] ">
              <AnimatedOTP />

              <div className="absolute left-4 top-5 z-10 pr-4 font-[f2] sm:left-5 lg:pl-4">
                <h3 className="text-xl sm:text-2xl">Secure Access</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[16px]">
                  Two-factor authentication protects accounts and sensitive
                  data,
                  <br className="hidden lg:block" /> ensuring only verified
                  users can access your platform.
                </p>
              </div>
            </div>
          </div>

          {/* FULL WIDTH API CARD */}
          <div className="relative h-[420px] rounded-lg bg-white p-0.5 shadow-border sm:h-[500px] md:h-[580px] lg:col-span-2 lg:h-130">
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                src="./b10.png"
                alt="API-First Architecture"
              />
            </div>

            <div className="absolute bottom-5 left-4 pr-4 font-[f2] sm:left-5 lg:pl-4">
              <h3 className="text-xl sm:text-2xl">API-First Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[16px]">
                Every Virtualplatform feature has an API so MSPs can readily
                integrate any and
                <br className="hidden lg:block" /> every feature into their own
                digital transformation solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;