import Slider from "@/components/Slider/Slider";
import AboutSection from "@/components/About/AboutSection";
import ServicesSection from "@/components/Service/ServicesSection"
import MenuSection from "@/components/Menu/MenuSection";
import ReservationSection from "@/components/Reservation/ReservationSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

export default function Home() {
  
  return (
    <>
      <Slider />
      <AboutSection/>
      <ServicesSection />
      <MenuSection />
      <ReservationSection />
      <TestimonialsSection />
    </>
  );
}
