import { useEffect } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { LuxuryLivingSection } from "@/components/home/LuxuryLivingSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  useEffect(() => {
    document.title = "Estate Elegance - Luxury Homes in Pune";
  }, []);

  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturedProperties />
      <LuxuryLivingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
