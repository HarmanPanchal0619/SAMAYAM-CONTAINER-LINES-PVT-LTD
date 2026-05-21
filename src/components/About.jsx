"use client"

import { ArrowUpRight, Globe, Handshake } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f5f3] py-12 lg:py-20"
    >

      {/* ONLY ALIGNMENT FIX: match header/hero container */}
      <div className="relative max-w-[1400px] mx-auto px-5 xl:px-2">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[54px] md:text-[100px] lg:text-[135px] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[#c9d3d5]">
            ABOUT US
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* Left */}
          <div className="relative">

            <div className="overflow-hidden h-[360px] md:h-[720px]">
              <img
                src="/hero-wide-bg.png"
                alt="SAMAYAM Container Lines"
                className="w-[85%] h-[80%] object-cover"
              />
            </div>

            {/* Floating Card (UNCHANGED UI, only position stability kept) */}
            <div className="absolute bottom-2 left-1/2 w-[92%] max-w-[95%] -translate-x-1/2 sm:bottom-6 md:bottom-14 md:left-40 lg:left-20 md:w-auto md:max-w-[85%] md:translate-x-0">

              <div className="relative overflow-hidden backdrop-blur-lg bg-white/85 shadow-[0_20px_80px_rgba(0,0,0,0.16)]">

                <div className="relative p-3 sm:p-5 md:p-8">

                  <div className="flex items-start justify-between gap-3 sm:gap-6 md:gap-10">

                    <div className="flex-1">

                      <p className="text-[9px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-black">
                        Experience
                      </p>

                      <div className="mt-1 sm:mt-3 flex items-end gap-1">
                        <h3 className="text-[34px] leading-none tracking-[-0.06em] font-semibold text-black sm:text-[52px] md:text-[64px]">
                          27
                        </h3>

                        <span className="text-[18px] font-medium text-[#B38728] mb-1 sm:text-[24px] md:text-[30px] md:mb-2">
                          +
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] leading-4 text-black sm:text-[13px] md:text-[15px] md:leading-6 max-w-[210px] sm:max-w-[300px]">
                        Years in global logistics & freight forwarding
                      </p>
                    </div>

                    <div className="shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E2C] text-white shadow-lg sm:h-11 sm:w-11 md:h-12 md:w-12">
                        <ArrowUpRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                      </div>
                    </div>

                  </div>

                  <div className="my-3 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent md:my-5" />

                  <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">

                    <div className="flex gap-2">
                      <Globe className="h-5 w-5 shrink-0 text-[#1F5E2C] sm:h-8 sm:w-8 md:h-10 md:w-10" />
                      <div>
                        <h4 className="text-[14px] font-semibold tracking-[-0.04em] text-[#1F5E2C] sm:text-[18px] md:text-[24px]">
                          Global
                        </h4>
                        <p className="mt-1 text-[10px] leading-4 text-black sm:text-[13px] md:mt-2 md:text-[14px] md:leading-6">
                          Worldwide freight support
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Handshake className="h-5 w-5 shrink-0 text-[#1F5E2C] sm:h-8 sm:w-8 md:h-10 md:w-10" />
                      <div>
                        <h4 className="text-[14px] font-semibold tracking-[-0.04em] text-[#1F5E2C] sm:text-[18px] md:text-[24px]">
                          End-to-End
                        </h4>
                        <p className="mt-1 text-[10px] leading-4 text-black sm:text-[13px] md:mt-2 md:text-[14px] md:leading-6">
                          Logistics solutions
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right (unchanged) */}
          <div className="max-w-[620px]">

            <p className="text-sm uppercase tracking-[0.35em] text-[#7b8487]">
              Global Freight Experts
            </p>

            <h3 className="mt-6 text-[42px] md:text-[62px] leading-[1] tracking-[-0.05em] font-medium text-[#111827]">
              Reliable logistics solutions tailored for global trade.
            </h3>

            <p className="mt-10 text-[18px] leading-9 text-[#6b7280]">
              SAMAYAM Container Lines Pvt Ltd is a Chennai-based international freight forwarding and logistics company specializing in ocean freight, NVOCC operations, customs clearance, warehousing, transportation, and integrated cargo solutions.
            </p>

            <p className="mt-6 text-[18px] leading-9 text-[#6b7280]">
              With more than 27 years of industry expertise, we provide dependable and cost-effective logistics services supported by strong global partnerships, ethical business practices, and professional execution.
            </p>

            <div className="mt-14">
              <a
                href="#services"
                className="inline-flex items-center gap-4 text-[18px] font-medium text-[#1F5E2C] group"
              >
                Explore Our Services

                <span className="w-12 h-12 rounded-full bg-[#1F5E2C] text-white flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5" />
                </span>

              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}








// "use client"

