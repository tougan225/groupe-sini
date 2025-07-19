import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import IcoImage from "@/assets/favicon.png";
import { Link } from "react-router-dom";

export function Footer() {
  const services = [
    "Nettoyage de bureaux",
    "Entretien d'immeubles",
    "Espaces verts",
    "Services flexibles"
  ];

  const company = [
    "À propos",
    "Notre équipe",
    "Nos certifications",
    "Carrières"
  ];

  const support = [
    "Contact",
    "Devis gratuit",
    "FAQ",
    "Zone d'intervention"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-12 gap-y-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={IcoImage}
                alt="Groupe Sini Logo"
                className="h-12 w-12 rounded-md object-cover"
              />
              <span className="font-bold text-3xl align-middle text-white">GROUPE SINI</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-sm">
              Solutions professionnelles personnalisées pour l'entretien de vos espaces avec un engagement fort envers l'environnement.
            </p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61554181028524"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/groupesini/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/company/groupe-sini/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer" />
                </a>
              </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 mb-4">
            {support.map((item, index) => (
              <li key={index}>
                <a
                  href={item === "Devis gratuit" ? "/devis-gratuit" : "#"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Phone className="h-4 w-4" />
              <span>01 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <span>contact@groupesini.fr</span>
            </div>
          </div>
        </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60">
          <p>&copy; 2025 Groupe SINI. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}