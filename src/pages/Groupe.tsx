import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";
import GImage from "@/assets/legroupe.jpeg";
import G2Image from "@/assets/legroupe2.jpeg";
import G3Image from "@/assets/legroupe3.jpeg";
import G4Image from "@/assets/legroupe4.jpeg";

export default function Groupe() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <img
          src={G4Image}
          alt="Découvrir le Groupe Sini"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Nous découvrir
          </h1>
        </div>
      </section>

      {/* Section 1 : image à droite */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-primary mb-4">Le Groupe</h2>
              <p className="text-lg text-muted-foreground text-justify">
                Chez SINI, nous sommes guidés par des valeurs fondamentales qui définissent notre approche du nettoyage.
                L'intégrité est au cœur de tout ce que nous faisons, nous nous engageons à fournir des services de nettoyage honnêtes, transparents et éthiques.
                La qualité est notre priorité, nous visons l'excellence dans chaque prestation, en utilisant des produits et des techniques de nettoyage de haute qualité.
                La fiabilité est essentielle, nos clients peuvent compter sur nous pour respecter nos engagements et assurer un environnement propre et sain.
                Le professionnalisme guide nos interactions avec nos clients, notre équipe est formée, compétente et respectueuse.
                Enfin, le respect de l'environnement est au cœur de notre démarche, nous nous efforçons de minimiser notre empreinte écologique en utilisant des produits respectueux de l'environnement et des pratiques durables.
                Ces valeurs nous permettent de garantir la satisfaction de nos clients et de contribuer à un monde plus propre et plus sain.
              </p>
            </div>
            <div className="flex-1 md:max-w-md md:flex md:items-stretch mt-8 md:mt-0">
              <img
                src={GImage}
                alt="Groupe Sini"
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : image à gauche */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex-1 md:max-w-md md:flex md:items-stretch mb-8 md:mb-0">
              <img
                src={G2Image}
                alt="Groupe Sini"
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-primary mb-4">Notre engagement envers la qualité</h2>
              <p className="text-lg text-muted-foreground text-justify">
                Nous comprenons l'importance d'un environnement propre et bien entretenu pour 
                le bien-être de vos employés et la perception de vos clients.
                Notre équipe expérimentée et dévouée s'engage à fournir des services de nettoyage 
                de la plus haute qualité, adaptés à la taille et à la nature de votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : image à droite */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-primary mb-4">Notre équipe professionnelle</h2>
              <p className="text-lg text-muted-foreground text-justify">
                Notre équipe est composée de professionnels du nettoyage hautement qualifiés et fiables.
                Chacun de nos membres est formé pour utiliser les techniques et les équipements les plus 
                avancés, garantissant ainsi une prestation de services efficace et sans souci.
              </p>
            </div>
            <div className="flex-1 md:max-w-md md:flex md:items-stretch mt-8 md:mt-0">
              <img
                src={G3Image}
                alt="Groupe Sini"
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
