"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import LamotteImage from "@/assets/logo_lamotte.png";
import GiboireImage from "@/assets/logo-giboire.png";
import BlotImage from "@/assets/blot-logo.png";
import BretagneHabitatConseilImage from "@/assets/Bretagne+Habitat+Conseils.webp";
import AgenceColombierImage from "@/assets/agenceColombier.png";
import logo120Image from "@/assets/120-logo-header.png";

export function Partenaires() {
  const commitments = [
    { id: 1, title: "Lamotte", image: LamotteImage },
    { id: 2, title: "Groupe Giboire", image: GiboireImage },
    { id: 3, title: "Blot", image: BlotImage },
    { id: 4, title: "BretagneHabitatConseil", image: BretagneHabitatConseilImage },
    { id: 5, title: "AgenceColombier", image: AgenceColombierImage },
    { id: 6, title: "120-logo", image: logo120Image },
  ];

  const duplicatedCommitments = [...commitments, ...commitments]; // pour boucle fluide

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos partenaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous croyons que l'excellence passe par des collaborations solides.
            Ensemble, nous œuvrons pour offrir des services de nettoyage durables et responsables.
          </p>
        </div>

        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedCommitments.map((article, index) => (
            <Card
              key={index}
              className="min-w-[220px] max-w-[220px] shadow-elegant hover:shadow-hover transition-smooth bg-white p-4 flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-28 w-52">
                <img
                  src={article.image}
                  alt={article.title}
                  className="max-h-full max-w-full object-contain mx-auto"
                />
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
