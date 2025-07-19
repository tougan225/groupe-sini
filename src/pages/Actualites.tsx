import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Calendar, ArrowLeft } from "lucide-react";

export default function Actualites() {
  const articles = [
    {
      id: 1,
      title: "Nouvelle certification environnementale obtenue",
      excerpt: "GROUPE SINI obtient la certification ISO 14001 pour son engagement environnemental exceptionnel.",
      date: "15 Mars 2024",
      category: "Environnement",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      content: "Nous sommes fiers d'annoncer l'obtention de notre certification ISO 14001, témoignant de notre engagement constant pour la protection de l'environnement..."
    },
    {
      id: 2,
      title: "Extension de nos services dans la région Île-de-France",
      excerpt: "Découvrez nos nouveaux services disponibles dans toute la région parisienne.",
      date: "8 Mars 2024",
      category: "Expansion",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      content: "Grâce à la confiance de nos clients, nous étendons notre zone d'intervention à toute l'Île-de-France..."
    },
    {
      id: 3,
      title: "Nouveaux équipements écologiques",
      excerpt: "Investissement dans du matériel de dernière génération respectueux de l'environnement.",
      date: "1 Mars 2024",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      content: "Nous continuons à investir dans des équipements innovants et écologiques pour améliorer la qualité de nos services..."
    },
    {
      id: 4,
      title: "Partenariat avec des fournisseurs locaux",
      excerpt: "Renforcement de notre engagement local avec de nouveaux partenariats durables.",
      date: "20 Février 2024",
      category: "Partenariat",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
      content: "Notre nouvelle stratégie de partenariats locaux nous permet de soutenir l'économie régionale..."
    }
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
          <div className="flex items-center mb-6">
            <Button variant="ghost" className="mr-4" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </div>
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
                    {article.excerpt}
                  </p>
                  <Button variant="outline" className="hover:bg-accent hover:text-white transition-smooth">
                    Lire la suite
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}