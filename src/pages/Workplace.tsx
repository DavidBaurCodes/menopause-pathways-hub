import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Building2, CheckCircle, ArrowRight, Download, Settings } from "lucide-react";

const Workplace = () => {
  const workplaceHacks = [
    {
      category: "Umgebung",
      title: "Bean Bags & Komfort-Zonen",
      description: "Entspannte Rückzugsmöglichkeiten für Pausen und bei akuten Beschwerden.",
      implementation: "Einfach"
    },
    {
      category: "Räumlichkeiten", 
      title: "Ruheräume einrichten",
      description: "Ruhige Bereiche für Entspannung, Meditation oder kurze Erholungspausen.",
      implementation: "Mittel"
    },
    {
      category: "Flexibilität",
      title: "Home-Office Optionen",
      description: "Flexible Arbeitsplatzregelung für Tage mit stärkeren Beschwerden.",
      implementation: "Einfach"
    },
    {
      category: "Kommunikation",
      title: "Wechseljahre Office Hours", 
      description: "Regelmäßige Sprechstunden für Fragen und Beratung zum Thema Wechseljahre.",
      implementation: "Einfach"
    },
    {
      category: "Klima",
      title: "Temperaturkontrolle",
      description: "Individuelle Klimaregelung oder Ventilation für Hitzewallungen.",
      implementation: "Mittel"
    },
    {
      category: "Gesundheit",
      title: "Betriebsärztliche Beratung",
      description: "Spezialisierte medizinische Unterstützung und Beratung im Unternehmen.",
      implementation: "Komplex"
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Bedarfsanalyse durchführen",
      description: "Mitarbeiterbefragung und Analyse der aktuellen Situation",
      duration: "2-4 Wochen"
    },
    {
      step: "2", 
      title: "Richtlinien entwickeln",
      description: "Arbeitsplatz-Policy und Unterstützungsmaßnahmen definieren",
      duration: "3-6 Wochen"
    },
    {
      step: "3",
      title: "Führungskräfte schulen",
      description: "Sensibilisierung und Schulung des Managements",
      duration: "1-2 Wochen"
    },
    {
      step: "4",
      title: "Pilot-Programm starten",
      description: "Testphase mit ausgewählten Abteilungen",
      duration: "8-12 Wochen"
    },
    {
      step: "5",
      title: "Unternehmensweite Einführung",
      description: "Vollständige Implementierung und Kommunikation",
      duration: "4-8 Wochen"
    },
    {
      step: "6",
      title: "Monitoring & Anpassung",
      description: "Kontinuierliche Überwachung und Verbesserung",
      duration: "Fortlaufend"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Betriebliches Gesundheitsmanagement | AOK PLUS - Wechseljahre am Arbeitsplatz</title>
        <meta name="description" content="Umfassende Lösungen für Unternehmen zur Unterstützung von Mitarbeitern in den Wechseljahren. Von Workplace-Hacks bis zu strukturierten Implementierungsplänen." />
        <meta name="keywords" content="Betriebliches Gesundheitsmanagement, Wechseljahre Arbeitsplatz, HR Lösungen, Mitarbeiterunterstützung, AOK PLUS" />
        
        <meta property="og:title" content="Betriebliches Gesundheitsmanagement Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Workplace-Lösungen für Wechseljahre-Unterstützung im Unternehmen" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Betriebliches Gesundheitsmanagement - Wechseljahre",
            "description": "Comprehensive workplace solutions for menopause support in companies",
            "url": "https://aokplus-wechseljahre.de/workplace"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4 text-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Betriebliches <span className="text-gradient">Gesundheitsmanagement</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Schaffen Sie eine unterstützende Arbeitsumgebung für Frauen in den Wechseljahren. 
                Von einfachen Workplace-Hacks bis zu umfassenden Unternehmensrichtlinien.
              </p>
            </div>
          </section>

          {/* Quick Implementation Hacks */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                Sofort umsetzbare Workplace-Hacks
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Einfache Maßnahmen, die Sie heute implementieren können, um Ihre Arbeitsumgebung 
                wechseljahre-freundlicher zu gestalten.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workplaceHacks.map((hack, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {hack.category}
                        </Badge>
                        <Badge 
                          variant={hack.implementation === 'Einfach' ? 'default' : hack.implementation === 'Mittel' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {hack.implementation}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {hack.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {hack.description}
                      </CardDescription>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-dark group/btn">
                        Umsetzung planen
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Schritt-für-Schritt Implementierungsleitfaden
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                  Strukturierte Anleitung für die Einführung eines umfassenden 
                  Wechseljahre-Unterstützungsprogramms in Ihrem Unternehmen.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {implementationSteps.map((step, index) => (
                    <Card key={index} className="relative group hover:shadow-medium transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-105 transition-transform">
                          {step.step}
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="leading-relaxed">
                          {step.description}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span>{step.duration}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ressourcen & Vorlagen
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Laden Sie praktische Vorlagen, Checklisten und Leitfäden für Ihr Unternehmen herunter.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Download className="w-6 h-6" />,
                    title: "Policy-Vorlage",
                    description: "Muster-Richtlinie für Wechseljahre-Unterstützung",
                    type: "PDF"
                  },
                  {
                    icon: <Settings className="w-6 h-6" />,
                    title: "HR-Checkliste", 
                    description: "Schritt-für-Schritt Implementierungscheckliste",
                    type: "PDF"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Schulungsunterlagen",
                    description: "Präsentationen für Führungskräfte-Training",
                    type: "PPT"
                  },
                  {
                    icon: <Building2 className="w-6 h-6" />,
                    title: "Bedarfsanalyse",
                    description: "Fragebogen für Mitarbeiterbefragung", 
                    type: "PDF"
                  }
                ].map((resource, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform text-primary">
                        {resource.icon}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                          Download
                          <Download className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Bereit für den nächsten Schritt?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Lassen Sie sich von unseren Experten bei der Implementierung eines 
                  wechseljahre-freundlichen Arbeitsumfelds unterstützen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Beratung anfragen
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Kostenlose Analyse
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Workplace;