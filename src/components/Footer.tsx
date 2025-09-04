import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import aokPlusLogo from "@/assets/AOK_PLUS_Signet_Gruen_RGB.png";

const Footer = () => {
  const quickLinks = [
    { title: "Wechseljahre-Begleiter", href: "#journey" },
    { title: "Wissensbereich", href: "#knowledge" },
    { title: "Podcasts", href: "#podcasts" },
    { title: "Betriebliche Gesundheit", href: "#workplace" },
  ];

  const supportLinks = [
    { title: "Gemeinschaftsforen", href: "#community" },
    { title: "Versicherungsleistungen", href: "#benefits" },
    { title: "Support kontaktieren", href: "#contact" },
    { title: "Impressum", href: "#impressum" },
    { title: "Datenschutzerklärung", href: "#privacy" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={aokPlusLogo} alt="AOK PLUS Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-gradient">AOK PLUS</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Wir unterstützen Einzelpersonen und Arbeitsplätze mit umfassendem Wechseljahre-Support, 
              Ressourcen und Versicherungslösungen für jede Phase der Reise.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold">In Verbindung bleiben</h4>
              <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="E-Mail eingeben"
                  className="flex-1"
                />
                <Button className="gradient-primary text-white w-full sm:w-auto">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Unterstützung</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Rufen Sie uns an</div>
                <div className="text-sm text-muted-foreground">0800-AOK-PLUS</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">E-Mail</div>
                <div className="text-sm text-muted-foreground">wechseljahre@aokplus.de</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Besuchen Sie uns</div>
                <div className="text-sm text-muted-foreground">Gesundheitszentrum</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 AOK PLUS. Alle Rechte vorbehalten.
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Gemacht mit</span>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <span>für Frauengesundheit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;