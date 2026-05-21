import ContactSection from "@/components/ContactSection"
import Faqs from "@/components/Faqs"
import GallerySection from "@/components/Gallery"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import About from "@/components/About";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

function page() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <GallerySection/>
    <WhyChooseUs/>
    <ContactSection/>
    <Faqs/>
    <Cta/>
    <Footer/>
    </>
  )
}
export default page