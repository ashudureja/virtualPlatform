import React from 'react';
import { motion } from 'framer-motion';

const waveTransition = (delay = 0) => ({
  duration: 1.6,
  repeat: Infinity,
  ease: [0.42, 0, 0.18, 1],
  delay,
});

const Volume3Apple = ({
  size = 24,
  strokeWidth = 1,
  className = 'text-white',
  ...props
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Inner wave */}
      <motion.path
        d="M15.5 9.5a4.5 4.5 0 0 1 0 5"
        animate={{
          opacity: [0.95, 0.45, 0.95],
          scale: [1, 0.92, 1],
          pathLength: [1, 0.88, 1],
        }}
        transition={waveTransition(0)}
        style={{ originX: '50%', originY: '50%' }}
      />

      {/* Middle wave */}
      <motion.path
        d="M18.4 7.6a7.5 7.5 0 0 1 0 8.8"
        animate={{
          opacity: [0.9, 0.35, 0.9],
          scale: [1, 0.94, 1],
          pathLength: [1, 0.9, 1],
        }}
        transition={waveTransition(0.18)}
        style={{ originX: '50%', originY: '50%' }}
      />

      {/* Outer wave */}
      <motion.path
        d="M20.9 5.7a10.5 10.5 0 0 1 0 12.6"
        animate={{
          opacity: [0.82, 0.22, 0.82],
          scale: [1, 0.96, 1],
          pathLength: [1, 0.92, 1],
        }}
        transition={waveTransition(0.36)}
        style={{ originX: '50%', originY: '50%' }}
      />

      {/* Speaker body */}
      <motion.path
        d="M10.8 5.1c0-.6-.7-.91-1.13-.5L6.32 7.95c-.22.22-.52.34-.83.34H3.2c-.66 0-1.2.54-1.2 1.2v4.99c0 .66.54 1.2 1.2 1.2h2.29c.31 0 .61.12.83.34l3.35 3.34c.43.42 1.13.11 1.13-.5V5.1Z"
        animate={{
          y: [0, -0.08, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: [0.42, 0, 0.18, 1],
        }}
      />
    </motion.svg>
  );
};

export default Volume3Apple;