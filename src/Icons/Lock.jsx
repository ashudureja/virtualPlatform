import React from 'react';
import { motion } from 'framer-motion';

const LockApple = ({
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
      <motion.g
        animate={{
          rotate: [0, -5, 7, 0],
          scale: [1, 0.9, 1, 1],
          transition: {
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1.8,
          },
        }}
        style={{ originX: '50%', originY: '50%' }}
      >
        <motion.rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <motion.path
          d="M7 11V7a5 5 0 0 1 10 0v4"
          animate={{
            pathLength: [1, 0.8, 1, 1],
            transition: {
              duration: 1.2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.8,
            },
          }}
          initial={{ pathLength: 1 }}
          style={{ originX: '50%', originY: '50%' }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default LockApple;