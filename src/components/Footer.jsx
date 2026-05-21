"use client"

import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-white overflow-hidden">

      {/* Main Container (aligned with full site) */}
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2 py-16 lg:py-24">

        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-[28px] font-semibold tracking-tight">
              SAMAYAM
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60 max-w-[280px]">
              Global freight forwarding and logistics solutions delivering
              reliable, secure, and efficient cargo movement worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <p>Ocean Freight</p>
              <p>Air Cargo</p>
              <p>Custom Clearance</p>
              <p>Warehousing</p>
              <p>Transportation</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-white/70 text-sm">

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1" />
                <p>
                  Chennai, Tamil Nadu, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+919840059829" className="hover:text-white">
                  +91 98400 59829
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:ram@samayam.org.in" className="hover:text-white">
                  ram@samayam.org.in
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/10" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Samayam Container Lines Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/50">
            <a className="hover:text-white transition" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition" href="#">
              Terms
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>

        </div>
      </div>
    </footer>
  )
}