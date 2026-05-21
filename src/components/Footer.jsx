"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f5f3] pt-12 lg:pt-20 border-t border-[#d8dfe0]">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src="/logo-final-01.png"
                alt="SAMAYAM"
                width={1000}
                height={1000}
                className="h-16 w-auto object-contain"
              />

              <div>
                <h3 className="text-[24px] font-bold text-[#B38728] leading-none">
                  SAMAYAM
                </h3>

                <p className="text-[12px] tracking-wide text-[#1F5E2C]">
                  CONTAINER LINES PVT. LTD.
                </p>
              </div>
            </Link>

            <p className="mt-8 max-w-[420px] text-[16px] leading-8 text-[#6b7280]">
              Reliable international freight forwarding and logistics
              solutions delivering cargo safely across global trade
              routes with professionalism and trust.
            </p>

            <button className="group mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-[#1F5E2C]">
              Get In Touch

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F5E2C] text-white transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[14px] uppercase tracking-[0.25em] text-[#7b8487]">
              Navigation
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              {[
                "Home",
                "About",
                "Services",
                "Gallery",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[17px] text-[#111827] transition hover:text-[#1F5E2C]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[14px] uppercase tracking-[0.25em] text-[#7b8487]">
              Services
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              {[
                "Ocean Freight",
                "NVOCC Services",
                "Warehousing",
                "Customs Clearance",
                "Road Transportation",
              ].map((item) => (
                <p
                  key={item}
                  className="text-[17px] text-[#111827]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] uppercase tracking-[0.25em] text-[#7b8487]">
              Contact
            </h4>

            <div className="mt-6 space-y-6">
              
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-[#1F5E2C]" />

                <div className="text-[16px] text-[#111827]">
                  <a href="tel:+919840059829">
                    +91 98400 59829
                  </a>

                  <br />

                  <a href="tel:+914448659829">
                    +91 44486 59829
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-[#1F5E2C]" />

                <a
                  href="mailto:ram@samayam.org.in"
                  className="text-[16px] text-[#111827]"
                >
                  ram@samayam.org.in
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[#1F5E2C]" />

                <p className="text-[16px] leading-7 text-[#111827]">
                  Old No:269/2, New No:126,
                  <br />
                  2nd Floor, Thambu Chetty Street,
                  <br />
                  Mannady, Chennai – 600001.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#d8dfe0] pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          
          <p className="text-[14px] text-[#6b7280]">
            © 2026 SAMAYAM Container Lines Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-6 lg:justify-end">
            <Link
              href="/"
              className="text-[14px] text-[#6b7280] transition hover:text-[#1F5E2C]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-[14px] text-[#6b7280] transition hover:text-[#1F5E2C]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}