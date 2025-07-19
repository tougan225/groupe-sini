import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LogoImage from "@/assets/groupesini.png";
import { Link } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "À propos", href: "/about" },
     { label: "Le Groupe", href: "/groupe" },
    { label: "Services", href: "/services" },
    { label: "Actualités", href: "/actualites" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={LogoImage}
              alt="Groupe Sini Logo"
              className="h-28 w-28 rounded-md object-cover"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium">
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              <a href="/devis-gratuit" className="text-white">
                Devis gratuit
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="bg-accent hover:bg-accent/90 w-fit">
                <a href="/devis-gratuit" className="text-white">
                  Devis gratuit
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}