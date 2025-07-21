import { ServiceCard } from "@/components/ui/service-card";
import cleaningImage from "@/assets/service-cleaning.jpg";
import landscapingImage from "@/assets/service-landscaping.jpg";
import DechetsImage from "@/assets/dechets.jpg";
import flexImage from "@/assets/service-flex.jpg";
import AssainissementImage from "@/assets/assainissement.png";

export function ServicesSection() {
  const services = [
    {
      title: "Nettoyage professionnel",
      description: "Services de nettoyage professionnel pour tous types d'espaces commerciaux et résidentiels.",
      image: cleaningImage,
      features: [
        "Nettoyage de bureaux",
        "Entretien d'immeubles",
        "Nettoyage après travaux",
        "Nettoyage extrême",
        "Nettoyage haute pression",
        "Nettoyage de vitres",
        "Ménage à domicile",
        "Nettoyage de tissus",
        "Entretien de locaux",
        "Nettoyage de copropriété",
        "Entretien locatif"
      ]
    },
    {
      title: "Espaces verts",
      description: "Entretien et aménagement de vos espaces verts avec une approche respectueuse de l'environnement.",
      image: landscapingImage,
      features: [
        "Tonte et entretien pelouse",
        "Taille de haies et d'arbustes",
        "Ramassage de feuilles",
        "débroussaillage"
      ]
    },
    {
      title: "Gestion des déchets",
      description: "Nous assurons la collecte et l’évacuation de déchets non dangereux, déchets verts, encombrants ou gravats de chantier, pour garder vos espaces propres et dégagés en toute simplicité.",
      image: DechetsImage,
      features: [
        "Collecte et enlèvement de déchets non dangereux",
        "Collecte de déchets verts",
        "Évacuation de déchets de chantier ou de locaux",
        "débarras d'évacuation de déchets encombrants"
      ]
    },
    {
      title: "Assainissement non collectif",
      description: "Nous réalisons le diagnostic de vos installations, les études de sol et de faisabilité, ainsi que le contrôle des conceptions et des travaux. Bénéficiez d’un accompagnement complet pour un système conforme, efficace et durable.",
      image: AssainissementImage,
      features: [
        "Réalisation de diagnostics de filières existant", 
        "Études de faisabilité ou de sol pour la mise en place d’un ANC", 
        "Contrôle de conception (études préalables pour le SPANC)",
        "Contrôle de bonne exécution des travaux"
      ]
    },  
    {
      title: "Multi services",
      description: "Solutions sur mesure qui s'adaptent à vos besoins spécifiques et à votre planning.",
      image: flexImage,
      features: [
        "Réfection de joint",
        "Montage de meuble",
        "Réparation simple (poignée de serrure fuite d'eau légère)",
        "changement de filtre de hotte",
        "changement d'ampoule",
        "changement de flexible de douche"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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