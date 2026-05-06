import React from 'react';
import { motion } from 'framer-motion';

const waveTransition = (delay = 0) => ({
  duration: 1.6,
  repeat: Infinity,
  ease: [0.42, 0, 0.18, 1],
  delay,
});

const CircuitBoardApple = ({
  size = 24,
  strokeWidth = 1.5,
  className = 'text-white',
  ...props
}) => (
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
    {/* board outline — steady breathe */}
    <motion.rect
      width="18" height="18" x="3" y="3" rx="2"
      animate={{ opacity: [0.95, 0.5, 0.95] }}
      transition={waveTransition(0)}
    />
    {/* top-right trace — draws in then retreats */}
    <motion.path
      d="M11 9h4a2 2 0 0 0 2-2V3"
      animate={{
        pathLength: [0.05, 1, 1, 0.05],
        pathOffset: [1, 0, 0, 1],
        opacity: [0, 1, 0.9, 0],
      }}
      transition={{ ...waveTransition(0.18), times: [0, 0.4, 0.7, 1] }}
    />
    {/* top-left node — pulses after trace arrives */}
    <motion.circle
      cx="9" cy="9" r="2"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1, 0.7] }}
      transition={waveTransition(0.36)}
      style={{ originX: '9px', originY: '9px' }}
    />
    {/* bottom-left trace — draws in then retreats */}
    <motion.path
      d="M7 21v-4a2 2 0 0 1 2-2h4"
      animate={{
        pathLength: [0.05, 1, 1, 0.05],
        opacity: [0, 1, 0.9, 0],
      }}
      transition={{ ...waveTransition(0.54), times: [0, 0.4, 0.7, 1] }}
    />
    {/* bottom-right node — pulses after trace arrives */}
    <motion.circle
      cx="15" cy="15" r="2"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1, 0.7] }}
      transition={waveTransition(0.72)}
      style={{ originX: '15px', originY: '15px' }}
    />
  </motion.svg>
);

export default CircuitBoardApple;