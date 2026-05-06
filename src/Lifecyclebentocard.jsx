import React from "react";

/* ── tiny SVG helpers ─────────────────────────────────────────────────── */
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-3 w-3"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const MiniChart = ({ color = "#6366f1", data }) => {
  const pts = data || [30, 45, 35, 55, 40, 60, 50, 65, 55, 70];
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const range = max - min || 1;
  const W = 56;
  const H = 24;

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
    <svg viewBox={`0 0 ${W} ${H}`} className="h-6 w-14">
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

const UptimeSparkline = () => {
  const pts = [40, 55, 45, 60, 50, 65, 58, 70, 62, 75, 68, 80];
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const range = max - min || 1;
  const W = 100;
  const H = 36;

  const coords = pts.map((v, i) => [
    (i / (pts.length - 1)) * W,
    H - ((v - min) / range) * H * 0.75 - H * 0.1,
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
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-1 h-9 w-full">
      <defs>
        <linearGradient id="lcg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={areaPath} fill="url(#lcg)" />

      <path
        d={linePath}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* ── constants ────────────────────────────────────────────────────────── */
const STEPS = ["Qualify", "Order", "Manage", "Support", "Bill"];
const ACTIVE = 2;

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
      <svg
        className="h-4 w-4 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
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
      ["Submitted", "14 May 2024"],
      ["Channel", "Partner Portal"],
    ],
    icon: (
      <svg
        className="h-4 w-4 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
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
      ["Activated", "16 May 2024"],
      ["Uptime", "99.98%"],
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
      ["Updated", "20 May 2024"],
    ],
    icon: (
      <svg
        className="h-4 w-4 text-orange-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
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
      <svg
        className="h-4 w-4 text-purple-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
        />
      </svg>
    ),
    iconBg: "bg-purple-50",
    active: false,
  },
];

const STATS = [
  {
    label: "Services",
    value: "128",
    change: "+12%",
    up: true,
    color: "#6366f1",
    data: [30, 45, 35, 55, 40, 60, 50, 65, 55, 70],
  },
  {
    label: "Active Services",
    value: "112",
    change: "+8%",
    up: true,
    color: "#6366f1",
    data: [40, 50, 45, 60, 55, 65, 58, 70, 62, 75],
  },
  {
    label: "Open Tickets",
    value: "7",
    change: "−22%",
    up: false,
    color: "#f97316",
    data: [70, 65, 60, 55, 65, 50, 45, 55, 48, 40],
  },
  {
    label: "MRR",
    value: "€9,842",
    change: "+14%",
    up: true,
    color: "#a855f7",
    data: [30, 40, 35, 50, 45, 60, 55, 65, 60, 70],
  },
];

/* ── Clean value render ──────────────────────────────────────────────── */
const RowValue = ({ value }) => {
  if (value.startsWith("●")) {
    return (
      <span className="inline-flex items-center gap-1 text-green-600">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        {value.replace("●", "").trim()}
      </span>
    );
  }

  if (value.startsWith("⬤")) {
    return (
      <span className="inline-flex items-center gap-1 text-orange-500">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        {value.replace("⬤", "").trim()}
      </span>
    );
  }

  return <span>{value}</span>;
};

/* ── Mobile stepper card ─────────────────────────────────────────────── */
function MobileStepCard() {
  const steps = [
    {
      n: 1,
      label: "Qualify",
      sub: "Service eligibility confirmed",
      done: true,
      active: false,
    },
    {
      n: 2,
      label: "Order",
      sub: "Order submitted",
      done: true,
      active: false,
    },
    {
      n: 3,
      label: "Manage",
      sub: "Service is active",
      done: false,
      active: true,
    },
    {
      n: 4,
      label: "Support",
      sub: "No open tickets",
      done: false,
      active: false,
    },
    {
      n: 5,
      label: "Bill",
      sub: "Next invoice in 12 days",
      done: false,
      active: false,
    },
  ];

  return (
    <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-md">
      <div className="absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl bg-gradient-to-t from-blue-50 to-transparent" />

      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold leading-tight text-gray-800">
          Business Internet 500
        </span>

        <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Active
        </span>
      </div>

      <p className="mb-0 text-[10px] text-gray-400">Customer</p>
      <p className="mb-3 text-xs font-semibold text-gray-800">Acme Corp.</p>

      <div className="relative z-10 flex-1 space-y-1">
        {steps.map((s) => (
          <div
            key={s.n}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
              s.active ? "bg-blue-50" : ""
            }`}
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                s.done || s.active
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {s.done ? <CheckIcon /> : s.n}
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold leading-none text-gray-800">
                {s.label}
              </p>
              <p className="truncate text-[10px] text-gray-400">{s.sub}</p>
            </div>

            {!s.done && !s.active && (
              <span className="h-4 w-4 shrink-0 rounded-full border-2 border-gray-200" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-3 flex items-end justify-between border-t border-gray-100 pt-3">
        <div>
          <p className="text-[10px] text-gray-400">Plan</p>
          <p className="text-[11px] font-semibold leading-tight text-gray-800">
            Business Internet 500
          </p>
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

/* ── Main exported card ──────────────────────────────────────────────── */
export default function LifecycleBentoCard() {
  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-hidden bg-gradient-to-l from-white via-blue-500 to-white p-3 font-[f2] sm:p-4">
      {/* Top dashboard area */}
      <div className="flex min-h-0 flex-1 flex-col gap-3 lg:flex-row">
        {/* Mobile step card */}
        <div className="w-full shrink-0 lg:w-44">
          <MobileStepCard />
        </div>

        {/* Dashboard panel */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-gray-50">
          {/* Mini top-bar */}
          <div className="flex items-center gap-2 overflow-x-auto rounded-t-2xl border-b border-gray-100 bg-white px-3 py-2">
            <div className="h-3.5 w-3.5 shrink-0 rotate-45 rounded bg-blue-600" />

            <span className="shrink-0 text-[11px] font-bold text-gray-800">
              Virtualplatform
            </span>

            <div className="ml-3 flex shrink-0 gap-2.5">
              {[
                "Dashboard",
                "Services",
                "Customers",
                "Billing",
                "Support",
                "Reports",
              ].map((n) => (
                <span
                  key={n}
                  className={`text-[10px] font-medium ${
                    n === "Services"
                      ? "border-b border-blue-600 pb-px text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-3">
            {/* Section header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold leading-none text-gray-900">
                  Service Lifecycle
                </p>
                <p className="text-[10px] text-gray-400">
                  End-to-end view of the customer journey
                </p>
              </div>

              <div className="flex w-fit items-center gap-1.5 rounded-lg border border-gray-200 px-2 py-1">
                <span className="text-[10px] font-medium text-gray-600">
                  Acme Corp.
                </span>
                <svg
                  className="h-2.5 w-2.5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Progress timeline */}
            <div className="overflow-x-auto pb-1">
              <div className="flex min-w-[520px] items-center px-1">
                {STEPS.map((step, i) => (
                  <div key={step} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                          i < ACTIVE
                            ? "border-blue-600 bg-blue-600 text-white"
                            : i === ACTIVE
                            ? "border-blue-600 bg-white shadow shadow-blue-100"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {i < ACTIVE ? (
                          <CheckIcon />
                        ) : i === ACTIVE ? (
                          <span className="block h-2 w-2 rounded-full bg-blue-600" />
                        ) : (
                          <span className="block h-1.5 w-1.5 rounded-full bg-gray-200" />
                        )}
                      </div>

                      <span
                        className={`mt-0.5 text-[10px] font-medium ${
                          i === ACTIVE
                            ? "text-gray-900"
                            : i < ACTIVE
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      >
                        {step}
                      </span>
                    </div>

                    {i < STEPS.length - 1 && (
                      <div
                        className={`mx-0.5 h-px flex-1 ${
                          i < ACTIVE ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stage cards */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
              {STAGE_CARDS.map((card, i) => (
                <div
                  key={i}
                  className={`flex min-h-[150px] flex-col overflow-hidden rounded-xl p-2 ${
                    card.active
                      ? "border-2 border-blue-500 bg-white shadow shadow-blue-50"
                      : "border border-gray-100 bg-white/80"
                  }`}
                >
                  <p className="mb-1 text-[10px] font-semibold leading-tight text-gray-700">
                    {card.title}
                  </p>

                  <span
                    className={`mb-1.5 self-start rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>

                  <div className="flex-1 space-y-1">
                    {card.rows.map(([label, val], j) => (
                      <div key={j}>
                        <p className="text-[9px] leading-none text-gray-400">
                          {label}
                        </p>

                        <p className="text-[10px] font-medium leading-tight text-gray-800">
                          <RowValue value={val} />
                        </p>
                      </div>
                    ))}
                  </div>

                  {card.active && <UptimeSparkline />}

                  {!card.active && card.icon && (
                    <div
                      className={`mt-1.5 flex h-7 w-7 items-center justify-center self-center rounded-full ${card.iconBg}`}
                    >
                      {card.icon}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-end justify-between rounded-xl border border-gray-100 bg-white px-2.5 py-2"
                >
                  <div>
                    <p className="text-[10px] text-gray-400">{s.label}</p>
                    <p className="text-sm font-bold leading-tight text-gray-900">
                      {s.value}
                    </p>

                    <p
                      className={`text-[10px] font-semibold ${
                        s.up ? "text-green-600" : "text-red-500"
                      }`}
                    >
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
      <div className="shrink-0 px-1">
        <h3 className="font-[f2] text-xl sm:text-2xl">
          Lifecycle Management
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
          Qualify, order, manage, support and bill services from one connected
          portal — with full visibility across the customer journey.
        </p>
      </div>
    </div>
  );
}