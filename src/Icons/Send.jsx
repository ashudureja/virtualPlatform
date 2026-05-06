import React from 'react';
import { motion } from 'framer-motion';

const SendApple = ({
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
      animate={{
        scale: [1, 0.8, 1, 1, 1],
        x: ['0%', '-10%', '100%', '-125%', '0%'],
        y: ['0%', '10%', '-100%', '125%', '0%'],
        opacity: [1, 0.9, 0, 0, 1],
      }}
      initial={{ scale: 1, x: '0%', y: '0%', opacity: 1 }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        repeatDelay: 1.4,
        ease: [0.42, 0, 0.18, 1],
        times: [0, 0.2, 0.45, 0.45, 1],
        opacity: { times: [0, 0.2, 0.44, 0.45, 1] },
      }}
      style={{ originX: '50%', originY: '50%' }}
    >
      <motion.path d="M14.5,21.7c.1.3.4.4.7.3.1,0,.2-.2.3-.3L22,2.7c0-.3,0-.5-.3-.6-.1,0-.2,0-.3,0L2.3,8.5c-.3,0-.4.4-.3.6,0,.1.2.2.3.3l7.9,3.2c.5.2.9.6,1.1,1.1l3.2,7.9Z" />
      <motion.path d="M21.9,2.1l-10.9,10.9" />
    </motion.g>
  </motion.svg>
);

export default SendApple;