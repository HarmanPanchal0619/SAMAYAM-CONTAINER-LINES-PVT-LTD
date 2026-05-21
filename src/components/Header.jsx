"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);


  return (
    <>
    <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[998] bg-black/60  transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    <header className={`fixed z-1000 top-0 left-0 z-50 w-full transition-all duration-300
    ${
      scrolled || menuOpen
        ? " backdrop-blur-lg bg-[white]/80 text-black shadow-[0_4px_32px_rgba(0,0,0,0.2)] after:content-[''] after:block after:w-[100%] after:border-b after:border-black/[0.4] after:mx-auto"
        : "bg-transparent text-white"
    }`}>
      <div className="mx-auto flex max-w-[1400px] h-[10vh] items-center justify-between px-5 xl:px-2">
        {/* Logo */}
        <Link href="/" className="flex w-[70%] lg:w-[33%] items-center justify-start gap-1">
          <Image src={"/logo-final-01.png"}
          alt="Logo"
          height={1000}
          width={1000}
          className="h-[60px] w-auto object-fill"
          />
          <div className="flex flex-col justify-center">
            <span className="text-[18px] font-bold leading-none text-[var(--secondary)] sm:text-[22px]">
              SAMAYAM
            </span>
            <span className="text-[10px] font-medium tracking-tight sm:text-[14px]">
              CONTAINER LINES PVT. LTD.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:w-[33%] items-center justify-center gap-8 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center text-[15px] font-500 tracking-[1px] transition ${
                scrolled || menuOpen
                  ? "hover:text-black/65"
                  : "hover:text-white/65"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden w-[10%] lg:w-[33%] items-center justify-end xl:flex">
          <button className="rounded-full bg-blue-700 text-white px-5 py-3 text-sm font-medium transition duration-300 hover:bg-blue-600">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-black/10 backdrop-blur-lg transition hover:bg-black/20 xl:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${
          menuOpen ? "max-h-screen pb-5" : "max-h-0"
        }`}
      >
        <div className="mx-4 mt-1 rounded-[28px] border border-black/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:mx-6">
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 text-[15px] font-medium text-black/85 transition hover:text-blue-600 ${
                  index !== navItems.length - 1
                    ? "border-b border-black/8"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <button className="mt-5 w-full rounded-full bg-blue-700 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600">
            Get in Touch
          </button>
        </div>
      </div>
    </header>
    </>
  )
}