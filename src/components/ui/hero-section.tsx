import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Le service qui s'adapte à vos besoins
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Solutions professionnelles personnalisées pour l'entretien de vos espaces
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg"
            onClick={() => window.location.href = "#services"}
          >
            Découvrir nos services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => window.location.href = "/devis-gratuit"}
            size="lg"
            variant="outline"
            className="border-white/30 text-red-500 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
          >
            Devis gratuit
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}