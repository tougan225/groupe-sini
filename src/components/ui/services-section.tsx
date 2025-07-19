import { ServiceCard } from "@/components/ui/service-card";
import cleaningImage from "@/assets/service-cleaning.jpg";
import landscapingImage from "@/assets/service-landscaping.jpg";
import flexImage from "@/assets/service-flex.jpg";

export function ServicesSection() {
  const services = [
    {
      title: "Nettoyage",
      description: "Services de nettoyage professionnel pour tous types d'espaces commerciaux et résidentiels.",
      image: cleaningImage,
      features: [
        "Nettoyage de bureaux",
        "Entretien d'immeubles",
        "Nettoyage après travaux",
        "Produits écologiques"
      ]
    },
    {
      title: "Espaces verts",
      description: "Entretien et aménagement de vos espaces verts avec une approche respectueuse de l'environnement.",
      image: landscapingImage,
      features: [
        "Tonte et entretien pelouse",
        "Taille d'arbres et arbustes",
        "Aménagement paysager",
        "Jardinage écologique"
      ]
    },
    {
      title: "Services flexibles",
      description: "Solutions sur mesure qui s'adaptent à vos besoins spécifiques et à votre planning.",
      image: flexImage,
      features: [
        "Interventions ponctuelles",
        "Services combinés",
        "Planning personnalisé",
        "Devis adaptatif"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services professionnels, 
            conçus pour répondre à tous vos besoins d'entretien et d'aménagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}