// import { ArrowUpRight, Globe, Handshake} from "lucide-react"

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#f7f7f5] py-12 lg:py-20"
//     >
//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="mb-10">
//           <h2 className="text-[54px] md:text-[100px] lg:text-[135px] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[#c9d3d5]">
//             ABOUT US
//           </h2>
//         </div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
//           {/* Left */}
//           <div className="relative">
//             <div className="overflow-hidden h-[360px] md:h-[720px]">
//               <img
//                 src="/hero-wide-bg.png"
//                 alt="SAMAYAM Container Lines"
//                 className="w-[85%] h-[80%] object-cover"
//               />
//             </div>

//             {/* Enhanced Floating Stats Card */}
//             <div className="absolute bottom-2 left-1/2 w-[92%] max-w-[95%] -translate-x-1/2 sm:bottom-6 md:bottom-14 md:left-40 lg:left-20 md:w-auto md:max-w-[85%] md:translate-x-0">
//               <div className="relative overflow-hidden backdrop-blur-lg bg-white/85 shadow-[0_20px_80px_rgba(0,0,0,0.16)]">
                
//                 {/* Reduced padding on small mobiles */}
//                 <div className="relative p-3 sm:p-5 md:p-8">

//                   {/* Top */}
//                   <div className="flex items-start justify-between gap-3 sm:gap-6 md:gap-10">

//                     {/* Left */}
//                     <div className="flex-1">
//                       <p className="text-[9px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-black">
//                         Experience
//                       </p>

//                       <div className="mt-1 sm:mt-3 flex items-end gap-1">
//                         <h3 className="text-[34px] leading-none tracking-[-0.06em] font-semibold text-black sm:text-[52px] md:text-[64px]">
//                           27
//                         </h3>

//                         <span className="text-[18px] font-medium text-[#B38728] mb-1 sm:text-[24px] md:text-[30px] md:mb-2">
//                           +
//                         </span>
//                       </div>

//                       <p className="mt-1 text-[11px] leading-4 text-black sm:text-[13px] md:text-[15px] md:leading-6 max-w-[210px] sm:max-w-[300px]">
//                         Years in global logistics & freight forwarding
//                       </p>
//                     </div>

//                     {/* Badge */}
//                     <div className="shrink-0">
//                       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E2C] text-white shadow-lg sm:h-11 sm:w-11 md:h-12 md:w-12">
//                         <ArrowUpRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Divider */}
//                   <div className="my-3 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent md:my-5" />

//                   {/* Bottom Grid */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">

//                     {/* Item 1 */}
//                     <div className="flex gap-2">
//                       <Globe className="h-5 w-5 shrink-0 text-[#1F5E2C] sm:h-8 sm:w-8 md:h-10 md:w-10" />

//                       <div>
//                         <h4 className="text-[14px] font-semibold tracking-[-0.04em] text-[#1F5E2C] sm:text-[18px] md:text-[24px]">
//                           Global
//                         </h4>

//                         <p className="mt-1 text-[10px] leading-4 text-black sm:text-[13px] md:mt-2 md:text-[14px] md:leading-6">
//                           Worldwide freight support
//                         </p>
//                       </div>
//                     </div>

//                     {/* Item 2 */}
//                     <div className="flex gap-2">
//                       <Handshake className="h-5 w-5 shrink-0 text-[#1F5E2C] sm:h-8 sm:w-8 md:h-10 md:w-10" />

//                       <div>
//                         <h4 className="text-[14px] font-semibold tracking-[-0.04em] text-[#1F5E2C] sm:text-[18px] md:text-[24px]">
//                           End-to-End
//                         </h4>

//                         <p className="mt-1 text-[10px] leading-4 text-black sm:text-[13px] md:mt-2 md:text-[14px] md:leading-6">
//                           Logistics solutions
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="max-w-[620px]">
//             <p className="text-sm uppercase tracking-[0.35em] text-[#7b8487]">
//               Global Freight Experts
//             </p>

//             <h3 className="mt-6 text-[42px] md:text-[62px] leading-[1] tracking-[-0.05em] font-medium text-[#111827]">
//               Reliable logistics solutions tailored for global trade.
//             </h3>

//             <p className="mt-10 text-[18px] leading-9 text-[#6b7280]">
//               SAMAYAM Container Lines Pvt Ltd is a Chennai-based
//               international freight forwarding and logistics company
//               specializing in ocean freight, NVOCC operations,
//               customs clearance, warehousing, transportation,
//               and integrated cargo solutions.
//             </p>

//             <p className="mt-6 text-[18px] leading-9 text-[#6b7280]">
//               With more than 27 years of industry expertise,
//               we provide dependable and cost-effective logistics
//               services supported by strong global partnerships,
//               ethical business practices, and professional execution.
//             </p>

