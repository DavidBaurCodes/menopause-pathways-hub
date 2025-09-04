import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  Shield, 
  Headphones, 
  Heart,
  ArrowRight,
  Zap
} from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wissensbereich",
      description: "Evidenzbasierte Artikel, Forschungsstudien und Expertenwissen zu allen Aspekten der Wechseljahre.",
      href: "#knowledge",
      color: "text-accent"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Podcasts & Medien", 
      description: "Experteninterviews, persönliche Geschichten und Workplace-Management-Anleitungen im Audioformat.",
      href: "#podcasts",
      color: "text-primary"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Betriebliche Gesundheit",
      description: "Umfassende Leitfäden für Unternehmen zur Unterstützung von Mitarbeitern in den Wechseljahren.",
      href: "#workplace", 
      color: "text-success"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Versicherungsleistungen",
      description: "Maßgeschneiderte Versicherungsoptionen und exklusive Leistungen für Wechseljahre-Gesundheit.",
      href: "#benefits",
      color: "text-warning"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gemeinschaftsunterstützung",
      description: "Vernetzen Sie sich mit anderen, teilen Sie Erfahrungen und finden Sie Unterstützung in unserer Gemeinschaft.",
      href: "#community",
      color: "text-primary-light"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Personalisierte Tools",
      description: "Interaktive Bewertungen und maßgeschneiderte Ressourcen basierend auf Ihrer individuellen Wechseljahre-Reise.",
      href: "#journey",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
            Alles was Sie für Ihre <span className="text-gradient">Wechseljahre-Begleitung</span> brauchen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Von personalisierten Bewertungen bis hin zur betrieblichen Unterstützung bieten wir 
            umfassende Ressourcen, die Sie durch jede Phase der Wechseljahre stärken.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-primary-dark group/btn"
                  asChild
                >
                  <a href={feature.href}>
                    Mehr erfahren 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Bereit zu starten?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Schließen Sie sich tausenden von Frauen an, die durch unsere umfassenden 
              Wechseljahre-Ressourcen Unterstützung, Wissen und Stärkung gefunden haben.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="gradient-primary text-white shadow-medium w-full sm:w-auto">
                Assessment machen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                Ressourcen durchstöbern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;