import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LamotteImage from "@/assets/logo_lamotte.png";
import GiboireImage from "@/assets/logo-giboire.png";
import BlotImage from "@/assets/blot-logo.png";

export function Partenaires() {
  const commitments = [
    {
      id: 1,
      title: "Lamotte",
      image: LamotteImage,
      content: "Lamotte"
    },
    {
      id: 2,
      title: "Groupe Giboire",
      image: GiboireImage,
      content: "Groupe Giboire"
    },
    {
      id: 3,
      title: "Blot",
      image: BlotImage,
      content: "Blot"
    },    
  ];

  return (
<section className="py-20 bg-secondary/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Nos partenaires
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Nous croyons que l'excellence passe par des collaborations solides. 
        C'est pourquoi nous nous entourons de partenaires qui partagent nos valeurs de qualité, de fiabilité et de respect de l'environnement. 
        Ensemble, nous œuvrons pour offrir des services de nettoyage durables et responsables, contribuant à un avenir plus propre et plus sain pour tous.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {commitments.map((article) => (
          <Card 
            key={article.id} 
            className="overflow-hidden shadow-elegant hover:shadow-hover transition-smooth bg-white p-6 flex items-center justify-center"
          >
            <div className="flex items-center justify-center h-24 w-48">
              <img 
                src={article.image} 
                alt={article.title}
                className="max-h-full max-w-full object-contain mx-auto"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>


  );
}