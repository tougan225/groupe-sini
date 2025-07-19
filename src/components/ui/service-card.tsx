import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export function ServiceCard({ title, description, image, features }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden shadow-elegant hover:shadow-hover transition-smooth">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 service-gradient"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-smooth">
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}