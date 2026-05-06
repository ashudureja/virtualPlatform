"use client";
import { cn } from "../ui/animated-beam";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const digits = ["*", "*", "*", "*", "*", "*"];

type AnimatedOTPProps = {
  delay?: number;
  cardTitle?: string;
  cardDescription?: string;
};

const AnimatedOTP = ({
  delay = 3500,
  cardTitle = "Secure Access",
  cardDescription = "Protect accounts with a one-time password, auto-applied during every user login for enhanced security.",
}: AnimatedOTPProps) => {
  const [animationKey, setAnimationKey] = useState(0);
  const delayTime = Math.max(delay, 3500);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, delayTime);

    return () => clearInterval(interval);
  }, [delayTime]);

  return (
    <OTPinput
      key={animationKey}
      cardTitle={cardTitle}
      cardDescription={cardDescription}
    />
  );
};

export default AnimatedOTP;

const OTPinput = ({ cardTitle, cardDescription }: AnimatedOTPProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (activeIndex > digits.length - 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 400);

    if (activeIndex === digits.length - 1) {
      setTimeout(() => {
        setFadeOut(true);
      }, 450);
    }

    return () => clearInterval(interval);
  }, [activeIndex]);


  const SCRAMBLED_STRINGS = [
    "VP-2FA@ACCESS#TOKEN-9081 AUTH_FLOW:VERIFY USER_SESSION:LOCKED MFA_CHALLENGE:ACTIVE CLIENT_PORTAL:PROTECTED CUSTOMER_DATA:ENCRYPTED API_GATEWAY:SECURE LOGIN_ATTEMPT:CHECKING DEVICE_TRUST:VALIDATE OTP:WAITING",
    "SECURE_PORTAL#2386F8 MFA_REQUIRED:TRUE IDENTITY_CHECK:ACTIVE PARTNER_ACCESS:VERIFIED SESSION_KEY:ROTATING TOKEN_EXPIRY:05:00 CUSTOMER_RECORDS:PROTECTED BILLING_DATA:LOCKED SUPPORT_PORTAL:AUTH",
    "AUTH_LAYER:ACTIVE VP_GATEWAY:SECURE 2FA_CODE:GENERATED LOGIN_SIGNAL:TRUSTED DEVICE_ID:MATCHED IP_CHECK:PASS USER_ROLE:MSP_ADMIN API_SCOPE:LIMITED PORTAL_ACCESS:PENDING_VERIFICATION",
    "VIRTUALPLATFORM_SECURITY MFA:ON PORTAL:PROTECTED CUSTOMER_INFO:SAFE TOKEN:VALIDATED SESSION:ENCRYPTED ORDERING_API:SECURE BILLING_API:SECURE SUPPORT_API:SECURE ACCESS_GRANTED:TRUE",
  ];
  
  const InfiniteScrambler = () => {
    const [text, setText] = useState(SCRAMBLED_STRINGS[0]);
    const index = useRef(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        index.current = (index.current + 1) % SCRAMBLED_STRINGS.length;
        setText(SCRAMBLED_STRINGS[index.current]);
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="absolute top-[16%] max-w-[322px] px-4">
        <p className="break-words font-mono text-[13px] leading-4 whitespace-normal text-neutral-500 opacity-35">
          {text}
        </p>
      </div>
    );
  };

  return (
    
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
        <div className="flex w-full items-center justify-center gap-3">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className={cn(
                "text-primary relative flex h-18 w-18 shadow-border items-center justify-center rounded-md bg-linear-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-800",
                "shadow-[0_2px_6px_rgb(0,0,0,0.15)]",
              )}
            >
              <motion.div
                className="absolute inset-0 rounded-md border border-cyan-400"
                initial={{
                  opacity: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.85, 1.3],
                  filter: "blur(2px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 2.25,
                }}
                style={{
                  boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.5)",
                }}
              />
              {activeIndex === idx && (
                <motion.div
                  key={idx}
                  layoutId="glow"
                  className="absolute inset-0 rounded-md border border-cyan-400"
                  initial={
                    idx === 0 ? { opacity: 0, scale: 1.7 } : { scale: 1.7 }
                  }
                  animate={idx === 0 ? { opacity: 1, scale: 1 } : { scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.6)",
                  }}
                >
                  <svg
                    viewBox=" 0 0 20 20"
                    className="absolute inset-0 h-full w-full"
                    strokeWidth="0.4"
                  >
                    <path
                      d="M 3 19 h 14"
                      className="stroke-cyan-400 dark:stroke-cyan-500"
                    />
                  </svg>
                </motion.div>
              )}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: fadeOut ? 0 : 1,
                }}
                transition={{
                  duration: fadeOut ? 0.2 : 0.3,
                  ease: "easeInOut",
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
                className="absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {digit}
              </motion.span>
            </div>
          ))}
        </div>
    
     
    </div>
  );
};
