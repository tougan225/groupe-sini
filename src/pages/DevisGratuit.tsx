import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  FileText, 
  Phone, 
  Mail,
  Calculator
} from "lucide-react";

export default function DevisGratuit() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const services = [
    {
      id: "nettoyage-professionnel",
      name: "Nettoyage professionnel",
      description: "Nettoyage complet de tous types d'espaces résidentiels et commerciaux, avec des méthodes efficaces et écologiques.",
      icon: "🏢"
    },
    {
      id: "espaces-verts",
      name: "Espaces verts",
      description: "Entretien, tonte, taille et aménagement de vos espaces verts avec respect de l'environnement.",
      icon: "🌱"
    },
    {
      id: "gestion-dechets",
      name: "Gestion des déchets",
      description: "Collecte et évacuation de déchets verts, encombrants ou gravats pour garder vos espaces propres.",
      icon: "🗑️"
    },
    {
      id: "assainissement-non-collectif",
      name: "Assainissement non collectif",
      description: "Diagnostics, études de sol et contrôles pour vos installations d’assainissement non collectif.",
      icon: "🚰"
    },
    {
      id: "multi-services",
      name: "Multi-services",
      description: "Montage de meubles, petites réparations, changements de joints, filtres et ampoules selon vos besoins.",
      icon: "🔧"
    }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4"><br /><br />
          <div className="max-w-3xl">
            <a href="/devis-gratuit">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Devis gratuit
              </h1>
            </a>
            <p className="text-lg text-muted-foreground">
              Obtenez votre devis personnalisé en quelques minutes. 
              Notre équipe vous contactera sous 24h pour finaliser votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 max-w-2xl mx-auto">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= number 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > number ? <CheckCircle className="h-5 w-5" /> : number}
                </div>
                {number < 3 && (
                  <div className={`w-12 h-0.5 ${
                    step > number ? 'bg-accent' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm text-muted-foreground">
              Étape {step} sur 3: {
                step === 1 ? "Services" : 
                step === 2 ? "Détails du projet" : 
                "Vos coordonnées"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <FileText className="h-6 w-6 mr-3" />
                    Sélectionnez vos services
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Choisissez un ou plusieurs services qui correspondent à vos besoins
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedServices.includes(service.id) 
                          ? 'border-accent bg-accent/5' 
                          : 'border-border hover:border-accent/50'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-start space-x-4">
                        <Checkbox 
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{service.icon}</span>
                            <h3 className="font-semibold text-primary">{service.name}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={nextStep}
                      disabled={selectedServices.length === 0}
                      className="bg-accent hover:bg-accent/90"
                    >
                      Continuer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Calculator className="h-6 w-6 mr-3" />
                    Détails de votre projet
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Aidez-nous à mieux comprendre vos besoins pour un devis précis
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Surface approximative (m²)</label>
                      <Input placeholder="ex: 100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Fréquence souhaitée</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Ponctuel</option>
                        <option>Hebdomadaire</option>
                        <option>Bi-mensuel</option>
                        <option>Mensuel</option>
                        <option>Trimestriel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description de vos besoins</label>
                    <Textarea 
                      placeholder="Décrivez votre projet, vos contraintes particulières, vos attentes..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Date souhaitée de début</label>
                    <Input type="date" />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep}>
                      Retour
                    </Button>
                    <Button onClick={nextStep} className="bg-accent hover:bg-accent/90">
                      Continuer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Phone className="h-6 w-6 mr-3" />
                    Vos coordonnées
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Dernière étape pour recevoir votre devis personnalisé
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom *</label>
                      <Input placeholder="Votre nom" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom *</label>
                      <Input placeholder="Votre prénom" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="votre.email@exemple.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone *</label>
                    <Input type="tel" placeholder="07 52 28 71 14" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Société (optionnel)</label>
                    <Input placeholder="Nom de votre entreprise" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Adresse du projet *</label>
                    <Textarea 
                      placeholder="Adresse complète où les services seront réalisés"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Checkbox />
                      <div className="text-sm text-muted-foreground">
                        J'accepte d'être contacté par GROUPE SINI pour le suivi de ma demande 
                        et je consens au traitement de mes données personnelles. *
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep}>
                      Retour
                    </Button>
                    <Button className="bg-accent hover:bg-accent/90 px-8">
                      Envoyer ma demande
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Besoin d'aide pour votre devis ?
            </h2>
            <p className="text-muted-foreground">
              Notre équipe est à votre disposition pour vous accompagner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="shadow-elegant text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Appelez-nous</h3>
                <p className="text-muted-foreground">07 52 28 71 14</p>
                <p className="text-sm text-muted-foreground">24h/24, 7j/7</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Écrivez-nous</h3>
                <p className="text-muted-foreground">contact@groupesini.com</p>
                <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}