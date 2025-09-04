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
  const healthFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medizinische Experten",
      description: "Finden Sie qualifizierte Fachärzte und Therapeuten für Frauengesundheit in Ihrer Nähe.",
      href: "/medical-experts",
      color: "text-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hormontherapie & Telemedizin",
      description: "Umfassende Beratung zu Hormonbehandlungen und digitale Gesundheitsdienste für flexible Betreuung.",
      href: "/hormontherapie",
      color: "text-accent"
    }
  ];

  const lifestyleFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bewegung",
      description: "Virtuelle und Präsenz-Gruppensuche für Bewegungskurse und Präventionskurse der AOK PLUS.",
      href: "/bewegung",
      color: "text-success"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ernährung",
      description: "Individuelle Ernährungsberatung online oder vor Ort mit AOK PLUS Angeboten.",
      href: "/ernaehrung",
      color: "text-primary-light"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Wellness",
      description: "Me-Time Strategien, Stressbewältigung und Achtsamkeits-Apps für Ihr Wohlbefinden.",
      href: "/wellness",
      color: "text-accent"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Psyche",
      description: "Lebensphasenbezogene Frauengesundheit und psychologische Unterstützung.",
      href: "/psyche",
      color: "text-warning"
    }
  ];

  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Verbinden Sie sich mit Gleichgesinnten, teilen Sie Erfahrungen und bauen Sie unterstützende Netzwerke auf.",
      href: "#community-building",
      color: "text-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Life Hacks - Tipps",
      description: "Von Brainfog bis Hitzewallungen: Entdecke clevere Alltagstipps und Strategien, die dir helfen, dich wieder wohl in deinem Körper zu fühlen.",
      href: "#life-hacks",
      color: "text-success"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Allies - Partner",
      description: "Informationen und Ressourcen für Partner, Familie, Freunde und Arbeitgebende von betroffenen Frauen.",
      href: "#allies",
      color: "text-warning"
    }
  ];

  const workplaceFeatures = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Arbeitskultur mit Weitblick",
      description: "Von anpassbaren Arbeitszeiten über Rückzugsräume bis hin zu sensibler Führungskultur. Entscheidend ist, gemeinsam mit den betroffenen Mitarbeitenden passgenaue Lösungen zu entwickeln, die sowohl das Wohlbefinden stärken als auch die Arbeitsfähigkeit erhalten. So wird Verhältnisprävention zur gelebten Realität – und der Arbeitsplatz zu einem Ort echter Fürsorge.",
      href: "#workplace-culture", 
      color: "text-primary-light"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dein Berufsalltag - deine Strategie",
      description: "Wechseljahre und Job? Geht klar – wenn du weißt, was dir guttut. Hier findest du erste Ideen, wie du deinen Arbeitsalltag aktiv, fit und motiviert gestalten kannst.",
      href: "#work-strategies",
      color: "text-accent"
    }
  ];

  const mediaFeatures = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Medien", 
      description: "Noch Fragen - Wir haben weiterführende Antworten: Blogs, Videos, Podcast, Literatur-Empfehlungen, LinkedIn-Posts, Socialmedia-Kanäle, Telefonberatung und Plakate.",
      href: "#media-channels",
      color: "text-primary"
    }
  ];

  const insuranceFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Meine AOK PLUS",
      description: "Exklusive Leistungen für Wechseljahre-Gesundheit.",
      href: "#benefits",
      color: "text-warning"
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

        {/* Medizinische Unterstützung */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Medizinische Unterstützung</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {healthFeatures.map((feature, index) => (
              <Card 
                key={`health-${index}`} 
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
                    size="sm"
                    className="justify-start px-0 font-medium text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
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
        </div>

        {/* mein Wohlbefinden */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">mein Wohlbefinden</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleFeatures.map((feature, index) => (
              <Card 
                key={`lifestyle-${index}`} 
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
                    size="sm"
                    className="justify-start px-0 font-medium text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
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
        </div>

        {/* Community & Unterstützung */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Community & Unterstützung</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityFeatures.map((feature, index) => (
              <Card 
                key={`community-${index}`} 
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
                    size="sm"
                    className="justify-start px-0 font-medium text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
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
          
          {/* Community Call-to-Action */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3">
                Bereit zu starten?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-xl mx-auto">
                Schließen Sie sich tausenden von Frauen an, die durch unsere umfassenden Wechseljahre-Ressourcen Unterstützung, Wissen und Stärkung gefunden haben.
              </p>
              <Button size="sm" className="gradient-primary text-white shadow-medium" asChild>
                <a href="/community">Community beitreten</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Betriebliche Lösungen */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Betriebliche Lösungen</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {workplaceFeatures.map((feature, index) => (
              <Card 
                key={`workplace-${index}`} 
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
                    size="sm"
                    className="justify-start px-0 font-medium text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
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
        </div>

        {/* Medien */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Medien</h3>
          <div className="grid sm:grid-cols-1 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card 
                key={`media-${index}`} 
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
                    size="sm"
                    className="justify-start px-0 font-medium text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
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
          
          {/* Weitere Informationskanäle */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3">
                Weitere Informationskanäle
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-xl mx-auto">
                Entdecken Sie verschiedene Wege, um mehr über die Wechseljahre zu erfahren und sich mit unserer Community zu vernetzen.
              </p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                Alle Kanäle entdecken
              </Button>
            </div>
          </div>
        </div>

        {/* Versicherung */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-primary">Versicherung</h3>
          <div className="grid sm:grid-cols-1 gap-6">
            {insuranceFeatures.map((feature, index) => (
              <Card 
                key={`insurance-${index}`} 
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
                    size="sm"
                    className="justify-start px-0 font-medium text-primary hover:text-primary/80 hover:bg-primary/5 group/btn"
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
        </div>

        {/* Main Call to action - moved to end */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Ihre Wechseljahre-Reise beginnt hier
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Entdecken Sie maßgeschneiderte Unterstützung, fachkundige Beratung und eine starke Gemeinschaft, 
              die Sie auf Ihrem Weg durch die Wechseljahre begleitet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="gradient-primary text-white shadow-medium w-full sm:w-auto" asChild>
                <a href="/assessment">Begleitung starten</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto" asChild>
                <a href="/knowledge">Ressourcen erkunden</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;