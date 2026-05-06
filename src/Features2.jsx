import { motion } from "framer-motion";
import { AnimatedList } from "./components/ui/animated-list";
import { cn } from "./animated-beam-demo";
import {
  FiSearch,
  FiShoppingCart,
  FiSettings,
  FiCreditCard,
  FiRefreshCw,
} from "react-icons/fi";

import { MdSupportAgent } from "react-icons/md";
import { RiSignalWifiLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";

const featureCards = [
  {
    id: "001",
    title: "White Label MSP Portal",
    description:
      "Launch a fully branded MSP portal without building from scratch. Rebrand quickly and go to market faster.",
  },
  {
    id: "002",
    title: "Wholesale Only",
    description:
      "Virtualplatform supports MSPs and resellers without competing directly with their customers.",
  },
  {
    id: "003",
    title: "Automated Porting",
    description:
      "Reduce manual work by automating porting workflows, saving time and lowering operational stress.",
  },
  {
    id: "004",
    title: "Ticket Management",
    description:
      "Create, assign, track and escalate support tickets based on priority and severity.",
  },
];

let notifications = [
  {
    name: "Service Qualified",
    description: "Availability confirmed across carriers",
    time: "2m ago",
    icon: <FiSearch className="text-white" />,
  },
  {
    name: "Order Submitted",
    description: "Business Fibre service created",
    time: "5m ago",
    icon: <FiShoppingCart className="text-white" />,
  },
  {
    name: "Service Activated",
    description: "Customer service is now live",
    time: "8m ago",
    icon: <RiSignalWifiLine className="text-white" />,
  },
  {
    name: "Support Ticket Created",
    description: "Connectivity issue logged",
    time: "12m ago",
    icon: <MdSupportAgent className="text-white" />,
  },
  {
    name: "Invoice Generated",
    description: "Recurring billing processed",
    time: "15m ago",
    icon: <FiCreditCard className="text-white" />,
  },
  {
    name: "API Sync Completed",
    description: "Supplier data updated",
    time: "18m ago",
    icon: <FiRefreshCw className="text-white" />,
  },
  {
    name: "Porting Completed",
    description: "Number successfully transferred",
    time: "22m ago",
    icon: <FiSettings className="text-white" />,
  },
  {
    name: "Secure Access Verified",
    description: "Two-factor authentication successful",
    time: "25m ago",
    icon: <BsShieldCheck className="text-white" />,
  },
];

notifications = Array.from({ length: 30 }, () => notifications).flat();

const Notification = ({ name, description, icon, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-xl bg-white p-2 px-3 shadow-border sm:px-4",
        "pointer-events-none"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-black sm:size-10">
          <span className="text-base sm:text-lg">{icon}</span>
        </div>

        <div className="min-w-0 flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-nowrap font-medium dark:text-white">
            <span className="truncate text-sm sm:text-lg">{name}</span>
            <span className="mx-1 shrink-0">·</span>
            <span className="shrink-0 text-xs text-gray-500">{time}</span>
          </figcaption>

          <p className="truncate text-xs font-normal text-neutral-500 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const PortalIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M8 14h8" />
  </svg>
);

const PartnerIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Features2() {
  return (
    <div className="min-h-screen w-full  px-4 py-14 font-[f2] sm:px-6 sm:py-16 md:px-12 md:py-20 lg:p-20">
      <div className="mx-auto w-full max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-4 font-[f3] text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Built for MSP Growth
          </h2>

          <p
            className="mx-auto max-w-lg text-base leading-relaxed sm:text-lg lg:text-xl"
            style={{ color: "#8a8a9a" }}
          >
            Virtualplatform helps MSPs launch branded portals, manage reseller
            workflows, automate operations and support customers without
            competing in the direct market.
          </p>
        </motion.div>

        {/* TOP FEATURE CARDS */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="flex min-h-[240px] flex-col justify-between rounded-2xl bg-white p-5 shadow-border sm:min-h-[250px] lg:min-h-[260px]"
            >
              <div className="flex-1">
                <p className="mb-4 text-sm text-neutral-400">{card.id}</p>
                <div className="hidden min-h-[100px] flex-1 lg:block" />
              </div>

              <div className="mt-8 lg:mt-4">
                <h3 className="mb-1 text-lg text-black text-shadow-sm">
                  {card.title}
                </h3>

                <p className="text-sm leading-snug text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN LARGE CARD */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="flex min-h-[auto] flex-col justify-between p-5 sm:p-8 lg:min-h-[600px] lg:p-10">
              <div>
                <span className="mb-4 block text-sm text-blue-500 sm:mb-6">
                  Partner-first Platform
                </span>

                <h2 className="mb-5 font-[f3] text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem]">
                  Built for
                  <br />
                  Reseller Scale
                </h2>

                <p className="mb-8 max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Give your customers their own branded portal with individual
                  product, pricing and service control — all backed by
                  Virtualplatform.
                </p>

                <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm text-white shadow-brand transition-colors hover:bg-neutral-700">
                  Explore Partner Tools
                </button>
              </div>

              {/* DARK INNER CARDS */}
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-900 p-5 text-white shadow-brand">
                  <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-700 sm:mb-10">
                    <PortalIcon />
                  </div>

                  <h4 className="mb-2 text-base font-semibold">
                    Multi-Tier Portals
                  </h4>

                  <p className="text-sm leading-snug text-neutral-400">
                    Enable reseller customers to use Virtualplatform as their
                    own fully branded portal with individual product and pricing
                    management.
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-900 p-5 text-white shadow-brand">
                  <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-700 sm:mb-10">
                    <PartnerIcon />
                  </div>

                  <h4 className="mb-2 text-base font-semibold">
                    Partner Protection
                  </h4>

                  <p className="text-sm leading-snug text-neutral-400">
                    A wholesale-only model designed to support MSPs and
                    resellers, not compete with them in the direct market.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE NOTIFICATION CARD */}
            <div className="relative m-3 flex h-[520px] items-center justify-center overflow-hidden rounded-2xl bg-blue-300 p-4 mask-b-from-0.5 sm:m-4 sm:h-[580px] lg:h-[620px]">
              <div className="absolute left-5 right-5 top-5 z-10">
                <span className="text-sm text-neutral-600">005</span>

                <h3 className="mb-1 text-lg text-black text-shadow-sm">
                  Status Notifications
                </h3>

                <p className="text-sm leading-snug text-neutral-700">
                  Keeping your organisation aware. Network outages, service
                  monitoring,
                  <br className="hidden sm:block" />
                  customer order progress, domain expiry warnings and many
                  more.
                </p>
              </div>

              <AnimatedList className="mt-28 h-[330px] overflow-hidden mask-b-from-90% sm:h-[390px] lg:h-100">
                {notifications.map((item, idx) => (
                  <Notification {...item} key={idx} />
                ))}
              </AnimatedList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}