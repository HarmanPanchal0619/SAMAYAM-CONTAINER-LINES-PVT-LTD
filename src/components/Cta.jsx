"use client"

import {
  ArrowRight,
} from "lucide-react"

export default function Cta() {
  return (
    <section className="overflow-hidden bg-[#f6f6f4] flex items-center justify-center text-white">

      {/* Container */}
      <div className=" w-[320px] sm:w-[780px] lg:w-[1024px] xl:w-7xl py-20 px-6">
      <div className="mx-auto">


      {/* Crane */}
      <div className="relative inset-x-0 -top-5 z-30 flex justify-center">
        <div className="relative w-full max-w-7xl">
          {/* Main Beam */}
          <div className="mx-auto h-[4px] w-full bg-black shadow-[0_10px_40px_rgba(255,190,50,0.45)]">
            {/* Beam Details */}
            <div className="top-0 flex items-center justify-center gap-11.5 sm:gap-13 xl:gap-16">
  {[...Array(10)].map((_, i) => (
    <div
      key={i}
      className={`${i >= 6 ? "hidden sm:block" : "block"} h-[4px] w-[6px] bg-white`}
    />
  ))}
</div>
          </div>

          {/* Left Rope */}
          <div className="absolute rotate-60 sm:rotate-74 lg:rotate-76 xl:rotate-76 left-11 sm:left-37 lg:left-53 xl:left-74 -top-6 sm:-top-28 lg:-top-41 xl:-top-60 flex flex-col items-center">
            <div className="h-32 sm:h-84 lg:h-116 xl:h-160 w-[4px] bg-black" />
            <div className="relative flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[3px] border-gray-300 bg-[#040b16] shadow-lg">
              <div className="h-2 w-2 xl:h-3 xl:w-3  rounded-full bg-gray-300" />
            </div>
          </div>

          {/* Middle Box */}
          <div className="flex items-center justify-center">
            <div className="z-100 flex items-center justify-center h-[46px] w-[46px] md:h-[52px] md:w-[52px] xl:h-[64px] xl:w-[64px] rounded-b-full bg-black">
                <div className="h-[36px] w-[36px] md:h-[40px] md:w-[40px] xl:h-[45px] xl:w-[45px] rounded-full bg-white"/>
            </div>
          </div>

          {/* Right Rope */}
          <div className="absolute -rotate-60 sm:-rotate-74 lg:-rotate-76 xl:-rotate-76 right-11 sm:right-37 lg:right-53 xl:right-74 -top-6 sm:-top-28 lg:-top-41 xl:-top-60 flex flex-col items-center">
            <div className="h-32 sm:h-84 lg:h-116 xl:h-160 w-[4px] bg-black" />
            <div className="relative flex h-8 w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full border-[3px] border-gray-300 bg-[#040b16] shadow-lg">
              <div className="h-2 w-2 xl:h-3 xl:w-3 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>



        {/* Container Styled Box */}
        <div className="mt-4 sm:mt-10 lg:mt-14 xl:mt-20 relative overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          {/* Shipping Container Lines */}
          <div className="pointer-events-none absolute inset-0 hidden sm:flex justify-between px-4 md:px-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-full w-[1px] bg-black/[0.04]"
              />
            ))}
          </div>

          {/* Top Bar */}
          <div className="relative flex flex-col gap-4 border-b border-black/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <div className="h-3 w-3 rounded-full bg-black" />
              <div className="h-3 w-3 rounded-full bg-black/50" />
              <div className="h-3 w-3 rounded-full bg-black/20" />
            </div>

            <span className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-black">
              SAMAYAM CONTAINER LINES PVT. LTD.
            </span>

            <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
              Global Freight
            </span>
          </div>

          {/* Content */}
          <div className="relative flex flex-col gap-10 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <p className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-black/40">
                Shipping Container Solutions
              </p>

              <h2 className="text-3xl font-bold font-black leading-tight text-black sm:text-4xl md:text-5xl">
                Fast & Reliable
                <span className="block text-black/40">
                  Global Logistics
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-black/55">
                Modern freight forwarding and container shipping for businesses
                worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex w-full flex-col gap-3 md:gap-4 sm:w-auto sm:flex-row">
              
              <button className="group flex w-full items-center justify-center gap-2 bg-black px-6 py-3 md:py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] sm:w-auto">
                Request Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="w-full border border-black/60 bg-[#fafafa] px-6 py-3 md:py-4 text-sm font-semibold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>

          {/* Bottom Industrial Strip */}
          <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-black/10 px-4 py-3 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/35">
            <span>Ocean Freight</span>
            <span>Air Cargo</span>
            <span>Custom Clearance</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}








// "use client"

// import { ArrowRight } from "lucide-react"

