import React from 'react';
import { motion } from 'framer-motion';

const waveTransition = (delay = 0) => ({
  duration: 1.6,
  repeat: Infinity,
  ease: [0.42, 0, 0.18, 1],
  delay,
});

const LayoutDashboardApple = ({
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
    {/* top-left: tall → short */}
    <motion.rect
      width={7} x={3} y={3} rx={1} ry={1}
      animate={{ height: [9, 5, 9], opacity: [0.95, 0.45, 0.95] }}
      initial={{ height: 9 }}
      transition={waveTransition(0)}
      style={{ originX: '50%', originY: '0%' }}
    />
    {/* top-right: short → tall */}
    <motion.rect
      width={7} x={14} y={3} rx={1} ry={1}
      animate={{ height: [5, 9, 5], opacity: [0.9, 0.35, 0.9] }}
      initial={{ height: 5 }}
      transition={waveTransition(0.18)}
      style={{ originX: '50%', originY: '0%' }}
    />
    {/* bottom-right: tall → short, shifts down */}
    <motion.rect
      width={7} x={14} rx={1} ry={1}
      animate={{ height: [9, 5, 9], y: [12, 16, 12], opacity: [0.88, 0.3, 0.88] }}
      initial={{ height: 9, y: 12 }}
      transition={waveTransition(0.36)}
      style={{ originX: '50%', originY: '0%' }}
    />
    {/* bottom-left: short → tall, shifts up */}
    <motion.rect
      width={7} x={3} rx={1} ry={1}
      animate={{ height: [5, 9, 5], y: [16, 12, 16], opacity: [0.82, 0.22, 0.82] }}
      initial={{ height: 5, y: 16 }}
      transition={waveTransition(0.54)}
      style={{ originX: '50%', originY: '0%' }}
    />
  </motion.svg>
);

export default LayoutDashboardApple;