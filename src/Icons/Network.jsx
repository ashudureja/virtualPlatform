import React from 'react';
import { motion } from 'framer-motion';

const waveTransition = (delay = 0) => ({
  duration: 1.6,
  repeat: Infinity,
  ease: [0.42, 0, 0.18, 1],
  delay,
});

const bars = [
  { d: 'M2 20h.01',  delay: 0,    opacityFrom: 1,    opacityTo: 0.35 },
  { d: 'M7 20v-4',   delay: 0.18, opacityFrom: 0.9,  opacityTo: 0.3  },
  { d: 'M12 20v-8',  delay: 0.36, opacityFrom: 0.82, opacityTo: 0.25 },
  { d: 'M17 20V8',   delay: 0.54, opacityFrom: 0.78, opacityTo: 0.2  },
  { d: 'M22 20V4',   delay: 0.72, opacityFrom: 0.72, opacityTo: 0.18 },
];

const SignalApple = ({
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
    {bars.map(({ d, delay, opacityFrom, opacityTo }) => (
      <motion.path
        key={d}
        d={d}
        animate={{
          opacity: [opacityFrom, opacityTo, opacityFrom],
          scaleY: [1, 0.9, 1],
          pathLength: [1, 0.9, 1],
        }}
        transition={waveTransition(delay)}
        initial={{ opacity: opacityFrom, pathLength: 1 }}
        style={{ originX: '50%', originY: '100%' }}
      />
    ))}
  </motion.svg>
);

export default SignalApple;