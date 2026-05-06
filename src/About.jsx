import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-30 gap-10">
      <h3 className="text-5xl  font-[f3]">About Us</h3>
      <div className="flex h-100 w-200 gap-10 ">
        <div className="h-full flex-1 rounded-lg bg-[#f5f8fc]/90 backdrop-blur-2xl border-white border-[1px] shadow-border  p-2 cursor-default relative">
        <img className="h-full w-full object-cover shadow-border rounded-lg" src="https://media.licdn.com/dms/image/v2/D5603AQGyTvTF2NuB3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696392280347?e=1778716800&v=beta&t=qeR8CY5SmOuaqWibS5QazY42jqnvDDHiw2GwuSAN0Jo"></img>
        <div className="absolute -bottom-10 left-0">
            <h3 className="text-xl text-neutral-900 font-[f3]">Piers Tyler - Founder</h3>
            {/* <p className="text-lg text-neutral-600 font-[f2]">Founder</p> */}
        </div>
        </div>

         <div className="h-full flex-1 rounded-lg bg-[#f5f8fc]/50 backdrop-blur-2xl border-white border-[1px] shadow-border  p-2 cursor-default relative">
        <img className="h-full w-full object-cover shadow-border rounded-lg" src="https://media.licdn.com/dms/image/v2/D5603AQEQa-Xh-4jNsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682317140370?e=1778716800&v=beta&t=fVwrkiE2zQeD5D_Ck6vkayNMv9Ko3cWvfTtxepjx16A"></img>
         <div className="absolute -bottom-10 left-0">
            <h3 className="text-xl text-neutral-900 font-[f3]">Stuart Wallis - Founder</h3>
            {/* <p className="text-lg text-neutral-600 font-[f2]">Founder</p> */}
        </div>
        </div>

      </div>
      <p className="max-w-4xl text-center mt-10 font-[f2] text-lg leading-relaxed text-neutral-700">Virtualplatform aims to become Australia’s most loved ICT platform for MSPs, starting with a strong focus on wholesale aggregation for small to medium service providers. Built from real-world challenges faced in scaling an MSP, the platform has evolved into a powerful, API-driven engine that streamlines procurement, service monitoring, integrations, notifications, and rebilling. As it grows, the architecture is designed to expand into a full-featured marketplace, enabling larger MSPs and system integrators to operate with a flexible “bring your own supplier” model. Officially launched as a standalone business in 2023, Virtualplatform is focused on helping service providers scale efficiently and deliver greater value to their customers.</p>
    </div>
  );
};

export default About;
