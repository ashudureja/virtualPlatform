import React from 'react';
import { motion } from 'framer-motion';

const LoaderPinwheelApple = ({
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
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }}
      style={{ originX: '50%', originY: '50%' }}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
      <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
      <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
    </motion.g>
  </motion.svg>
);

export default LoaderPinwheelApple;