//             {/* CTA */}
//             <div className="mt-14">
//               <a
//                 href="#services"
//                 className="inline-flex items-center gap-4 text-[18px] font-medium text-[#1F5E2C] group"
//               >
//                 Explore Our Services

//                 <span className="w-12 h-12 rounded-full bg-[#1F5E2C] text-white flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
//                   <ArrowUpRight className="w-5 h-5" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }






// "use client"

// import { ArrowUpRight, Globe, Handshake} from "lucide-react"

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#f7f7f5] py-12 lg:py-20"
//     >
//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="mb-10">
//           <h2 className="text-[54px] md:text-[100px] lg:text-[135px] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[#c9d3d5]">
//             ABOUT US
//           </h2>
//         </div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
//           {/* Left */}
//           <div className="relative">
//             <div className="overflow-hidden h-[420px] md:h-[720px]">
//               <img
//                 src="/hero-wide-bg.png"
//                 alt="SAMAYAM Container Lines"
//                 className="w-[85%] h-[70%] md:h-[80%] object-cover"
//               />
//             </div>

//             {/* Minimal Floating Card */}
//             {/* Enhanced Floating Stats Card */}
//             <div className="absolute bottom-3 left-15 md:left-20 md:bottom-10 max-w-[280px] md:max-w-[620px] lg:bottom-14 lg:max-w-[85%]">
//               <div className="relative overflow-hidden bg-white/80 backdrop-blur-lg shadow-[0_25px_100px_rgba(0,0,0,0.18)]">
//                 {/* Reduced Mobile Padding */}
//                 <div className="relative p-4 sm:p-6 md:p-8">
//                   {/* Top */}
//                   <div className="flex items-start justify-between gap-0 sm:gap-6 md:gap-10">
//                     {/* Left */}
//                     <div>
//                       <p className="text-[9px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.32em] text-black">
//                         Experience
//                       </p>
//                       {/* Reduced Number Size */}
//                       <div className="mt-1 sm:mt-3 flex items-end gap-1">
//                         <h3 className="text-[26px] sm:text-[54px] md:text-[64px] leading-none tracking-[-0.06em] font-semibold text-black">
//                           27
//                         </h3>
//                         <span className="mb-1 text-[18px] sm:text-[26px] md:text-[30px] font-medium text-[#B38728]">
//                           +
//                         </span>
//                       </div>

//                       {/* Reduced Text Spacing */}
//                       <p className="mt-1 max-w-[220px] text-[12px] sm:text-[15px] leading-4 sm:leading-relaxed text-black">
//                         Years in global logistics & freight forwarding
//                       </p>
//                     </div>

//                     {/* Badge */}
//                     <div className="shrink-0">
//                       <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1F5E2C] text-white shadow-lg">
//                         <ArrowUpRight className="h-3 w-3 sm:h-7 sm:w-7" />
//                       </div>
//                     </div>

//                   </div>

//                   {/* Divider */}
//                   <div className="my-2 sm:my-5 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

//                   {/* Bottom Grid */}
//                   <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">

//                     {/* Item 1 */}
//                     <div className="grid grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr] items-start gap-2 sm:gap-3">

//                       <div>
//                         <Globe className="h-5 w-5 sm:h-10 sm:w-10 text-[#1F5E2C]" />
//                       </div>

//                       <div>
//                         <h4 className="text-[15px] sm:text-[24px] font-semibold tracking-[-0.04em] text-[#1F5E2C]">
//                           Global
//                         </h4>

//                         <p className="mt-1 text-[11px] sm:text-[14px] leading-4 sm:leading-6 text-black">
//                           Worldwide freight network support
//                         </p>
//                       </div>
//                     </div>

//                     {/* Item 2 */}
//                     <div className="grid grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr] items-start gap-2 sm:gap-3">

//                       <div>
//                         <Handshake className="h-5 w-5 sm:h-10 sm:w-10 text-[#1F5E2C]" />
//                       </div>

//                       <div>
//                         <h4 className="text-[15px] sm:text-[24px] font-semibold tracking-[-0.04em] text-[#1F5E2C]">
//                           End-to-End
//                         </h4>

//                         <p className="mt-1 text-[11px] sm:text-[14px] leading-4 sm:leading-6 text-black">
//                           Logistics & supply chain solutions
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="max-w-[620px]">
//             <p className="text-sm uppercase tracking-[0.35em] text-[#7b8487]">
//               Global Freight Experts
//             </p>

//             <h3 className="mt-6 text-[42px] md:text-[62px] leading-[1] tracking-[-0.05em] font-medium text-[#111827]">
//               Reliable logistics solutions tailored for global trade.
//             </h3>

//             <p className="mt-10 text-[18px] leading-9 text-[#6b7280]">
//               SAMAYAM Container Lines Pvt Ltd is a Chennai-based
//               international freight forwarding and logistics company
//               specializing in ocean freight, NVOCC operations,
//               customs clearance, warehousing, transportation,
//               and integrated cargo solutions.
//             </p>

