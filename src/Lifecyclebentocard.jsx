// LifecycleBentoCard.jsx
// Drop this into your Features grid as a col-span-2 card.
// Usage:
//   import LifecycleBentoCard from "./LifecycleBentoCard";
//   <div className="col-span-2 h-130 ..."> <LifecycleBentoCard /> </div>

import { useState } from "react";

/* ── tiny SVG helpers ─────────────────────────────────────────────────── */
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const MiniChart = ({ color = "#6366f1", data }) => {
  const pts = data || [30, 45, 35, 55, 40, 60, 50, 65, 55, 70];
  const max = Math.max(...pts), min = Math.min(...pts), range = max - min || 1;
  const W = 56, H = 24;
  const coords = pts.map((v, i) => [
    (i / (pts.length - 1)) * W,
    H - ((v - min) / range) * H * 0.8 - H * 0.1,
  ]);
  const d = coords
    .map((p, i) =>
      i === 0
        ? `M${p[0]},${p[1]}`
        : `C${coords[i - 1][0] + 6},${coords[i - 1][1]} ${p[0] - 6},${p[1]} ${p[0]},${p[1]}`
    )
    .join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-14 h-6">
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

const UptimeSparkline = () => {
  const pts = [40, 55, 45, 60, 50, 65, 58, 70, 62, 75, 68, 80];
  const max = Math.max(...pts), min = Math.min(...pts), range = max - min || 1;
  const W = 100, H = 36;
  const coords = pts.map((v, i) => [
    (i / (pts.length - 1)) * W,
    H - ((v - min) / range) * (H * 0.75) - H * 0.1,
  ]);
  const linePath = coords
    .map((p, i) =>
      i === 0
        ? `M${p[0]},${p[1]}`
        : `C${coords[i - 1][0] + 6},${coords[i - 1][1]} ${p[0] - 6},${p[1]} ${p[0]},${p[1]}`
    )
    .join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-9 mt-1">
      <defs>
        <linearGradient id="lcg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#lcg)" />
      <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

/* ── constants ────────────────────────────────────────────────────────── */
const STEPS = ["Qualify", "Order", "Manage", "Support", "Bill"];
const ACTIVE = 2; // "Manage"

const STAGE_CARDS = [
  {
    title: "Service qualification",
    badge: "Completed",
    badgeColor: "bg-green-100 text-green-700",
    rows: [
      ["Address", "1 Main St, Berlin, DE"],
      ["Availability", "Eligible"],
      ["Product match", "Business Internet 500"],
    ],
    icon: (
      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-green-50",
    active: false,
  },
  {
    title: "Order submitted",
    badge: "Completed",
    badgeColor: "bg-green-100 text-green-700",
    rows: [
      ["Order ID", "ORD-2024-05218"],
      ["Submitted", "14 May 2024, 10:32"],
      ["Channel", "Partner Portal"],
    ],
    icon: (
      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    iconBg: "bg-green-50",
    active: false,
  },
  {
    title: "Active service",
    badge: "In progress",
    badgeColor: "bg-blue-100 text-blue-700",
    rows: [
      ["Status", "● Active"],
      ["Activated", "16 May 2024, 09:15"],
      ["Uptime (30d)", "99.98%"],
    ],
    active: true,
  },
  {
    title: "Support ticket",
    badge: "Open",
    badgeColor: "bg-gray-200 text-gray-600",
    rows: [
      ["Ticket ID", "TKT-2024-01987"],
      ["Priority", "⬤ Medium"],
      ["Updated", "20 May 2024, 14:48"],
    ],
    icon: (
      <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    iconBg: "bg-orange-50",
    active: false,
  },
  {
    title: "Invoice generated",
    badge: "Pending",
    badgeColor: "bg-gray-200 text-gray-500",
    rows: [
      ["Invoice #", "INV-2024-06543"],
      ["Amount", "€79.00"],
      ["Due date", "1 Jun 2024"],
    ],
    icon: (
      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    iconBg: "bg-purple-50",
    active: false,
  },
];

const STATS = [
  { label: "Services",        value: "128",    change: "+12%", up: true,  color: "#6366f1", data: [30,45,35,55,40,60,50,65,55,70] },
  { label: "Active Services", value: "112",    change: "+8%",  up: true,  color: "#6366f1", data: [40,50,45,60,55,65,58,70,62,75] },
  { label: "Open Tickets",    value: "7",      change: "−22%", up: false, color: "#f97316", data: [70,65,60,55,65,50,45,55,48,40] },
  { label: "MRR",             value: "€9,842", change: "+14%", up: true,  color: "#a855f7", data: [30,40,35,50,45,60,55,65,60,70] },
];

/* ── Mobile stepper card (left panel) ───────────────────────────────── */
function MobileStepCard() {
  const steps = [
    { n: 1, label: "Qualify",  sub: "Service eligibility confirmed", done: true,  active: false },
    { n: 2, label: "Order",    sub: "Order submitted",               done: true,  active: false },
    { n: 3, label: "Manage",   sub: "Service is active",             done: false, active: true  },
    { n: 4, label: "Support",  sub: "No open tickets",               done: false, active: false },
    { n: 5, label: "Bill",     sub: "Next invoice in 12 days",       done: false, active: false },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 relative overflow-hidden h-full flex flex-col">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent rounded-b-2xl" />

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-gray-800 leading-tight">Business Internet 500</span>
        <span className="flex items-center gap-1 text-[10px] text-green-600 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />Active
        </span>
      </div>
      <p className="text-[10px] text-gray-400 mb-0">Customer</p>
      <p className="text-xs font-semibold text-gray-800 mb-3">Acme Corp.</p>

      {/* Steps */}
      <div className="space-y-1 relative z-10 flex-1">
        {steps.map((s) => (
          <div
            key={s.n}
            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${s.active ? "bg-blue-50" : ""}`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                s.done || s.active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
              }`}
            >
              {s.done ? <CheckIcon /> : s.n}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-gray-800 leading-none">{s.label}</p>
              <p className="text-[10px] text-gray-400 truncate">{s.sub}</p>
            </div>
            {!s.done && !s.active && (
              <span className="w-4 h-4 rounded-full border-2 border-gray-200 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-3 pt-3 border-t border-gray-100 flex justify-between items-end">
        <div>
          <p className="text-[10px] text-gray-400">Plan</p>
          <p className="text-[11px] font-semibold text-gray-800 leading-tight">Business Internet 500</p>
          <p className="text-[10px] text-gray-400">500/500 Mbps</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400">Monthly</p>
          <p className="text-xs font-bold text-gray-900">€79.00</p>
          <p className="text-[10px] text-gray-400">Excl. VAT</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main exported card ────────────────────────────────────────────────
   Drop into Features.jsx like:
   <div className="col-span-2 h-130 rounded-lg shadow-border bg-white p-0.5 relative overflow-hidden">
     <LifecycleBentoCard />
   </div>
──────────────────────────────────────────────────────────────────────── */
export default function LifecycleBentoCard() {
  return (
    <div className="h-full bg-gradient-to-l from-white via-blue-500 to-white w-full flex flex-col p-4 gap-3 font-[f2]">

      {/* ── Top: text label + two-panel layout ── */}
      <div className="flex gap-3 flex-1 min-h-0">

        {/* Mobile step card */}
        <div className="w-44 flex-shrink-0">
          <MobileStepCard />
        </div>

        {/* Dashboard panel */}
        <div className="flex-1 bg-gray-50 rounded-2xl flex flex-col overflow-hidden">

          {/* Mini top-bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 bg-white rounded-t-2xl">
            <div className="w-3.5 h-3.5 bg-blue-600 rounded rotate-45 flex-shrink-0" />
            <span className="text-[11px] font-bold text-gray-800">Virtualplatform</span>
            <div className="flex gap-2.5 ml-3">
              {["Dashboard","Services","Customers","Billing","Support","Reports"].map((n) => (
                <span key={n} className={`text-[10px] font-medium ${n==="Services" ? "text-blue-600 border-b border-blue-600 pb-px" : "text-gray-400"}`}>{n}</span>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden">

            {/* Section header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none">Service Lifecycle</p>
                <p className="text-[10px] text-gray-400">End-to-end view of the customer journey</p>
              </div>
              <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2 py-1">
                <span className="text-[10px] text-gray-600 font-medium">Acme Corp.</span>
                <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Progress timeline */}
            <div className="flex items-center px-1">
              {STEPS.map((step, i) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      i < ACTIVE
                        ? "bg-blue-600 border-blue-600 text-white"
                        : i === ACTIVE
                        ? "bg-white border-blue-600 shadow shadow-blue-100"
                        : "bg-white border-gray-200"
                    }`}>
                      {i < ACTIVE ? (
                        <CheckIcon />
                      ) : i === ACTIVE ? (
                        <span className="w-2 h-2 rounded-full bg-blue-600 block" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-200 block" />
                      )}
                    </div>
                    <span className={`text-[10px] mt-0.5 font-medium ${
                      i === ACTIVE ? "text-gray-900" : i < ACTIVE ? "text-gray-500" : "text-gray-300"
                    }`}>{step}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px mx-0.5 ${i < ACTIVE ? "bg-blue-600" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Stage cards */}
            <div className="grid grid-cols-5 gap-1.5 flex-1 min-h-0">
              {STAGE_CARDS.map((card, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-2 flex flex-col overflow-hidden ${
                    card.active
                      ? "bg-white border-2 border-blue-500 shadow shadow-blue-50"
                      : "bg-white/80 border border-gray-100"
                  }`}
                >
                  <p className="text-[10px] font-semibold text-gray-700 leading-tight mb-1">{card.title}</p>
                  <span className={`self-start text-[9px] font-semibold px-1.5 py-0.5 rounded-full mb-1.5 ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                  <div className="space-y-1 flex-1">
                    {card.rows.map(([label, val], j) => (
                      <div key={j}>
                        <p className="text-[9px] text-gray-400 leading-none">{label}</p>
                        <p className={`text-[10px] font-medium leading-tight ${
                          val.startsWith("●") ? "text-green-600" :
                          val.startsWith("⬤") ? "text-orange-500" :
                          "text-gray-800"
                        }`}>{val.replace(/^[●⬤]\s*/,"").trimStart()
                          .split("").map((c,k) => {
                            if (val.startsWith("●")) return k === 0
                              ? <span key={k} className="inline-flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block mr-0.5"/></span>
                              : c;
                            if (val.startsWith("⬤")) return k === 0
                              ? <span key={k}><span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block mr-0.5"/></span>
                              : c;
                            return c;
                          })}
                          {/* cleaner render below */}
                        </p>
                        {/* re-render cleanly */}
                      </div>
                    ))}
                  </div>
                  {card.active && <UptimeSparkline />}
                  {!card.active && card.icon && (
                    <div className={`mt-1.5 self-center w-7 h-7 rounded-full ${card.iconBg} flex items-center justify-center`}>
                      {card.icon}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-1.5">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white rounded-xl px-2.5 py-2 flex items-end justify-between border border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-400">{s.label}</p>
                    <p className="text-sm font-bold text-gray-900 leading-tight">{s.value}</p>
                    <p className={`text-[10px] font-semibold ${s.up ? "text-green-600" : "text-red-500"}`}>
                      {s.up ? "↑" : "↓"} {s.change}
                    </p>
                    <p className="text-[9px] text-gray-400">vs last 30 days</p>
                  </div>
                  <MiniChart color={s.color} data={s.data} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Text label at bottom */}
      <div className="pl-1">
        <h3 className="text-2xl font-[f2]">Lifecycle Management</h3>
        <p className="text-[15px] text-neutral-500 mt-1">
          Qualify, order, manage, support and bill services from one connected portal —
          with full visibility across the customer journey.
        </p>
      </div>
    </div>
  );
}