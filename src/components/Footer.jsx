"use client"

import {
  ArrowUpRight,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#040b16] pt-60 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Crane */}
      <div className="absolute inset-x-0 top-0 z-30 flex justify-center">
        <div className="relative w-full max-w-7xl">
          {/* Main Beam */}
          <div className="mx-auto h-5 w-[78%] rounded-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 shadow-[0_10px_40px_rgba(255,190,50,0.45)]" />

          {/* Beam Details */}
          <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-8">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-5 w-[3px] rounded-full bg-black/20"
              />
            ))}
          </div>

          {/* Left Rope */}
          <div className="absolute left-[16%] top-5 flex flex-col items-center">
            <div className="h-52 w-[4px] bg-gradient-to-b from-gray-100 to-gray-500" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-gray-300 bg-[#040b16] shadow-lg">
              <div className="h-3 w-3 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* Right Rope */}
          <div className="absolute right-[16%] top-5 flex flex-col items-center">
            <div className="h-52 w-[4px] bg-gradient-to-b from-gray-100 to-gray-500" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-gray-300 bg-[#040b16] shadow-lg">
              <div className="h-3 w-3 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#ff8a00] via-[#f97316] to-[#cf4d00] shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
          {/* Metal Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:60px_60px]" />

          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-1000 group-hover:translate-x-full group-hover:opacity-100" />

          {/* Vertical Container Lines */}
          <div className="absolute left-6 top-0 h-full w-[3px] bg-black/15" />
          <div className="absolute left-24 top-0 h-full w-[2px] bg-black/10" />
          <div className="absolute right-24 top-0 h-full w-[2px] bg-black/10" />
          <div className="absolute right-6 top-0 h-full w-[3px] bg-black/15" />

          {/* Horizontal Lines */}
          <div className="absolute left-0 top-12 h-[2px] w-full bg-black/10" />
          <div className="absolute bottom-12 left-0 h-[2px] w-full bg-black/10" />

          {/* Corner Locks */}
          {[
            "left-3 top-3",
            "right-3 top-3",
            "left-3 bottom-3",
            "right-3 bottom-3",
          ].map((position, i) => (
            <div
              key={i}
              className={`absolute ${position} h-7 w-7 rounded-md border-2 border-black/20 bg-black/10 backdrop-blur-sm`}
            />
          ))}

          {/* Main Content */}
          <div className="relative z-10 grid gap-16 px-8 py-20 md:grid-cols-4 md:px-14">
            {/* Brand */}
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur">
                Global Shipping
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-[0.15em]">
                SAMAYAM
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/85">
                Trusted container logistics and freight transportation
                solutions connecting businesses across oceans and borders.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold tracking-wide">
                Quick Links
              </h3>

              <ul className="mt-8 space-y-5">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Tracking",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-sm text-white/85 transition hover:text-black"
                    >
                      <span>{item}</span>

                      <ArrowUpRight
                        size={14}
                        className="translate-y-[1px] opacity-0 transition group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold tracking-wide">
                Services
              </h3>

              <ul className="mt-8 space-y-5">
                {[
                  "Ocean Freight",
                  "Air Freight",
                  "Container Shipping",
                  "Custom Clearance",
                  "Warehousing",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-sm text-white/85 transition hover:text-black"
                    >
                      <span>{item}</span>

                      <ArrowUpRight
                        size={14}
                        className="translate-y-[1px] opacity-0 transition group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold tracking-wide">
                Stay Connected
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/85">
                Receive shipping updates, logistics insights, and
                freight news directly in your inbox.
              </p>

              <div className="mt-8">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent px-5 py-4 text-sm text-white placeholder:text-white/60 outline-none"
                  />
                </div>

                <button className="mt-4 w-full rounded-2xl bg-[#040b16] px-5 py-4 text-sm font-semibold tracking-wide transition hover:bg-black">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="relative border-t border-black/10 px-8 py-6 md:px-14">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/80 md:flex-row">
              <p>
                © 2026 Samayam Container Lines Pvt Ltd. All rights
                reserved.
              </p>

              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>

                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ground Shadow */}
        <div className="mx-auto mt-6 h-14 w-[75%] rounded-full bg-black/40 blur-3xl" />
      </div>
    </footer>
  )
}