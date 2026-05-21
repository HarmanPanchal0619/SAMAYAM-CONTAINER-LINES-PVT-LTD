"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Do you handle both imports and exports?",
    answer:
      "Yes, we provide complete import and export freight forwarding services with global logistics coordination and shipment management.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We work across industries including glass products, solar equipment, seafood exports, pharmaceuticals, chemicals, and industrial cargo.",
  },
  {
    question: "Do you provide customs clearance services?",
    answer:
      "Absolutely. Our team manages customs documentation, compliance procedures, and clearance support for smooth international shipping.",
  },
  {
    question: "Can you arrange inland transportation?",
    answer:
      "Yes, we provide inland transportation, container movement, warehousing coordination, and cargo delivery solutions.",
  },
  {
    question: "Do you offer cargo insurance?",
    answer:
      "Yes, marine cargo insurance services are available to protect shipments during domestic and international transit.",
  },
]

export default function Faqs() {
  const [active, setActive] = useState(0)

  const toggleFaq = (index) => {
    setActive(active === index ? null : index)
  }

  return (
    <section id="faqs" className="relative  bg-[#f5f5f3] py-12 lg:py-20">


      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top */}
        <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
        <div>
            <h2 className="text-[60px] md:text-[80px] xl:text-[140px] font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
              FAQS
            </h2>
          </div>

          <div className="max-w-[520px]">
            <p className="text-[18px] md:text-[20px] leading-7 text-[#6b7280]">
            Quick answers to common questions about freight forwarding,
            customs clearance, transportation, and shipment handling.
            </p>
          </div>
        </div>

        {/* FAQ Container */}
        <div className="rounded-sm border-3 border-black/5 bg-white/70 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:p-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index

            return (
              <div
                key={index}
                className={`group rounded-sm transition-all duration-500 ${
                  isOpen
                    ? "bg-[#f8f6f2]"
                    : "hover:bg-[#faf9f7]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start justify-between gap-6 px-5 py-6 text-left lg:px-7"
                >
                  {/* Left */}
                  <div className="flex items-start gap-5">
                    <span
                      className={`mt-1 text-xs font-semibold transition-all duration-300 ${
                        isOpen
                          ? "text-[#b88b52]"
                          : "text-[#9ca3af]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div>
                      <h3
                        className={`text-[16px] font-medium leading-[1.3] transition-all duration-300 lg:text-[20px] ${
                          isOpen
                            ? "text-[#111827]"
                            : "text-[#374151]"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-3xl text-[12px] leading-relaxed text-[#66707a] lg:text-[16px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Icon */}
                  <div
                    className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isOpen
                        ? "bg-[#111827] text-white"
                        : "bg-[#f1efeb] text-[#111827]"
                    }`}
                  >
                    <Plus
                      size={20}
                      strokeWidth={2}
                      className={`transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />

                    {/* Ring */}
                    <span
                      className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "border-[#111827]"
                          : "border-black/5"
                      }`}
                    />
                  </div>
                </button>

                {/* Divider */}
                {index !== faqs.length - 1 && (
                  <div className="mx-5 h-px bg-black/[0.06] lg:mx-7" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}








// "use client"

// import { useState } from "react"
// import { Minus, Plus } from "lucide-react"

// const faqs = [
//   {
//     question: "Do you handle both imports and exports?",
//     answer:
//       "Yes, we provide complete import and export freight forwarding solutions with end-to-end cargo management and global shipping support.",
//   },
//   {
//     question: "Which industries do you specialize in?",
//     answer:
//       "We specialize in logistics support for glass products, solar equipment, chemicals, seafood, pharmaceuticals, industrial machinery, and more.",
//   },
//   {
//     question: "Do you provide customs clearance services?",
//     answer:
//       "Yes, our team manages customs documentation, compliance checks, duty handling, and smooth clearance processes for international shipments.",
//   },
//   {
//     question: "Can you arrange inland transportation?",
//     answer:
//       "Absolutely. We provide reliable road transportation, container movement, warehousing coordination, and last-mile delivery services.",
//   },
//   {
//     question: "Do you offer cargo insurance?",
//     answer:
//       "Yes, we offer marine cargo insurance solutions to help protect shipments against damage, delays, and unforeseen transit risks.",
//   },
// ]

// export default function Faqs() {
//   const [active, setActive] = useState(0)

//   const toggleFaq = (index) => {
//     setActive(active === index ? null : index)
//   }

//   return (
//     <section className="relative overflow-hidden bg-[#f8f6f1] py-24 lg:py-32">
//       {/* Background Elements */}
//       <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#c6a16e]/10 blur-3xl" />
//       <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#111827]/5 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
//           <div className="max-w-3xl">
//             <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b88b52]">
//               FAQS
//             </span>

//             <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-2px] text-[#111827] md:text-5xl lg:text-[72px]">
//               Everything you need to know.
//             </h2>
//           </div>

//           <p className="max-w-lg text-[17px] leading-relaxed text-[#66707a]">
//             Clear answers for shipping, customs, transportation, and freight
//             management — designed to help businesses move globally with
//             confidence.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="border-t border-[#d9d4ca]">
//           {faqs.map((faq, index) => {
//             const isOpen = active === index

//             return (
//               <div
//                 key={index}
//                 className="group border-b border-[#d9d4ca]"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="flex w-full items-start justify-between gap-8 py-8 text-left lg:py-10"
//                 >
//                   {/* Left */}
//                   <div className="flex items-start gap-6">
//                     <span
//                       className={`mt-1 text-sm font-medium transition-all duration-300 ${
//                         isOpen
//                           ? "text-[#b88b52]"
//                           : "text-[#9ca3af] group-hover:text-[#111827]"
//                       }`}
//                     >
//                       0{index + 1}
//                     </span>

//                     <div>
//                       <h3
//                         className={`text-[22px] font-medium leading-snug transition-all duration-300 lg:text-[32px] ${
//                           isOpen
//                             ? "text-[#111827]"
//                             : "text-[#2d3748] group-hover:text-[#111827]"
//                         }`}
//                       >
//                         {faq.question}
//                       </h3>

//                       <div
//                         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                           isOpen
//                             ? "mt-6 max-h-40 opacity-100"
//                             : "max-h-0 opacity-0"
//                         }`}
//                       >
//                         <p className="max-w-3xl text-[16px] leading-relaxed text-[#66707a] lg:text-[17px]">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Icon */}
//                   <div
//                     className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
//                       isOpen
//                         ? "border-[#111827] bg-[#111827] text-white"
//                         : "border-[#d1d5db] bg-transparent text-[#111827] group-hover:border-[#111827]"
//                     }`}
//                   >
//                     {isOpen ? (
//                       <Minus size={20} strokeWidth={2} />
//                     ) : (
//                       <Plus size={20} strokeWidth={2} />
//                     )}
//                   </div>
//                 </button>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }








// "use client"

// import { useState } from "react"
// import { Minus, Plus, } from "lucide-react"

// const faqs = [
//   {
//     question: "Do you handle both imports and exports?",
//     answer:
//       "Yes, we provide complete import and export freight forwarding solutions.",
//   },
//   {
//     question: "Which industries do you specialize in?",
//     answer:
//       "We specialize in logistics support for glass products, solar equipment, chemicals, seafood, pharma exports, and more.",
//   },
//   {
//     question: "Do you provide customs clearance services?",
//     answer:
//       "Yes, we offer complete customs documentation and clearance support.",
//   },
//   {
//     question: "Can you arrange inland transportation?",
//     answer:
//       "Yes, we provide road transportation and cargo movement solutions across locations.",
//   },
//   {
//     question: "Do you offer cargo insurance?",
//     answer:
//       "Yes, marine insurance services are available for shipment protection.",
//   },
// ]

// export default function Faqs() {
//   const [active, setActive] = useState(1)

//   const toggleFaq = (index) => {
//     setActive(active === index ? null : index)
//   }

//   return (
//     <section className="relative overflow-hidden bg-[#f5f5f3] py-24 lg:py-32">
//       <div className="mx-auto grid max-w-[1400px] gap-20 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
//         {/* Left Content */}
//         <div>
//           <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1c2430]">
//             Need Help With SAMAYAM?
//           </span>

//           <h2 className="mt-8 text-3xl font-medium leading-[1] tracking-[-2px] text-[#1f262d] md:text-4xl lg:text-[60px]">
//             Frequently asked at Samayam
//           </h2>

//           <p className="mt-10 max-w-xl text-[17px] leading-relaxed text-[#5c6772]">
//           We understand that logistics and international shipping can involve many moving parts. Here are answers to some of the most common questions about our freight forwarding, customs clearance, transportation, and cargo handling services.
//           </p>
//         </div>

//         {/* FAQ */}
//         <div className="flex flex-col">
//           {faqs.map((faq, index) => {
//             const isOpen = active === index

//             return (
//               <div
//                 key={index}
//                 className="border-b border-[#d9dee2]"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="flex w-full items-start justify-between gap-6 py-8 text-left"
//                 >
//                   <span className="text-[16px] font-medium leading-snug text-[#111827] lg:text-[20px]">
//                     {faq.question}
//                   </span>

//                   <span className="mt-1 flex-shrink-0 text-[#111827]">
//                     {isOpen ? (
//                       <Minus size={28} strokeWidth={1.8} />
//                     ) : (
//                       <Plus size={28} strokeWidth={1.8} />
//                     )}
//                   </span>
//                 </button>

//                 <div
//                   className={`grid transition-all duration-500 ease-in-out ${
//                     isOpen
//                       ? "grid-rows-[1fr] pb-10"
//                       : "grid-rows-[0fr]"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="max-w-2xl pr-10 text-[16px] leading-relaxed text-[#66707a]">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }