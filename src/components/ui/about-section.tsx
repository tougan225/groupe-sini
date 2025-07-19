import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Leaf } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Équipe experte",
      description: "Des professionnels qualifiés et formés aux dernières techniques"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Qualité garantie",
      description: "Excellence et satisfaction client au cœur de nos priorités"
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Éco-responsable",
      description: "Produits et méthodes respectueux de l'environnement"
    }
  ];

  const advantages = [
    "Solutions personnalisées selon vos besoins",
    "Intervention rapide et efficace",
    "Tarifs transparents et compétitifs",
    "Service client disponible et réactif"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Notre approche
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Chez GROUPE SINI, nous comprenons que chaque client a des besoins uniques. 
              C'est pourquoi nous offrons des solutions personnalisées pour répondre 
              spécifiquement à vos exigences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Notre objectif est de surpasser vos attentes à chaque étape, 
              garantissant une satisfaction totale et des résultats durables.
            </p>

            <div className="space-y-3 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">{advantage}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90">
              En savoir plus sur nous
            </Button>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}