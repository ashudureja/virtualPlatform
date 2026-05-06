"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IoMdCheckmark } from "react-icons/io";
import { ShieldCheck, LockKeyhole, Smartphone, KeyRound } from "lucide-react";

import { cn } from "../ui/animated-beam";

const VP_BLUE = "#2386f8";

const SecurityCard = ({
  delay = 5000,
  name = "Verified MSP User",
  email = "secure.access@partner.com.au",
  cardTitle = "Two-Factor Authentication",
  cardDescription = "Protect customer information and platform access with an extra verification step before users enter the Virtualplatform portal.",
}) => {
  const [animationKey, setAnimationKey] = useState(0);
  const delayTime = Math.max(delay, 5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, delayTime);

    return () => clearInterval(interval);
  }, [delayTime]);

  return (
    <SecurityCardInner
      key={animationKey}
      name={name}
      email={email}
      cardTitle={cardTitle}
      cardDescription={cardDescription}
    />
  );
};

export default SecurityCard;

const SecurityCardInner = ({ name, email, cardTitle, cardDescription }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "flex h-[432px] w-full max-w-[350px] items-center justify-center",
        "rounded-md border border-neutral-300 bg-neutral-100 shadow-sm shadow-black/10",
        "dark:border-neutral-800 dark:bg-neutral-900"
      )}
    >
      <InfiniteScrambler />
      <ContainerMask />

      {/* Bottom soft light */}
      <div
        className={cn(
          "absolute bottom-0 h-1/2 w-[150%] rounded-t-[60%]",
          "bg-linear-to-b from-neutral-200 to-neutral-50 shadow-[0_0_900px_rgba(250,250,250,0.9)]",
          "dark:from-neutral-800 dark:to-neutral-950 dark:shadow-[0_0_900px_rgba(10,10,10,0.9)]"
        )}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 hidden h-50 w-full bg-[linear-gradient(to_bottom,rgb(23,23,23)_30%,transparent_100%)] dark:block" />
      <div className="absolute top-0 left-0 block h-50 w-full bg-[linear-gradient(to_bottom,rgb(245,245,245)_30%,transparent_100%)] dark:hidden" />

      {/* Header */}
      <div className="absolute top-3 left-0 z-20 w-full px-3">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#2386f8]/25 bg-[#2386f8]/10 px-2.5 py-1 text-[10px] font-semibold text-[#2386f8]">
          <ShieldCheck className="size-3" />
          Secure Portal Access
        </div>

        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
          {cardTitle}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {cardDescription}
        </p>
      </div>

      {/* Center 2FA verification UI */}
      <div className="relative z-10 mt-10 flex items-center justify-center">
        <VerificationRings />

        <div className="relative rounded-[18px] border border-neutral-300/70 bg-neutral-200/60 p-1 shadow-xl dark:border-neutral-700/70 dark:bg-neutral-950/60">
          <AuthDeviceCard />
        </div>
      </div>

      {/* Verified user info */}
      <div className="absolute top-[72%] z-20 flex h-12 w-full flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center text-xs text-neutral-900 dark:text-white">
          <motion.p
            initial={{ x: 8, opacity: 0 }}
            animate={{ x: -2, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.8,
            }}
          >
            {name}
          </motion.p>

          <CheckCircle />
        </div>

        <div className="text-[10px] text-neutral-500">{email}</div>
      </div>
    </div>
  );
};

const VerificationRings = () => {
  return (
    <>
      <motion.div
        className="absolute h-36 w-36 rounded-full border border-[#2386f8]/20"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1.2, opacity: [0, 0.8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute h-48 w-48 rounded-full border border-[#2386f8]/10"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1.25, opacity: [0, 0.6, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.4,
        }}
      />

      <div className="absolute h-44 w-44 rounded-full bg-[#2386f8]/20 blur-[42px]" />
    </>
  );
};

const AuthDeviceCard = () => {
  const code = ["2", "4", "8", "6", "1", "9"];

  return (
    <div className="relative h-[150px] w-[112px] overflow-hidden rounded-[16px] border border-white/50 bg-linear-to-br from-white to-neutral-200 px-3 py-3 shadow-2xl dark:border-white/10 dark:from-neutral-800 dark:to-neutral-950">
      <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-[#2386f8]/20 to-transparent" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex size-7 items-center justify-center rounded-full bg-[#2386f8]/10 text-[#2386f8]">
          <Smartphone className="size-3.5" />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.7 }}
          className="flex size-7 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"
        >
          <LockKeyhole className="size-3.5" />
        </motion.div>
      </div>

      <div className="relative z-10 mt-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500">
          2FA Code
        </p>

        <div className="mt-2 grid grid-cols-6 gap-1">
          {code.map((digit, index) => (
            <motion.div
              key={`${digit}-${index}`}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.95 + index * 0.08,
              }}
              className="flex h-6 items-center justify-center rounded bg-neutral-900 text-[10px] font-semibold text-white shadow-sm dark:bg-white dark:text-neutral-950"
            >
              {digit}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 1.7 }}
          className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-[#2386f8]/20 bg-[#2386f8]/10 px-2 py-1 text-[9px] font-medium text-[#2386f8]"
        >
          <KeyRound className="size-3" />
          Verified token
        </motion.div>
      </div>
    </div>
  );
};

const CheckCircle = () => {
  return (
    <div className="relative ml-1">
      <svg width="18" height="18">
        <motion.circle
          cx="9"
          cy="9"
          r="6"
          fill={VP_BLUE}
          className="rounded-full filter-[drop-shadow(0_0_4px_#2386f8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 2.3,
          }}
        />
      </svg>

      <motion.div
        className="absolute top-[5px] left-[5px] flex items-center justify-center text-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 2.4,
        }}
      >
        <IoMdCheckmark className="size-2" />
      </motion.div>
    </div>
  );
};

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

const ContainerMask = () => {
  return (
    <>
      <div className="absolute top-0 left-0 hidden h-full w-20 bg-[linear-gradient(to_right,rgb(23,23,23)_20%,transparent_100%)] dark:block" />
      <div className="absolute top-0 left-0 block h-full w-20 bg-[linear-gradient(to_right,rgb(245,245,245)_20%,transparent_100%)] dark:hidden" />

      <div className="absolute top-0 right-0 hidden h-full w-20 bg-[linear-gradient(to_left,rgb(23,23,23)_20%,transparent_100%)] dark:block" />
      <div className="absolute top-0 right-0 block h-full w-20 bg-[linear-gradient(to_left,rgb(245,245,245)_20%,transparent_100%)] dark:hidden" />
    </>
  );
};