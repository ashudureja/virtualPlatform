import React from 'react'
import { motion } from 'motion/react'
import {
  Wifi,
  Phone,
  Shield,
  Server,
  Globe,
  Lock,
  Database,
  LayoutGrid,
  Smartphone,
} from 'lucide-react'
import Volume3Apple from './Icons/VolumeIcon'
import WifiApple from './Icons/WifiIcon'
import LockApple from './Icons/Lock'
import SignalApple from './Icons/Network'
import LayoutDashboardApple from './Icons/Layout'
import SendApple from './Icons/Send'
import LoaderPinwheelApple from './Icons/Loader'

const ICON_PROPS = { size: 22, color: '#ffffff', strokeWidth: 1.5 }

const products = [
  {
    icon: <WifiApple/>,
    name: 'Connectivity',
    desc: 'NBN, Telstra, AAPT internet connections for any business size',
    tag: 'Most popular',
  },
  {
    icon: <Volume3Apple/>,
    name: 'Voice & Phone',
    desc: 'SIP trunks, Microsoft Teams calling, 13/1300/1800 inbound numbers',
  },
  {
    icon: <LoaderPinwheelApple/>,
    name: 'Backup',
    desc: 'Automated data protection — restore anything, any time',
  },
  {
    icon: <Server {...ICON_PROPS} />,
    name: 'Compute',
    desc: 'Cloud servers and virtual machines — no physical hardware needed',
  },
  {
    icon: <SendApple/>,
    name: 'Domain & Hosting',
    desc: 'Register and host client websites from the same platform',
  },
  {
    icon: <LockApple/>,
    name: 'SSL Certificates',
    desc: 'Automatic security certificates — keep every client site secure',
  },
  {
    icon: <Database {...ICON_PROPS} />,
    name: 'Object Storage',
    desc: 'Scalable cloud file storage — pay only for what you use',
  },
  {
    icon: <LayoutDashboardApple/>,
    name: 'Microsoft 365',
    desc: 'Full M365 licensing — Word, Excel, Teams, Outlook for every client',
  },
  {
    icon: <SignalApple/>,
    name: '4G Data & SMS',
    desc: 'Mobile data SIMs and bulk SMS for automated client communications',
  },
]

const Coreproducts = () => {
  return (
    <section className="sm:py-30 py-14 px-6 relative z-2 font-[f2] relative bg-[#eef0f1] shadow-border border-b-[1px] border-b-neutral-50" >
   
  {/* Diagonal Stripes Background */}
 <div
  class="absolute inset-0 
         bg-[url('https://framerusercontent.com/images/T0EZLzlgiOzMT5sU8Z7JzSPLRA.svg?width=8&height=8')] 
         bg-repeat bg-center border-0 
         bg-[length:9px_auto]">
</div>
     {/* Your Content/Components */}

      <div className="max-w-5xl mx-auto relative z-2 ">
      

         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-4 font-[f3] text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
              Core Products
          </h2>

          <p
            className="mx-auto max-w-lg text-base leading-relaxed sm:text-lg lg:text-xl"
            style={{ color: "#8a8a9a" }}
          >
             We are dedicated to providing best-of-breed ICT products and services with deep API support. Virtualplatform is product- and supplier -agile and wholesale-only.
          </p>
        </motion.div>

       <div className="grid md:grid-cols-3 gap-3">
  {products.map((product, i) => (

    <div
          
            className="bg-white shadow-border rounded-2xl p-5 flex flex-col justify-between"
            style={{ minHeight: "260px" }}
          >
            {/* Top: number + image placeholder */}
            <div className="bg-black rounded-sm shadow-brand  h-8 w-8 flex items-center justify-center text-sm mb-4">{product.icon}</div>
            <div className="flex-1">
              
              {/* empty space where image would go */}
              <div className="flex-1" style={{ minHeight: "100px" }} />
            </div>
            {/* Bottom: text */}
            <div className="mt-4">
              <h3 className="text-black  text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm leading-snug">
                {product.desc}
              </p>
            </div>
          </div>
   
  ))}
</div>
      </div>
    </section>
  )
}

export default Coreproducts