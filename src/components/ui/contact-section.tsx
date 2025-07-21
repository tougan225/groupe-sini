import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      details: ["07 52 28 71 14"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["contact@groupesini.com"]
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Adresse",
      details: ["41 RUE BERTHE MORISOT", "35131 CHARTRES-DE-BRETAGNE, France"]    
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horaires",
      details: ["24h/24", "7j/7"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à transformer vos espaces ? Contactez-nous pour un devis personnalisé 
            et découvrez comment nous pouvons vous accompagner.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="space-y-6 w-full max-w-md">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth">
                <CardContent className="p-6 flex items-start space-x-6">
                  <div className="flex-shrink-0 text-accent">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
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