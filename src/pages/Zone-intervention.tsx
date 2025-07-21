import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { MapPin } from "lucide-react";
import BretagneImage from "@/assets/bretagne.png";

export default function ZoneIntervention() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-24 pb-12 bg-secondary/30 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Zone d'intervention</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos zones d'intervention en Bretagne pour tous nos services professionnels.
        </p>
      </section>

      {/* Carte de la Bretagne */}
        <section className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4">
            <div className="rounded-lg overflow-hidden">
            <img
                src={BretagneImage}
                alt="Zone d'intervention en Bretagne"
                className="w-full max-w-3xl h-auto rounded-lg shadow mx-auto"
            />
            </div>
        </div>
        </section>
      <Footer />
    </div>
  );
}