import React from 'react';
import { motion } from 'framer-motion';

const waveTransition = (delay = 0) => ({
  duration: 1.6,
  repeat: Infinity,
  ease: [0.42, 0, 0.18, 1],
  delay,
});

const WifiApple = ({
  size = 24,
  strokeWidth = 1.5,
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
      {/* Dot */}
      <motion.path
        d="M12 20h.01"
        animate={{ opacity: [1, 0.35, 1], scale: [1, 0.88, 1] }}
        transition={waveTransition(0)}
        style={{ originX: '50%', originY: '50%' }}
      />
      {/* Inner arc */}
      <motion.path
        d="M8.5 16.429a5 5 0 0 1 7 0"
        animate={{ opacity: [0.95, 0.3, 0.95], scale: [1, 0.91, 1], pathLength: [1, 0.88, 1] }}
        transition={waveTransition(0.18)}
        style={{ originX: '50%', originY: '50%' }}
      />
      {/* Middle arc */}
      <motion.path
        d="M5 12.859a10 10 0 0 1 14 0"
        animate={{ opacity: [0.88, 0.25, 0.88], scale: [1, 0.93, 1], pathLength: [1, 0.9, 1] }}
        transition={waveTransition(0.36)}
        style={{ originX: '50%', originY: '50%' }}
      />
      {/* Outer arc */}
      <motion.path
        d="M2 8.82a15 15 0 0 1 20 0"
        animate={{ opacity: [0.78, 0.18, 0.78], scale: [1, 0.95, 1], pathLength: [1, 0.92, 1] }}
        transition={waveTransition(0.54)}
        style={{ originX: '50%', originY: '50%' }}
      />
    </motion.svg>
  );
};

export default WifiApple;