"use client"

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#f5f5f3] py-12 lg:py-20"
    >

      {/* ALIGNMENT FIX: unified container width */}
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading (unchanged UI, only alignment consistent) */}
        <div className="mb-10">
          <h2 className="text-[54px] md:text-[100px] lg:text-[135px] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[#c9d3d5]">
            GET IN TOUCH
          </h2>
        </div>

        {/* Grid alignment fixed */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="bg-[var(--primary)]/20 p-6">

            <div className="space-y-12">

              {/* Phone */}
              <div className="flex items-start gap-7">
                <div className="w-12 h-12 md:w-18 md:h-18 bg-[#dfe7e8] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#111827]" />
                </div>

                <div>
                  <h3 className="text-[16px] uppercase tracking-[0.18em] text-[#7b8487]">
                    Phone
                  </h3>

                  <p className="text-[16px] md:text-[20px] font-medium text-[#111827]">
                    <a href="tel:+919840059829">+919840059829</a>
                    <br />
                    <a href="tel:+914448659829">+914448659829</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-7">
                <div className="w-12 h-12 md:w-18 md:h-18 bg-[#dfe7e8] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#111827]" />
                </div>

                <div>
                  <h3 className="text-[16px] uppercase tracking-[0.18em] text-[#7b8487]">
                    Contact Email
                  </h3>

                  <p className="text-[16px] md:text-[22px] font-medium text-[#111827]">
                    <a href="mailto:ram@samayam.org.in">
                      ram@samayam.org.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-7">
                <div className="w-12 h-12 md:w-18 md:h-18 bg-[#dfe7e8] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#111827]" />
                </div>

                <div>
                  <h3 className="text-[16px] uppercase tracking-[0.18em] text-[#7b8487]">
                    Address
                  </h3>

                  <p className="text-[16px] md:text-[20px] leading-[1.35] font-medium text-[#111827] max-w-[580px]">
                    Old No:269/2, New No:126, 2nd Floor, Thambu Chetty Street,
                    Mannady, Parry’s, Chennai – 600001.
                  </p>
                </div>
              </div>

            </div>

            {/* Map */}
            <div className="mt-20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                alt="Map"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pl-4">

            <div className="sticky top-10">

              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#7b8487]">
                Send Message
              </p>

              <h3 className="text-[52px] md:text-[72px] leading-[0.95] tracking-[-0.04em] font-medium text-[#111827] max-w-[620px]">
                Have questions?
              </h3>

              <p className="mt-6 text-[18px] md:text-[20px] leading-9 text-[#6b7280] max-w-[600px]">
                Connect with our logistics experts for freight solutions,
                shipment support, and global cargo assistance tailored to your
                business requirements.
              </p>

              {/* Form (spacing normalized only) */}
              <form className="mt-8 space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 md:h-16 border border-[#cfd7d8] bg-transparent px-6 md:px-10 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none focus:border-black focus:bg-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-14 md:h-16 border border-[#cfd7d8] bg-transparent px-6 md:px-10 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none focus:border-black focus:bg-white"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full h-14 md:h-16 border border-[#cfd7d8] bg-transparent px-6 md:px-10 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none focus:border-black focus:bg-white"
                />

                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full border border-[#cfd7d8] bg-transparent px-6 md:px-10 py-6 text-[18px] text-[#111827] placeholder:text-[#8b9498] outline-none resize-none focus:border-black focus:bg-white"
                />

                <button
                  type="submit"
                  className="w-full h-14 md:h-16 bg-[#1200c8] text-white text-[18px] font-medium transition-all duration-500 hover:bg-black"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}