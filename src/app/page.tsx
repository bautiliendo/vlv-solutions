import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-8">
        <ServicesSection />
      </div>
    </div>
  );
}
