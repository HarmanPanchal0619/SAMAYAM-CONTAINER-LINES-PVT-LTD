export default function About() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src="/about.jpg"
            alt="About SAMAYAM"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>

          <p className="text-secondary font-semibold uppercase tracking-[3px]">
            About Company
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            Trusted Logistics & Freight Forwarding Partner
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">
            SAMAYAM Container Lines Pvt Ltd is a Chennai-based
            global logistics company specializing in ocean freight,
            customs clearance, warehousing, transportation,
            and NVOCC services.
          </p>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            With over 27 years of industry expertise, we deliver
            reliable and cost-effective logistics solutions tailored
            to global import and export requirements.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-secondary">27+</h3>
              <p className="mt-2 text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-secondary">Global</h3>
              <p className="mt-2 text-slate-600">
                Shipping Network
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}