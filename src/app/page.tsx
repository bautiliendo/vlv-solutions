import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import Proyects from "@/components/sections/Proyects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className= "min-h-screen">
      <Hero />
      <ServicesSection />
      <Proyects />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}
