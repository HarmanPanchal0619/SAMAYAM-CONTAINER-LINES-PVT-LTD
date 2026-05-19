"use client"

import { MoveRight } from "lucide-react"

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Ocean Freight Operations",
      category: "Global Shipping",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
      height: "h-[320px]",
    },
    {
      title: "Container Logistics",
      category: "Cargo Handling",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
      height: "h-[500px]",
    },
    {
      title: "Warehouse Management",
      category: "Storage Solutions",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
      height: "h-[420px]",
    },
    {
      title: "Road Transportation",
      category: "Inland Freight",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
      height: "h-[420px]",
    },
    {
      title: "Port Cargo Services",
      category: "Freight Network",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
      height: "h-[520px]",
    },
    {
      title: "International Delivery",
      category: "Supply Chain",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop",
      height: "h-[340px]",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] py-6 md:py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-20">
          <div>
            <h2 className="text-[60px] md:text-[80px] xl:text-[140px] font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
              GALLERY
            </h2>
          </div>

          <div className="max-w-[520px]">
            <p className="text-[18px] md:text-[20px] leading-9 text-[#6b7280]">
              Explore our logistics operations, freight handling, warehousing,
              and transportation services through real-world cargo movement and
              shipping solutions.
            </p>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-7 space-y-7">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer"
            >
              {/* Image */}
              <div className={`overflow-hidden ${item.height}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70 mb-3">
                  {item.category}
                </p>

                <div className="flex items-end justify-between gap-5">
                  <h3 className="text-white text-[28px] leading-tight font-medium max-w-[260px]">
                    {item.title}
                  </h3>

                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <MoveRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-t border-[#d8dfe0] pt-10">
          <div>
            <p className="text-[26px] md:text-[32px] leading-[1.2] font-medium text-[#111827] max-w-[700px]">
              Delivering smart logistics solutions with reliable global freight
              operations.
            </p>
          </div>

          <button className="group w-fit h-10 px-4 md:h-16 md:px-6 bg-[#1200c8] text-white text-[16px] font-medium flex items-center gap-3 transition-all duration-500 hover:bg-black">
            View More Projects

            <MoveRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}