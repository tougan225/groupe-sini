import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart, Sun } from "lucide-react";

export function EnvironmentalSection() {
  const commitments = [
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Produits écologiques",
      description: "Utilisation exclusive de produits respectueux de l'environnement"
    },
    {
      icon: <Recycle className="h-8 w-8 text-accent" />,
      title: "Gestion des déchets",
      description: "Tri sélectif et recyclage systématique de nos déchets"
    },
    {
      icon: <Sun className="h-8 w-8 text-accent" />,
      title: "Énergies renouvelables",
      description: "Optimisation de notre consommation énergétique"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Responsabilité sociale",
      description: "Engagement local et soutien aux initiatives durables"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Engagement envers l'environnement
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous sommes conscients de notre responsabilité envers l'environnement. 
            Notre engagement envers la durabilité se reflète dans chaque aspect de notre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {commitments.map((commitment, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-smooth">
                  {commitment.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {commitment.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        <div hidden className="text-center">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
            Découvrir nos certifications
          </Button>
        </div>
      </div>
    </section>
  );
}