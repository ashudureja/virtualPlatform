import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "The best automation out there",
    author: "Challenger VoIP automation specialist",
    initials: "C",
  },
  {
    quote: "Very impressed.",
    author: "Dark fibre provider CEO",
    initials: "D",
  },
  {
    quote: "What you've built is something that MSPs have been asking for for years.",
    author: "VoIP vendor",
    initials: "V",
  },
  {
    quote: "The death knell for legacy aggregators, we want to be part of it.",
    author: "MSP CEO",
    initials: "M",
  },
  {
    quote: "The interface is incredibly intuitive, saving our team hours of onboarding time.",
    author: "Cloud Service Provider",
    initials: "C",
  },
  {
    quote: "Finally, a solution that understands the day-to-day workflow of our business.",
    author: "IT Consultant",
    initials: "I",
  },
];

const StarRating = () => (
  <div className="flex gap-[3px] mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" className="fill-yellow-300">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="rounded-2xl py-5 h-60 px-6 w-[350px] min-w-[300px] bg-linear-to-b from-blue-950 to black mr-4 flex flex-col ">
    <StarRating />
    <p className="font-serif text-slate-300 italic text-sm leading-[1.65] mb-4 grow">
      "{item.quote}"
    </p>
    <div className="flex items-center gap-2.5 border-t border-blue-400/10 pt-3">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-[0_0_0_2px_rgba(96,165,250,0.25)]">
        {item.initials}
      </div>
      <p className="text-slate-400 text-xs font-sans font-medium m-0">
        {item.author}
      </p>
    </div>
  </div>
);

const MarqueeRow = ({ direction }) => {
  const items = [...testimonials, ...testimonials, ...testimonials];
  const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight';

  return (
    <div className="overflow-hidden w-full relative">
      {/* Left Fade Mask */}
      <div className="absolute left-0 inset-y-0 w-[80px] z-10 bg-gradient-to-r from-[#0f1a25] to-transparent pointer-events-none" />
      
      {/* Right Fade Mask */}
      <div className="absolute right-0 inset-y-0 w-[80px] z-10 bg-gradient-to-l from-[#0f1a25] to-transparent pointer-events-none" />
      
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: `${animName} 40s linear infinite` }}
      >
        {items.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-20 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-[52px] px-6 max-w-[580px]"
      >
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-full bg-blue-500/12 border border-blue-500/30 text-blue-400 text-[11px] font-semibold tracking-widest uppercase mb-[18px] font-sans">
          Testimonials
        </div>

        <h2 className="text-[clamp(2rem,5vw,3rem)] font-[f3] text-slate-100 font-bold leading-[1.15] m-0 mb-[14px]">
          What Others Say
        </h2>

        <p className="text-slate-500 text-[15px] leading-[1.65] font-sans m-0">
          Real leaders share how they crushed dead-end leads and boosted sales
          with our game-changing AI solutions.
        </p>
      </motion.div>

      <div className="mb-4 w-full">
        <MarqueeRow direction="left" />
      </div>

      <div className="w-full">
        <MarqueeRow direction="right" />
      </div>
    </div>
  );
};

export default Testimonial;