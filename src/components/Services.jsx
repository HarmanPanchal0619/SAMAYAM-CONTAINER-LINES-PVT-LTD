"use client"

import { useState } from "react"

export default function Services() {
  const [showAll, setShowAll] = useState(false)

  const services = [
    {
      title: "Ocean Freight",
      description:
        "Efficient and dependable import and export ocean freight services for global cargo movement.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "NVOCC Services",
      description:
        "Leased container fleet solutions including Dry Containers and Reefer Containers for international shipping operations.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Customs Clearance",
      description:
        "Smooth and hassle-free customs documentation and clearance support for imports and exports.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Road Transportation",
      description:
        "Secure inland transportation services ensuring safe cargo movement across locations.",
      type: "text",
    },
    {
      title: "Warehousing",
      description:
        "Professional warehousing and inventory management solutions for cargo storage and distribution.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Marine Insurance",
      description:
        "Comprehensive cargo insurance services to protect shipments against transit risks.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Container Trading",
      description:
        "Reliable container leasing and trading services for various shipping requirements.",
      type: "text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
      type: "image",
    },
    {
      title: "Commodities Trading",
      description:
        "Efficient sourcing and trading support for multiple commodity sectors.",
      type: "text",
    },
  ]

  const visibleServices = showAll ? services : services.slice(0, 8)

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f5f3] py-12 lg:py-20"
    >

      {/* ONLY ALIGNMENT FIX: unify container with rest of site */}
      <div className="mx-auto max-w-[1400px] px-5 xl:px-2">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[60px] md:text-[80px] xl:text-[140px] font-light uppercase leading-none tracking-tight text-[#c9d3d5]">
            Our Services
          </h2>
        </div>

        {/* Grid (UNCHANGED UI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {visibleServices.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden h-[330px] transition-all duration-500 ${
                item.type === "text"
                  ? "bg-[#dfe7e8] p-9 flex flex-col justify-between"
                  : ""
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <>
                  <div>
                    <h3 className="text-[24px] leading-tight font-medium text-[#111] max-w-[220px]">
                      {item.title}
                    </h3>

                    <p className="mt-8 text-[15px] leading-8 text-[#5f676b]">
                      {item.description}
                    </p>
                  </div>

                  <button className="w-fit text-[15px] font-medium text-black relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-black">
                    Learn More
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Buttons (alignment consistency only) */}
        <div className="flex justify-center mt-14">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="group h-16 px-10 bg-black hover:bg-transparent border border-black text-white hover:text-black text-[17px] font-medium transition-all duration-500"
            >
              View More Services
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="group h-16 px-10 border border-black bg-white text-[#111] text-[17px] font-medium transition-all duration-500 hover:bg-black hover:text-white"
            >
              Hide Services
            </button>
          )}
        </div>

      </div>
    </section>
  )
}







// export default function Services() {
//   const solutions = [
//     {
//       title: "International freight forwarding",
//       description:
//         "Move goods worldwide with ease and full real-time control.",
//       image:
//         "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
//       type: "text",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
//       type: "image",
//     },
//     {
//       title: "Warehousing and logistics",
//       description:
//         "Keep stock secure and track items with smart warehouse tools.",
//       image:
//         "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
//       type: "text",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
//       type: "image",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
//       type: "image",
//     },
//     {
//       title: "Last-mile delivery solutions",
//       description:
//         "Get parcels to clients fast with live route and ETA updates.",
//       image:
//         "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
//       type: "text",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1200&auto=format&fit=crop",
//       type: "image",
//     },
//     {
//       title: "Custom logistics solutions",
//       description:
//         "Tailor services for unique cargo needs or special projects.",
//       image:
//         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
//       type: "text",
//     },
//   ]

//   return (
//     <section className="relative bg-[#f5f5f3] py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-[70px] md:text-[120px] lg:text-[150px] font-light tracking-tight text-[#c7d2d4] leading-none uppercase mb-8">
//           Solutions
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
//           {solutions.map((item, index) => (
//             <div
//               key={index}
//               className={`group relative h-[330px] overflow-hidden ${
//                 item.type === "text"
//                   ? "bg-[#dce5e7] p-9 flex flex-col justify-between"
//                   : ""
//               }`}
//             >
//               {item.type === "image" ? (
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//               ) : (
//                 <>
//                   <div>
//                     <h3 className="text-[20px] md:text-[24px] leading-tight font-medium text-[#111] max-w-[220px]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-10 text-[15px] leading-8 text-[#5c6468] max-w-[240px]">
//                       {item.description}
//                     </p>
//                   </div>

//                   <button className="text-[15px] font-medium text-black w-fit relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-black">
//                     Learn More
//                   </button>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Floating Buttons */}
//       <div className="hidden lg:flex flex-col gap-1 fixed right-0 top-1/3 z-20">
//         <button className="w-14 h-14 bg-[#1100c7] text-white flex items-center justify-center hover:bg-black transition">
//           ✉
//         </button>

//         <button className="w-14 h-14 bg-[#1100c7] text-white flex items-center justify-center hover:bg-black transition">
//           ⌂
//         </button>

//         <button className="w-14 h-14 bg-[#1100c7] text-white flex items-center justify-center hover:bg-black transition">
//           ☰
//         </button>
//       </div>
//     </section>
//   )
// }








// import {
//   FaShip,
//   FaWarehouse,
//   FaTruckMoving,
// } from 'react-icons/fa'

// import {
//   GiCargoShip,
// } from 'react-icons/gi'

// const services = [
//   {
//     title: 'Ocean Freight',
//     icon: <FaShip />,
//     desc: 'Reliable import & export ocean freight forwarding solutions worldwide.',
//   },
//   {
//     title: 'NVOCC Services',
//     icon: <GiCargoShip />,
//     desc: 'Efficient container solutions with global shipping support.',
//   },
//   {
//     title: 'Customs Clearance',
//     icon: <FaWarehouse />,
//     desc: 'Professional customs documentation and clearance assistance.',
//   },
//   {
//     title: 'Land Transportation',
//     icon: <FaTruckMoving />,
//     desc: 'Safe and timely cargo transportation across regions.',
//   },
// ]

// export default function Services() {
//   return (
//     <section className="py-24 bg-white">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center max-w-3xl mx-auto">

//           <p className="text-secondary font-semibold uppercase tracking-[3px]">
//             Our Services
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
//             Complete Logistics Solutions
//           </h2>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-slate-50 hover:bg-primary transition-all duration-300 p-8 rounded-3xl shadow-lg"
//             >

//               <div className="text-5xl text-secondary">
//                 {service.icon}
//               </div>

//               <h3 className="mt-6 text-2xl font-bold group-hover:text-white">
//                 {service.title}
//               </h3>

//               <p className="mt-4 text-slate-600 group-hover:text-slate-200 leading-7">
//                 {service.desc}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   )
// }