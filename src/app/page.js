import ContactSection from "@/components/ContactSection"
import Faqs from "@/components/Faqs"
import GallerySection from "@/components/Gallery"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"

function page() {
  return (
    <>
    <Hero/>
    <Services/>
    <GallerySection/>
    <WhyChooseUs/>
    <Faqs/>
    <ContactSection/>
    </>
  )
}
export default page