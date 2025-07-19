import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Calendar, ArrowLeft } from "lucide-react";
import GImage from "@/assets/actualites.png";

export default function Actualites() {
  const articles = [
    {
      id: 1,
      title: "Faites dès maintenant nettoyez vos tissus",
      excerpt: [ <b>Offrez une seconde jeunesse à votre canapé avec notre service de nettoyage professionnel ! Au fil du temps, il peut accumuler des taches, de la saleté et des odeurs sur votre canapé. C'est là que nous intervenons pour lui redonner son éclat d'origine. Pourquoi choisir notre service de nettoyage ? </b>,
      "➡ Nettoyage en profondeur : Notre équipe de spécialistes utilise des techniques de nettoyage avancées pour éliminer efficacement la saleté, les taches et les allergènes de votre canapé, assurant une propreté en profondeur. ",
      "➡ Élimination des odeurs : Nous ne nous contentons pas de nettoyer les taches visibles, mais nous nous attaquons également aux odeurs indésirables, laissant votre canapé frais et agréable. ",
      "➡ Protection du tissu : Nous utilisons des produits de nettoyage qui préservent la texture et la couleur d'origine de votre canapé, tout en le protégeant contre de futurs dommages. ",
      "➡ Service sur mesure : Chaque canapé est unique, c'est pourquoi nous adaptons notre service en fonction de vos besoins spécifiques, garantissant une satisfaction totale à chaque intervention. ",
      <b>Contactez-nous dès maintenant pour réserver notre service de nettoyage de canapé et redécouvrez le plaisir de vous détendre dans un espace propre et revitalisé !"</b>],
      date: "06 Mars 2024",
      category: "Entretien",
      image: GImage,
      content: "Actus pour vos tissus"
    },
   
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environnement": return "bg-green-100 text-green-800";
      case "Expansion": return "bg-blue-100 text-blue-800";
      case "Innovation": return "bg-purple-100 text-purple-800";
      case "Partenariat": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Actualités</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Suivez les dernières nouvelles de GROUPE SINI : nos innovations, 
            certifications, et engagements pour un service toujours plus performant.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden shadow-elegant hover:shadow-hover transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary hover:text-accent transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                   {article.excerpt.map((line, index) => (
                    <p key={index} className="text-gray-700 text-justify mb-1">{line}</p>
                      ))}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}