//             <p className="mt-6 text-[18px] leading-9 text-[#6b7280]">
//               With more than 27 years of industry expertise,
//               we provide dependable and cost-effective logistics
//               services supported by strong global partnerships,
//               ethical business practices, and professional execution.
//             </p>

//             {/* CTA */}
//             <div className="mt-14">
//               <a
//                 href="#services"
//                 className="inline-flex items-center gap-4 text-[18px] font-medium text-[#1F5E2C] group"
//               >
//                 Explore Our Services

//                 <span className="w-12 h-12 rounded-full bg-[#1F5E2C] text-white flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
//                   <ArrowUpRight className="w-5 h-5" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }









// "use client"

// import { ArrowUpRight } from "lucide-react"

// export default function About() {
//   return (
//     <section className="relative overflow-hidden bg-[#f5f5f3] py-24 lg:py-32">
//       {/* Background Accent */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1200c8]/5 blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="mb-20">
//           <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#7b8487]">
//             About Company
//           </p>

//           <h2 className="text-[54px] md:text-[100px] lg:text-[135px] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[#c9d3d5]">
//             ABOUT US
//           </h2>
//         </div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-[1fr_0.95fr] gap-14 items-center">
//           {/* Left Images */}
//           <div className="relative">
//             {/* Main Image */}
//             <div className="overflow-hidden rounded-[36px]">
//               <img
//                 src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1800&auto=format&fit=crop"
//                 alt="Logistics"
//                 className="w-full h-[700px] object-cover"
//               />
//             </div>

//             {/* Floating Card */}
//             <div className="absolute bottom-8 left-8 md:left-10 bg-white/90 backdrop-blur-xl rounded-[28px] p-7 shadow-2xl max-w-[280px]">
//               <p className="text-sm uppercase tracking-[0.28em] text-[#7b8487] mb-3">
//                 Global Logistics
//               </p>

//               <h3 className="text-[28px] leading-[1.1] font-medium text-[#111827]">
//                 Trusted shipping solutions worldwide
//               </h3>

//               <div className="mt-6 flex items-center gap-4">
//                 <div>
//                   <h4 className="text-[42px] font-semibold text-[#1200c8]">
//                     20+
//                   </h4>

//                   <p className="text-[15px] text-[#6b7280]">
//                     Years Experience
//                   </p>
//                 </div>

//                 <div className="w-px h-14 bg-[#d7dfe0]" />

//                 <div>
//                   <h4 className="text-[42px] font-semibold text-[#1200c8]">
//                     120+
//                   </h4>

//                   <p className="text-[15px] text-[#6b7280]">
//                     Global Partners
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div>
//             <p className="text-sm uppercase tracking-[0.35em] text-[#7b8487] mb-6">
//               Smart Freight Solutions
//             </p>

//             <h3 className="text-[44px] md:text-[68px] leading-[0.95] tracking-[-0.04em] font-medium text-[#111827]">
//               Delivering reliable logistics solutions with global expertise.
//             </h3>

//             <p className="mt-8 text-[18px] md:text-[20px] leading-9 text-[#6b7280] max-w-[620px]">
//               We provide professional freight forwarding, cargo handling,
//               transportation, warehousing, and global shipping solutions
//               designed to simplify supply chain operations for businesses across
//               international markets.
//             </p>

//             {/* Features */}
//             <div className="mt-12 grid sm:grid-cols-2 gap-6">
//               {[
//                 "International Freight Solutions",
//                 "Secure Cargo Handling",
//                 "Fast Customs Clearance",
//                 "Reliable Transportation",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="group rounded-[26px] border border-[#d7dfe0] bg-white/60 backdrop-blur-xl p-6 transition-all duration-500 hover:border-[#1200c8]"
//                 >
//                   <div className="flex items-start justify-between gap-5">
//                     <h4 className="text-[22px] leading-[1.3] font-medium text-[#111827]">
//                       {item}
//                     </h4>

//                     <div className="w-11 h-11 rounded-full bg-[#f1f3f4] flex items-center justify-center transition duration-500 group-hover:bg-[#1200c8] group-hover:text-white">
//                       <ArrowUpRight className="w-5 h-5" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom CTA */}
//             <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6">
//               <button className="group h-20 px-10 rounded-full bg-[#1200c8] text-white text-[20px] font-medium flex items-center justify-center gap-4 transition-all duration-500 hover:bg-black">
//                 Explore Services

//                 <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
//               </button>

//               <div>
//                 <h4 className="text-[34px] font-semibold text-[#111827]">
//                   10K+
//                 </h4>

//                 <p className="text-[17px] text-[#6b7280]">
//                   Successful Shipments
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }