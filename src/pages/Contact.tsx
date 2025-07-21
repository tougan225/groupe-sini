import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export function Contact() {
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
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
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

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Demande de devis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Nom" />
                    <Input placeholder="Prénom" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Téléphone" type="tel" />
                  <Input placeholder="Sujet" />
                  <Textarea 
                    placeholder="Décrivez votre projet ou vos besoins..." 
                    className="min-h-[120px]"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Envoyer ma demande
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth">
                    <CardContent className="p-6 flex items-start space-x-4">
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
      </main>
      <Footer />
    </div>
  );
}
