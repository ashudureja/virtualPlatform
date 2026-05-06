import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   FOOTER LINKS
───────────────────────────────────────────── */
const FOOTER_COLS = [
  {
    heading: "Platform",
    links: [
      "Single Portal",
      "Service Monitoring",
      "Auto Rebilling",
      "API Access",
      "Mobile App",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Partner with Us", "Support", "MSPaaS", "Core Products"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Use"],
  },
  {
    heading: "Connect",
    links: ["LinkedIn", "Book a Demo", "Contact Us"],
  },
];

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
function VPMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="5" height="5" rx="1.2" fill="white" />
      <rect
        x="8"
        y="1"
        width="5"
        height="5"
        rx="1.2"
        fill="white"
        className="opacity-55"
      />
      <rect
        x="1"
        y="8"
        width="5"
        height="5"
        rx="1.2"
        fill="white"
        className="opacity-55"
      />
      <rect x="8" y="8" width="5" height="5" rx="1.2" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   MAIN FOOTER
───────────────────────────────────────────── */
const Footer = () => {
  return (
    <footer className="relative overflow-hidden gradient-bg2">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-[1] opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── CTA SECTION ── */}
      <div className="relative z-[2] px-4 py-20 text-center sm:px-6 sm:py-24 md:px-12 lg:px-16 lg:py-30">
        {/* subtle grid lines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:120px_120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto mt-6 flex w-full max-w-8xl flex-col items-center gap-6 sm:gap-8 lg:mt-10"
        >
          <h2 className="text-center font-[f3] text-4xl leading-tight text-black text-shadow-sm sm:text-5xl lg:text-5xl">
            Ready to simplify
            <br />
            your MSP?
          </h2>

          <motion.button className="cursor-pointer rounded-full bg-[#c8ff00] px-6 py-3 text-sm text-[#0a1628]">
            Request a Demo
          </motion.button>
        </motion.div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="relative z-[2] mx-4 h-px bg-white/10 sm:mx-6 lg:mx-12" />

      {/* ── LINKS + CONTACT SECTION ── */}
      <div className="relative z-[2] px-4 py-12 pb-10 sm:px-6 md:px-12 lg:px-16 lg:py-[72px] lg:pb-14">
        <div className="mx-auto flex w-full max-w-8xl flex-col justify-between gap-10 lg:flex-row lg:gap-16">
          {/* LEFT — VP brand */}
          <motion.div
            
            className="flex min-w-0 flex-col gap-5 lg:min-w-[260px]"
          >
            <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
              <VPMark />
              <span className="font-[f3] text-base tracking-tight text-white">
                Virtualplatform
              </span>
            </div>

            <p className="font-[f2] text-[15px] leading-relaxed text-white/55">
              Australia's wholesale-only ICT aggregation platform —
              <br className="hidden sm:block" /> built exclusively for MSPs.
            </p>
          </motion.div>

          {/* RIGHT — nav columns */}
          <motion.div
           
            className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-10"
          >
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4 font-[f3]">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40">
                  {col.heading}
                </p>

                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <motion.a
                      key={link}
                      href="#"
                      whileHover={{ x: 3 }}
                      className="text-sm font-normal text-white/60 no-underline transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-[2] border-t border-white/10 px-4 py-5 font-light sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <p className="m-0 text-[12px] leading-relaxed text-white/35">
            © 2026 Virtualplatform. All rights reserved |{" "}
            <a
              href="#"
              className="text-white/35 underline transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6">
            {/* phone */}
            <a
              href="tel:0295387000"
              className="flex items-center gap-2 text-[12px] text-white/45 no-underline transition-colors hover:text-white"
            >
              <PhoneIcon />
              02 9538 7000
            </a>

            <span className="hidden text-sm text-white/15 sm:inline">|</span>

            {/* email */}
            <a
              href="mailto:support@virtualplatform.com.au"
              className="flex items-center gap-2 text-[12px] text-white/45 no-underline transition-colors hover:text-white"
            >
              <MailIcon />
              support@virtualplatform.com.au
            </a>

            <span className="hidden text-sm text-white/15 sm:inline">|</span>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/virtual-platform/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[12px] text-white/45 no-underline transition-colors hover:text-white"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ── SMALL HELPER ICONS ── */
const PhoneIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.09 1.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default Footer;