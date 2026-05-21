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
    <section
      id="faqs"
      className="relative bg-[#f5f5f3] py-12 lg:py-20"
    >

      {/* ONLY ALIGNMENT FIX: unified container */}
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Top Heading */}
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

        {/* FAQ Container (UNCHANGED UI) */}
        <div className="rounded-sm border-3 border-black/5 bg-white/70 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:p-4">

          {faqs.map((faq, index) => {
            const isOpen = active === index

            return (
              <div
                key={index}
                className={`group rounded-sm transition-all duration-500 ${
                  isOpen ? "bg-[#f8f6f2]" : "hover:bg-[#faf9f7]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start justify-between gap-6 px-5 py-6 text-left lg:px-7"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`mt-1 text-xs font-semibold transition-all duration-300 ${
                        isOpen ? "text-[#b88b52]" : "text-[#9ca3af]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div>
                      <h3
                        className={`text-[16px] font-medium leading-[1.3] lg:text-[20px] ${
                          isOpen ? "text-[#111827]" : "text-[#374151]"
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

                  <div
                    className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isOpen
                        ? "bg-[#111827] text-white"
                        : "bg-[#f1efeb] text-[#111827]"
                    }`}
                  >
                    <Plus
                      size={20}
                      className={`transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </button>

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