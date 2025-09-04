import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  Clock, 
  Home, 
  Coffee, 
  Shield,
  Lightbulb,
  Target
} from "lucide-react";

const Arbeitskultur = () => {
  const workplaceSolutions = [
    {
      id: 1,
      title: "Flexible Arbeitszeiten & Pausenregelung",
      category: "Zeitmanagement",
      description: "Anpassbare Arbeitszeiten und zusätzliche Pausen für Mitarbeiterinnen in den Wechseljahren.",
      measures: [
        "Gleitzeit mit erweiterten Kernzeiten",
        "Spontane Kurzpausen bei Beschwerden",
        "Home-Office an schwierigen Tagen",
        "Reduzierte Arbeitszeit temporär möglich"
      ],
      benefits: "Reduziert Stress und verbessert Work-Life-Balance",
      implementation: "Niedrig - Sofort umsetzbar"
    },
    {
      id: 2,
      title: "Rückzugsräume & Klimakontrolle",
      category: "Arbeitsplatzgestaltung",
      description: "Physische Anpassungen des Arbeitsplatzes für mehr Komfort und Wohlbefinden.",
      measures: [
        "Ruhezonen für kurze Erholung",
        "Individuell regelbare Raumtemperatur",
        "Ergonomische Arbeitsplätze",
        "Natürliches Licht optimieren"
      ],
      benefits: "Lindert körperliche Beschwerden direkt",
      implementation: "Mittel - Investition erforderlich"
    },
    {
      id: 3,
      title: "Führungskultur & Kommunikation",
      category: "Management",
      description: "Sensible Führung und offene Kommunikation über Wechseljahre-Themen im Betrieb.",
      measures: [
        "Führungskräfte-Schulungen zu Menopause",
        "Vertrauliche Gespräche ermöglichen",
        "Offene Kommunikationskultur schaffen",
        "Individuelle Lösungen gemeinsam entwickeln"
      ],
      benefits: "Schafft Vertrauen und reduziert Stigma",
      implementation: "Hoch - Kulturwandel erforderlich"
    },
    {
      id: 4,
      title: "Gesundheitsförderung & Benefits",
      category: "Gesundheit",
      description: "Spezielle Gesundheitsangebote und Unterstützung für Mitarbeiterinnen in den Wechseljahren.",
      measures: [
        "Hormonberatung als Firmenleistung",
        "Betriebliche Gesundheitstage",
        "Entspannungskurse am Arbeitsplatz",
        "Zuschuss zu Wechseljahre-Therapien"
      ],
      benefits: "Zeigt Wertschätzung und fördert Gesundheit",
      implementation: "Mittel - Budget und Partner erforderlich"
    }
  ];

  const implementationSteps = [
    {
      phase: "Phase 1: Sensibilisierung",
      duration: "1-2 Monate",
      actions: [
        "Führungskräfte über Wechseljahre informieren",
        "Ist-Stand der aktuellen Situation erheben",
        "Betroffene Mitarbeiterinnen diskret befragen",
        "Erste Quick-Wins identifizieren"
      ]
    },
    {
      phase: "Phase 2: Konzeptentwicklung",
      duration: "2-3 Monate",
      actions: [
        "Maßnahmenkatalog entwickeln",
        "Budget und Ressourcen planen",
        "Pilotprojekte definieren",
        "Betriebsvereinbarung erarbeiten"
      ]
    },
    {
      phase: "Phase 3: Umsetzung",
      duration: "3-6 Monate",
      actions: [
        "Pilotprojekte starten",
        "Führungskräfte schulen",
        "Arbeitsplätze anpassen",
        "Kommunikation und Awareness schaffen"
      ]
    },
    {
      phase: "Phase 4: Evaluierung",
      duration: "Fortlaufend",
      actions: [
        "Erfolg messen und bewerten",
        "Feedback der Mitarbeiterinnen einholen",
        "Maßnahmen anpassen und erweitern",
        "Best Practices dokumentieren"
      ]
    }
  ];

  const successStories = [
    {
      company: "Mittelständisches Unternehmen, 250 MA",
      challenge: "Hohe Krankheitsausfälle bei Frauen 45+",
      solution: "Flexible Arbeitszeiten + Rückzugsräume",
      result: "30% weniger Fehltage, 95% Zufriedenheit"
    },
    {
      company: "Großkonzern, 5000 MA",
      challenge: "Führungskräfte unsicher im Umgang",
      solution: "Management-Training + Betriebsvereinbarung",
      result: "Offenere Kommunikation, weniger Fluktuation"
    },
    {
      company: "Produktionsbetrieb, 800 MA",
      challenge: "Physisch anspruchsvolle Arbeitsplätze",
      solution: "Ergonomie-Verbesserungen + Gesundheitsprogramm",  
      result: "Längere Verweildauer, bessere Arbeitsqualität"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Arbeitskultur mit Weitblick - Betriebliche Wechseljahre-Lösungen | AOK PLUS</title>
        <meta name="description" content="Passgenaue betriebliche Lösungen für Wechseljahre. Von flexiblen Arbeitszeiten über Rückzugsräume bis zu sensibler Führungskultur." />
        <meta name="keywords" content="betriebliche Wechseljahre, Arbeitskultur, Menopause Workplace, Führungskultur, flexible Arbeitszeiten" />
        
        <meta property="og:title" content="Arbeitskultur mit Weitblick | AOK PLUS" />
        <meta property="og:description" content="Betriebliche Lösungen für Mitarbeiterinnen in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Betriebliche Wechseljahre-Lösungen",
            "description": "Arbeitskultur und betriebliche Maßnahmen für Mitarbeiterinnen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/arbeitskultur"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-primary-light" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Arbeitskultur</span> mit Weitblick
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Von anpassbaren Arbeitszeiten über Rückzugsräume bis hin zu sensibler Führungskultur. 
                  Entscheidend ist, gemeinsam mit den betroffenen Mitarbeitenden passgenaue Lösungen zu entwickeln.
                </p>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Betriebliche Lösungsansätze
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Praktische Maßnahmen, die Wohlbefinden stärken und Arbeitsfähigkeit erhalten.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {workplaceSolutions.map((solution) => (
                    <Card key={solution.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                            <Badge variant="outline">{solution.category}</Badge>
                          </div>
                          <div className="text-right">
                            <Badge variant={solution.implementation.includes("Niedrig") ? "secondary" : solution.implementation.includes("Mittel") ? "default" : "destructive"}>
                              {solution.implementation.split(" - ")[0]}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {solution.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="text-sm font-medium">Konkrete Maßnahmen:</div>
                          <ul className="space-y-1">
                            {solution.measures.map((measure, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {measure}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3 bg-success/5 border border-success/20 rounded-lg">
                          <div className="text-sm font-medium text-success mb-1">Nutzen:</div>
                          <p className="text-sm text-muted-foreground">{solution.benefits}</p>
                        </div>

                        <div className="text-xs text-muted-foreground">
                          <strong>Umsetzung:</strong> {solution.implementation}
                        </div>

                        <Button className="w-full mt-4">
                          <Target className="w-4 h-4 mr-2" />
                          Umsetzung planen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Roadmap */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Umsetzungs-Roadmap
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Schritt-für-Schritt zum wechseljahre-freundlichen Arbeitsplatz.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {implementationSteps.map((step, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{step.phase}</CardTitle>
                            <CardDescription>Dauer: {step.duration}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{action}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Erfolgsgeschichten
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Wie andere Unternehmen erfolgreich eine wechseljahre-freundliche Arbeitskultur geschaffen haben.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {successStories.map((story, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit">{story.company}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm font-medium text-destructive mb-1">Herausforderung:</div>
                          <p className="text-sm text-muted-foreground">{story.challenge}</p>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">Lösung:</div>
                          <p className="text-sm text-muted-foreground">{story.solution}</p>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-success mb-1">Ergebnis:</div>
                          <p className="text-sm text-muted-foreground">{story.result}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    <Shield className="w-4 h-4 mr-2" />
                    Beratung für Ihr Unternehmen
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

export default Arbeitskultur;