import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, CheckCircle, Award } from "lucide-react";
import cleaningImage from "@/assets/service-cleaning.jpg";
import landscapingImage from "@/assets/service-landscaping.jpg";
import AssainissementImage from "@/assets/assainissement.png";
import flexImage from "@/assets/service-flex.jpg";
import DechetsImage from "@/assets/dechets.jpg";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export function Services() {
  const mainServices = [
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
      ],
      highlight: "Jusqu'à 20% d'économies avec nos contrats annuels"
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
      ],
      highlight: "Devis paysager gratuit avec visite sur site"
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
      ],
      highlight: "Devis gestion des déchets gratuit avec visite sur site"
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
      ],
      highlight: "Devis d’assainissement gratuit avec visite sur site"
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
      ],
      highlight: "Réactivité garantie sous 2h en urgence"
    }
  ];

  const advantages = [
    "✓ Équipe qualifiée et assurée",
    "✓ Matériel professionnel fourni",
    "✓ Produits écologiques certifiés",
    "✓ Intervention 7j/7 si besoin"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />  

    <section className="py-20 bg-gradient-to-br from-secondary/20 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-accent mr-3" />
            <Badge className="bg-accent/10 text-accent px-4 py-2 text-sm font-medium">
              Découvrez nos services
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Des solutions qui font la différence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GROUPE SINI vous accompagne avec des services professionnels adaptés à vos besoins. 
            Découvrez comment nous transformons vos espaces avec excellence et respect de l'environnement.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-16 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                {/* Highlight Badge */}
                <div className="absolute -bottom-4 left-4 right-4">
                  <div className="bg-accent text-white p-3 rounded-lg shadow-lg text-center">
                    <p className="text-sm font-medium">{service.highlight}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <Card className="shadow-elegant bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold">Pourquoi choisir GROUPE SINI ?</h3>
                </div>
                <p className="text-primary-foreground/90 text-lg mb-6"> 
                  Nous nous engageons à dépasser vos attentes avec des solutions innovantes et durables.
                </p>
                <div className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <p key={index} className="text-primary-foreground/90 font-medium">
                      {advantage}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block bg-accent/20 p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-accent mb-2">24h</div>
                  <p className="text-primary-foreground/90">Délai de réponse moyen</p>
                </div>
                <div className="mt-6">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <ArrowRight className="ml-2 h-5 w-5" />
                    <a href="/devis-gratuit">
                       Demander un devis gratuit
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

          <Footer />
        </div>
  );
}