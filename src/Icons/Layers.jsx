import React from 'react';
import { motion } from 'framer-motion';

const waveTransition = (delay = 0) => ({
  duration: 1.6,
  repeat: Infinity,
  ease: [0.42, 0, 0.18, 1],
  delay,
});

const LayersApple = ({
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
    {/* top layer — floats up */}
    <motion.path
      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
      animate={{ y: [0, -4, 0], opacity: [0.95, 0.45, 0.95] }}
      transition={waveTransition(0)}
    />
    {/* middle layer — gentle breathe */}
    <motion.path
      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
      animate={{ opacity: [0.88, 0.35, 0.88] }}
      transition={waveTransition(0.18)}
    />
    {/* bottom layer — floats down */}
    <motion.path
      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
      animate={{ y: [0, 4, 0], opacity: [0.78, 0.22, 0.78] }}
      transition={waveTransition(0.36)}
    />
  </motion.svg>
);

export default LayersApple;