// export default function MinimalContainerCTA() {
//   return (
//     <section className="bg-[#f6f6f4] py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Container Styled Box */}
//         <div className="relative overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
//           {/* Shipping Container Lines */}
//           <div className="pointer-events-none absolute inset-0 flex justify-between px-6">
//             {[...Array(10)].map((_, i) => (
//               <div
//                 key={i}
//                 className="h-full w-[1px] bg-black/[0.04]"
//               />
//             ))}
//           </div>

//           {/* Top Bar */}
//           <div className="relative flex items-center justify-between border-b border-black/10 px-6 py-4">
//             <div className="flex gap-2">
//               <div className="h-3 w-3 rounded-full bg-black" />
//               <div className="h-3 w-3 rounded-full bg-black/50" />
//               <div className="h-3 w-3 rounded-full bg-black/20" />
//             </div>

//             <span className="text-xs font-bold uppercase tracking-[0.25em] text-black">
//               SAMAYAM CONTAINER LINES PVT. LTD.
//             </span>

//             <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
//               Global Freight
//             </span>
//           </div>

//           {/* Content */}
//           <div className="relative flex flex-col items-start justify-between gap-10 px-6 py-10 md:flex-row md:items-center md:px-10">
//             <div className="max-w-xl">
//               <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/40">
//                 Shipping Container Solutions
//               </p>

//               <h2 className="text-3xl font-black leading-tight text-black md:text-5xl">
//                 Fast & Reliable
//                 <span className="block text-black/40">
//                   Global Logistics
//                 </span>
//               </h2>

//               <p className="mt-5 text-base leading-relaxed text-black/55">
//                 Modern freight forwarding and container shipping for businesses
//                 worldwide.
//               </p>
//             </div>

//             {/* CTA */}
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <button className="group flex items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
//                 Request Quote
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </button>

//               <button className="rounded-2xl border border-black/10 bg-[#fafafa] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           {/* Bottom Industrial Strip */}
//           <div className="relative flex items-center justify-between border-t border-black/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-black/35">
//             <span>Ocean Freight</span>
//             <span>Air Cargo</span>
//             <span>Custom Clearance</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }












// export default function Cta() {
//     return (
//       <section className="relative overflow-hidden bg-white py-20 px-6">
//         <div className="mx-auto max-w-5xl">
//           {/* Crane + Ropes */}
//           <div className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
//             {/* Crane Hook */}
//             <div className="flex flex-col items-center">
//               <div className="h-14 w-[3px] bg-black" />
//               <div className="relative flex items-center justify-center">
//                 <div className="h-8 w-8 rounded-full border-[3px] border-black bg-white" />
//                 <div className="absolute top-5 h-10 w-[3px] bg-black" />
//                 <div className="absolute top-12 h-8 w-6 rounded-b-full border-b-[3px] border-l-[3px] border-r-[3px] border-black" />
//               </div>
//             </div>
//           </div>
  
//           {/* Container */}
//           <div className="relative mt-20">
//             {/* Ropes */}
//             <div className="absolute inset-x-0 -top-20 hidden justify-between px-24 md:flex">
//               <div className="h-20 w-[3px] rotate-6 bg-black" />
//               <div className="h-20 w-[3px] -rotate-6 bg-black" />
//             </div>
  
//             {/* CTA Box */}
//             <div className="relative rounded-3xl border border-black/10 bg-[#6B8E23] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
//               {/* Container Lines */}
//               <div className="absolute inset-y-0 left-6 w-[2px] bg-black/20" />
//               <div className="absolute inset-y-0 right-6 w-[2px] bg-black/20" />
  
//               {/* Top & Bottom Metal Bars */}
//               <div className="absolute left-0 top-5 h-[2px] w-full bg-black/15" />
//               <div className="absolute bottom-5 left-0 h-[2px] w-full bg-black/15" />
  
//               <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
//                 {/* Content */}
//                 <div className="max-w-xl">
//                   <p className="mb-3 inline-flex rounded-full border border-black/15 bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-black">
//                     Global Freight Solutions
//                   </p>
  
//                   <h2 className="text-3xl font-semibold leading-tight text-black md:text-4xl">
//                     Reliable Container Shipping
//                     <span className="block">
//                       For Modern Global Trade
//                     </span>
//                   </h2>
  
//                   <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">
//                     Secure ocean freight, fast customs clearance, and
//                     dependable logistics support for your cargo worldwide.
//                   </p>
//                 </div>
  
//                 {/* CTA Button */}
//                 <div className="flex md:justify-end">
//                   <button className="group relative overflow-hidden rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
//                     <span className="relative z-10 flex items-center gap-2">
//                       Request Quote
//                       <span className="transition-transform duration-300 group-hover:translate-x-1">
//                         →
//                       </span>
//                     </span>
  
//                     <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
//                     <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                       Get Started
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }