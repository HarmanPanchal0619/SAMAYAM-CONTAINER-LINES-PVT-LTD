"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="hidden lg:flex absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-wide-bg.png')",
        }}
      />
      <div
        className="flex lg:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-mobile-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02172f]/50 via-[#03244b]/20 to-[#02172f]/2" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-5 pb-32 md:pb-18 pt-30 md:pt-50 xl:px-2">
        {/* Main Content */}
        <div className="max-w-5xl">
          <h1 className="max-w-5xl text-[35px] font-medium leading-[1] tracking-[0px] text-white md:text-[45px] lg:text-[80px]">
            Efficient
            <span className="mx-3 xl:mx-5 text-[24px] xl:text-[40px] px-2 py-1 xl:px-4 xl:py-3 align-middle w-20 h-20 md:w-40 md:h-40 rounded-full bg-white text-black">
              ✦
            </span>
            <br />
            transportation built
            <br />
            for global delivery
          </h1>

          <p className="mt-6 md:mt-8 max-w-2xl text-[14px] tracking-[2px] text-white/85">
            Reliable logistics and cargo solutions that move your
            business forward — fast, secure, and on time, across
            cities, borders, and supply chains.
          </p>

          <button className="mt-8 md:mt-10 rounded-full bg-[var(--secondary)] px-8 py-3 md:px-10 md:py-4 text-[14px] md:text-[16px] font-semibold text-black transition duration-500 hover:text-white/75 hover:bg-[var(--primary)]">
            Get Started
          </button>
        </div>

        {/* Bottom Content */}
        <div className="mt-4 sm:mt-2 md:mt-8 flex flex-col-reverse items-start justify-between gap-10 lg:flex-row lg:items-end">
          {/* Scroll Icon */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 md:h-20 w-[2px] bg-white/40" />

            <ArrowDown
              size={30}
              className="animate-bounce text-white"
            />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 sm:gap-10 lg:gap-20">
            <div>
              <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium text-white">
                95%
              </h2>

              <p className="mt-3 md:mt-5 max-w-[220px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-snug text-white">
                Recognition Gained
                <br />
                Through Branding
              </p>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl xl:text-7xl font-medium text-white">
                27+
              </h2>

              <p className="mt-3 md:mt-5 max-w-[220px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-snug text-white">
                Years of Bold Ideas
                <br />
                and Trusted Results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}