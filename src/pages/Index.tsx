import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { DiscoverServicesSection } from "@/components/ui/discover-services-section";
import { EnvironmentalSection } from "@/components/ui/environmental-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";
import { Partenaires } from "@/components/ui/partenaires";
//<DiscoverServicesSection />
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EnvironmentalSection />
      <Partenaires/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
