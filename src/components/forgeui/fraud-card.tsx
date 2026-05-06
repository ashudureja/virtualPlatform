"use client";

import { cn } from "../ui/animated-beam";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { TbCircleDotted } from "react-icons/tb";
import { animate, motion, Variants } from "motion/react";

type LifecycleStep = {
  title: string;
  description: string;
  status: string;
};

type LifecycleCardProps = {
  steps?: LifecycleStep[];
};

const defaultSteps: LifecycleStep[] = [
  {
    title: "Qualify",
    description: "Service eligibility confirmed",
    status: "Completed",
  },
  {
    title: "Order",
    description: "Customer order submitted",
    status: "Completed",
  },
  {
    title: "Manage",
    description: "Service is active and visible",
    status: "Active",
  },
  {
    title: "Support",
    description: "Tickets and issues tracked",
    status: "Ready",
  },
  {
    title: "Bill",
    description: "Invoice generated automatically",
    status: "Automated",
  },
];

const LifecycleCard = ({ steps = defaultSteps }: LifecycleCardProps) => {
  const parentvariant = {
    open: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.35,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1.4,
      },
    },
  };

  const textvariant = {
    open: {
     
      filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(8px)"],
      y: [8, 0, 0, -4],
      transition: {
        duration: 3.4,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1.4,
      },
    },
  };

  const iconvariant = {
    open: {
      
      scale: [0.75, 1, 1, 0.9],
      transition: {
        duration: 3.4,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1.4,
      },
    },
  };

  const circlevariant: Variants = {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  return (
    <motion.div
      variants={parentvariant}
      animate="open"
      initial="open"
      className={cn(
        "h-full w-full bg-gradient-to-br from-white via-blue-200 to-blue-50 font-[f2]",
        "group overflow-hidden border ",
        "clbeam-container relative flex flex-col items-center",
        "rounded-md  text-white dark:bg-neutral-900",
      )}
    >
      <div className=" mt-6 ml-2  pl-4 font-[f2] ">
        <h3 className="text-xl text-black sm:text-2xl">Lifecycle Management</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[16px]">
          Qualify, order, manage, support and bill services from one connected
          portal — with full visibility across the customer journey.
        </p>
      </div>

      <div className="relative flex h-full w-75 flex-col">
        <div className="mt-8 py-3">
          <div className="relative z-10 flex items-center justify-center gap-2 rounded-[6px] bg-neutral-50 p-0.5 shadow-md dark:bg-black">
            <div className="flex h-full w-full items-center justify-between gap-3 rounded-[4px] bg-neutral-100 p-3 dark:bg-neutral-800">
              <div className="flex items-center justify-center gap-4">
                <motion.div className="h-4 w-4">
                  <TbCircleDotted className="text-primary h-full w-full animate-spin" />
                </motion.div>

                <p className="font-mono text-[10px] text-neutral-600 dark:text-neutral-400">
                  Service lifecycle
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 h-full w-full top-0 sm:-top-14">
          <svg
            className="h-full w-full stroke-current text-neutral-300 dark:text-neutral-700"
            width="100%"
            height="100%"
            viewBox="0 0 52 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0.1">
              <path d="M 3.7 0 v 5.8 l 6.7 5.9 v 60" />
            </g>

            <g mask="url(#clbeam-mask-1)">
              <circle
                className="clbeam clbeam-line-1"
                cx="0"
                cy="0"
                r="12"
                fill="url(#clbeam-blue-grad)"
              />
            </g>

            <defs>
              <mask id="clbeam-mask-1">
                <path
                  d="M 3.7 0 v 5.8 l 6.7 5.9 v 60"
                  stroke="white"
                  strokeWidth="0.15"
                />
              </mask>

              <radialGradient id="clbeam-blue-grad" fx="1">
                <stop offset="0%" stopColor="#2386f8" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-x-12 top-32.5 flex w-fit flex-col items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center gap-7">
            {steps.map(({ title, description, status }) => (
              <div key={title} className="flex h-full w-full justify-start">
                <div className="relative mt-1.5 mr-2 h-6 w-6">
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
                    <GoDotFill className="h-2.5 w-2.5 text-neutral-400 dark:text-neutral-500" />
                  </div>

                  <motion.div
                    variants={iconvariant}
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-500 p-1"
                  >
                    <IoMdCheckmark className="h-4 w-4 text-white" />
                  </motion.div>
                </div>

                <div className="flex flex-col items-start justify-center gap-1 p-1">
                  <motion.h2
                    variants={textvariant}
                    className="text-[10px] font-semibold text-neutral-800 sm:text-sm dark:text-neutral-200"
                  >
                    {title}
                  </motion.h2>

                  <motion.p
                    variants={textvariant}
                    className="text-sm text-neutral-500"
                  >
                    {description}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LifecycleCard;
