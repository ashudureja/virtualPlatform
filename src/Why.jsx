import { useEffect, useRef, useState, forwardRef } from "react";
import { motion, useInView } from "motion/react";

// ─────────────────────────────────────────────────────────────────────────────
//  ANIMATED BEAM
// ─────────────────────────────────────────────────────────────────────────────
const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 1,
  pathColor = "rgba(13,13,14,0.07)",
  pathWidth = 2,
  gradientStartColor = "#ff0000",
  gradientStopColor = "#ff4d4d",
  active = true,
  beamId = "beam",
}) => {
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const gradRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;
      const cr = containerRef.current.getBoundingClientRect();
      const rA = fromRef.current.getBoundingClientRect();
      const rB = toRef.current.getBoundingClientRect();

      setSvgDimensions({ width: cr.width, height: cr.height });

      const sx = rA.left - cr.left + rA.width / 2;
      const sy = rA.top - cr.top + rA.height / 2;
      const ex = rB.left - cr.left + rB.width / 2;
      const ey = rB.top - cr.top + rB.height / 2;

      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2 + curvature;

      setPathD(`M ${sx},${sy} Q ${mx},${my} ${ex},${ey}`);
    };

    const ro = new ResizeObserver(updatePath);
    if (containerRef.current) ro.observe(containerRef.current);
    updatePath();
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature]);

  useEffect(() => {
    if (!gradRef.current) return;
    cancelAnimationFrame(rafRef.current);
    const g = gradRef.current;

    if (!active) {
      g.setAttribute("x1", "0%");
      g.setAttribute("x2", "0%");
      g.setAttribute("y1", "0%");
      g.setAttribute("y2", "0%");
      return;
    }

    const dur = duration * 1000;
    let start = null;

    const frame = (ts) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / dur, 1);
      g.setAttribute("x1", -10 + t * 120 + "%");
      g.setAttribute("x2", t * 100 + "%");
      g.setAttribute("y1", "0%");
      g.setAttribute("y2", "0%");
      if (t < 1) rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, duration]);

  if (!pathD || svgDimensions.width === 0) return null;

  const gid = `grad-${beamId}`;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      className="absolute top-0 left-0 z-0 pointer-events-none"
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeLinecap="round" />
      {active && (
        <path d={pathD} strokeWidth={pathWidth + 0.7} stroke={`url(#${gid})`} strokeLinecap="round" />
      )}
      <defs>
        <linearGradient id={gid} ref={gradRef} gradientUnits="userSpaceOnUse" x1="0%" x2="0%" y1="0%" y2="0%">
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="10%" stopColor={gradientStartColor} />
          <stop offset="50%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────────────────────
const PAINS = [
  { label: "Reactive Support", sub: "No visibility until clients call" },
  { label: "Supplier Complexity", sub: "17+ portals to manage daily" },
  { label: "Painful Billing", sub: "Manual invoicing every month" },
  { label: "Onerous Commercials", sub: "Separate contracts per supplier" },
  { label: "Slow Provisioning", sub: "Days of manual back-and-forth" },
];

const SOLUTIONS = [
  { label: "Monitoring & Diagnostics", sub: "Live service health, always on" },
  { label: "Multi-Supplier Aggregation", sub: "All suppliers in one portal" },
  { label: "Rebill & Payment Gateway", sub: "Auto-invoice with your margin" },
  { label: "Qualify, Compare & Purchase", sub: "Order in seconds, not days" },
  { label: "Instant API Provisioning", sub: "Automated end-to-end delivery" },
];

const BEAM_DURATION = 4.0;
const CYCLE_PAUSE = 0;

