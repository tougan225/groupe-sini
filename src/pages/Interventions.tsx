import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

import GImage from "@/assets/actualites.png";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type Article = {
  id: number;
  title: string;
  excerpt: (string | JSX.Element)[];
  date: string;
  category: string;
  media: MediaItem[];
  content: string;
};

export default function Interventions() {
  const articles: Article[] = [
    {
      id: 1,
      title: "Nettoyage professionnel",
      excerpt: [
        "Services de nettoyage professionnel pour tous types d'espaces commerciaux et résidentiels.",
      ],
      date: "06 Mars 2024",
      category: "Nettoyage professionnel",
      media: [
        { type: "image", src: GImage, alt: "Nettoyage pro" },
        { type: "image", src: "/assets/cleaning2.jpg", alt: "Autre vue" },
        { type: "video", src: "/assets/cleaning-video.mp4" },
      ],
      content: "Service de nettoyage complet",
    },
    {
      id: 2,
      title: "Espaces verts",
      excerpt: [
        "Entretien et aménagement de vos espaces verts avec une approche respectueuse de l'environnement.",
      ],
      date: "15 Avril 2024",
      category: "Espaces verts",
      media: [
        { type: "image", src: GImage, alt: "Espaces verts" },
        { type: "video", src: "/assets/green-video.mp4" },
      ],
      content: "Gestion et entretien des espaces verts",
    },
    // ... autres articles
  ];

  // Regroupement par catégorie
  const groupedArticles = articles.reduce<Record<string, Article[]>>((acc, article) => {
    if (!acc[article.category]) acc[article.category] = [];
    acc[article.category].push(article);
    return acc;
  }, {});

  // États pour Lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  // Slides Lightbox selon catégorie sélectionnée (images + vidéos)
  const slides = currentCategory
    ? groupedArticles[currentCategory].flatMap((article) =>
        article.media.map((media) => ({
          type: media.type === "video" ? "video" : "image",
          src: media.src,
          title: article.title,
        }))
      )
    : [];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environnement":
        return "bg-green-100 text-green-800";
      case "Expansion":
        return "bg-blue-100 text-blue-800";
      case "Innovation":
        return "bg-purple-100 text-purple-800";
      case "Partenariat":
        return "bg-orange-100 text-orange-800";
      case "Entretien":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Nos Interventions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Suivez les dernières nouvelles de GROUPE SINI : nos engagements pour un service toujours plus performant.
          </p>
        </div>
      </section>

      {/* Galerie par catégorie */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {Object.entries(groupedArticles).map(([category, articles]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Badge className={getCategoryColor(category)}>{category}</Badge>
                <span>{category}</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {articles.map((article, idx) => {
                  const firstImage = article.media.find((m) => m.type === "image");
                  return (
                    <Card
                      key={article.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => {
                        setCurrentCategory(category);
                        setIndex(idx);
                        setOpen(true);
                      }}
                    >
                      {firstImage ? (
                        <img
                          src={firstImage.src}
                          alt={firstImage.alt || article.title}
                          className="rounded-t-md w-full h-48 object-cover"
                        />
                      ) : (
                        <div className="rounded-t-md w-full h-48 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">Pas d’image</span>
                        </div>
                      )}
                      <div className="p-4">
                        {/* Si tu veux cacher le titre, supprime la ligne suivante */}
                        {/* <h3 className="text-lg font-semibold text-black">{article.title}</h3> */}
                        <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                        {article.excerpt.map((line, i) =>
                          typeof line === "string" ? (
                            <p key={i} className="text-sm mb-1">
                              {line}
                            </p>
                          ) : (
                            <span key={i} className="block mb-1">
                              {line}
                            </span>
                          )
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        onIndexChange={setIndex}
        plugins={[Thumbnails]}
      />

      <Footer />
    </div>
  );
}