// ─────────────────────────────────────────────────────────────────────────────
//  PILL NODE
// ─────────────────────────────────────────────────────────────────────────────
const PillNode = forwardRef(function PillNode({ label, sub }, ref) {
  return (
    <div
      ref={ref}
      className="bg-blue-50/50 shadow-border  rounded-xl p-2 min-w-[210px] "
    >
      <div className="bg-white shadow-border rounded-lg py-3 px-4 flex items-center gap-2.5">
        <span className="w-1 h-1 rounded-full shrink-0 bg-black" />
        <div>
          <p className="text-[22px] m-0 text-gray-900 leading-tight">{label}</p>
          <p className="text-lg text-gray-500 mt-0.5 leading-snug">{sub}</p>
        </div>
      </div>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
//  VP HUB
// ─────────────────────────────────────────────────────────────────────────────
const VPHub = forwardRef(function VPHub({ pulse }, ref) {
  return (
    <div ref={ref} className="relative w-[90px] h-[90px] shrink-0">
      <motion.div
        className="absolute -inset-[10px] rounded-full border border-blue-500/30"
        animate={pulse ? { scale: [1, 1.10, 1], opacity: [0.4, 0.8, 0.4] } : { scale: 1, opacity: 0.2 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -inset-[22px] rounded-full border border-blue-500/15"
        animate={pulse ? { scale: [1, 1.06, 1], opacity: [0.2, 0.5, 0.2] } : { scale: 1, opacity: 0.1 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.4 }}
      />
      <div
        className={`w-full h-full rounded-full p-[7px] bg-gray-50 transition-all duration-400 ease-in-out border ${
          pulse ? "border-blue-500/30 shadow-[0_4px_24px_rgba(35,134,248,0.18)]" : "border-gray-200/60 shadow-sm"
        }`}
      >
        <div
          className={`w-full h-full rounded-full bg-white flex flex-col items-center justify-center transition-all duration-400 ease-in-out border ${
            pulse ? "border-blue-500/50" : "border-gray-200/80"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="1" width="5" height="5" rx="1.2" fill="#2386f8" />
            <rect x="8" y="1" width="5" height="5" rx="1.2" fill="#2386f8" opacity="0.5" />
            <rect x="1" y="8" width="5" height="5" rx="1.2" fill="#2386f8" opacity="0.5" />
            <rect x="8" y="8" width="5" height="5" rx="1.2" fill="#2386f8" />
          </svg>
          <p className="text-[8px] font-bold tracking-[0.07em] mt-1 text-blue-500">VP</p>
        </div>
      </div>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
//  PHASE LOOP
// ─────────────────────────────────────────────────────────────────────────────
function usePhaseLoop(inView) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const ms = (s) => s * 1000;

    const run = async () => {
      await new Promise((r) => setTimeout(r, 700));
      while (!cancelled) {
        setPhase(1);
        await new Promise((r) => setTimeout(r, ms(BEAM_DURATION)));
        if (cancelled) break;

        setPhase(2);
        await new Promise((r) => setTimeout(r, ms(BEAM_DURATION + CYCLE_PAUSE)));
        if (cancelled) break;

        setPhase(0);
        await new Promise((r) => setTimeout(r, 100));
        if (cancelled) break;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  return phase;
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────────
export default function TransformerSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const vpRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const phase = usePhaseLoop(inView);

  const leftRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const rightRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const redActive = phase === 1;
  const greenActive = phase === 2;

  return (
    <section ref={sectionRef} className="relative font-[f2] bg-[#eef0f1] z-2 py-24 px-6 overflow-hidden ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        
        <h2 className="text-4xl md:text-5xl text-gray-900 tracking-tight mb-4">
        Why do I need  <span style={{ color: "#2386f8" }}>MPSaaS?</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-500">
          Our technology marketplace is an online hub where service providers can easily qualify, compare, purchase and manage best-in-breed ICT products and services including network access tails, backup, voice, hosting and so much more.
        </p>
      </motion.div>

      {/* Perspective Container Wrapper */}
      <div className="max-w-[960px] mx-auto [perspective:2400px]">
        {/* 3D Skewed Canvas */}
        <div className="transform-gpu  transition-all duration-1000 ease-out scale-105">
          
          {/* Column labels */}
          <div className="flex justify-between mb-4 px-1">
            <p className="text-[10px]  tracking-[0.10em] uppercase text-red-600 min-w-[210px] m-0">
              Current Reality
            </p>
            <p className="text-[10px]  tracking-[0.10em] uppercase text-green-600 min-w-[210px] m-0 text-right">
              Using Virtualplatform
            </p>
          </div>

          {/* Beam canvas */}
          <div
            ref={containerRef}
            className="relative flex items-center justify-between gap-4 min-h-[400px]"
          >
            {/* LEFT — pain pills */}
            <div className="flex flex-col gap-3.5 z-10">
              {PAINS.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                  animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PillNode ref={leftRefs[i]} label={p.label} sub={p.sub} />
                </motion.div>
              ))}
            </div>

            {/* CENTRE — VP hub */}
            <div className="flex flex-col items-center gap-2 z-10 shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <VPHub ref={vpRef} pulse={phase !== 0} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="text-[12px] tracking-[0.08em] uppercase text-center text-blue-500 m-0"
              >
                Virtualplatform
              </motion.p>
            </div>

            {/* RIGHT — solution pills */}
            <div className="flex flex-col gap-3.5 z-10">
              {SOLUTIONS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                  animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PillNode ref={rightRefs[i]} label={s.label} sub={s.sub} />
                </motion.div>
              ))}
            </div>

            {/* RED BEAMS (Bright) */}
            {PAINS.map((_, i) => (
              <AnimatedBeam
                key={`L${i}`}
                beamId={`L${i}`}
                containerRef={containerRef}
                fromRef={leftRefs[i]}
                toRef={vpRef}
                curvature={(i - 2) * 40}
                duration={BEAM_DURATION}
                pathColor="rgba(13,13,14,0.07)"
                pathWidth={1.5}
                gradientStartColor="#ff0000"
               
                active={redActive}
              />
            ))}

            {/* GREEN BEAMS (Bright) */}
            {SOLUTIONS.map((_, i) => (
              <AnimatedBeam
                key={`R${i}`}
                beamId={`R${i}`}
                containerRef={containerRef}
                fromRef={vpRef}
                toRef={rightRefs[i]}
                curvature={(i - 2) * 40}
                duration={BEAM_DURATION}
                pathColor="rgba(13,13,14,0.07)"
                pathWidth={1.5}
                  gradientStartColor="#4dff4d"
               
                gradientStopColor="#4dff4d"
                active={greenActive}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="text-center mt-7"
        >
          <p className="text-[13px] text-gray-500 mb-4">
            One platform. Every problem solved. Wholesale-only — we never compete with you.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 6px 28px rgba(35,134,248,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-yellow-400 text-white border-none rounded-xl py-3 px-7 text-[13px] font-semibold cursor-pointer"
          >
            See It In Action →
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}