import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Clock, 
  Brain, 
  Heart, 
  Coffee, 
  Thermometer,
  Moon,
  Zap,
  CheckCircle
} from "lucide-react";

const Berufsalltag = () => {
  const workStrategies = [
    {
      id: 1,
      title: "Energie-Management",
      icon: <Zap className="w-8 h-8 text-warning" />,
      description: "Optimal mit schwankender Energie umgehen und produktive Phasen nutzen.",
      strategies: [
        "Wichtige Aufgaben in energiereiche Zeiten legen",
        "Pausen vor Energietiefs einbauen",
        "Kurze Power-Naps nutzen (10-20 Min)",
        "Energiekiller identifizieren und eliminieren"
      ],
      difficulty: "Einfach",
      timeToImplement: "Sofort"
    },
    {
      id: 2,
      title: "Hitzewallungen am Arbeitsplatz",
      icon: <Thermometer className="w-8 h-8 text-destructive" />,
      description: "Professionell mit Hitzewallungen umgehen und Diskretion wahren.",
      strategies: [
        "Zwiebellook für schnelle Anpassung",
        "Handfächer oder Kühlgel griffbereit",
        "Arbeitsplatz in kühlerer Zone wählen",
        "Kollegen diskret informieren"
      ],
      difficulty: "Einfach",
      timeToImplement: "Sofort"
    },
    {
      id: 3,
      title: "Konzentration & Brainfog",
      icon: <Brain className="w-8 h-8 text-primary" />,
      description: "Mit kognitiven Herausforderungen umgehen und Fokus bewahren.",
      strategies: [
        "To-Do-Listen und Erinnerungen nutzen",
        "Komplexe Aufgaben in kleinere Teile zerlegen",
        "Störungen minimieren (Handy stumm, etc.)",
        "Konzentrationstechniken anwenden"
      ],
      difficulty: "Mittel",
      timeToImplement: "1-2 Wochen"
    },
    {
      id: 4,
      title: "Schlaf & Regeneration",
      icon: <Moon className="w-8 h-8 text-accent" />,
      description: "Trotz Schlafproblemen fit und leistungsfähig bleiben.",
      strategies: [
        "Flexible Arbeitszeiten bei schlechter Nacht",
        "Mittagspause für kurze Entspannung nutzen",
        "Schlafhygiene auch am Arbeitsplatz beachten",
        "Bei chronischen Problemen Hilfe suchen"
      ],
      difficulty: "Mittel",
      timeToImplement: "2-4 Wochen"
    }
  ];

  const dailyTips = [
    {
      time: "Morgens",
      tips: [
        "Langsam in den Tag starten",
        "Ausreichend frühstücken",
        "Positive Tagesintention setzen",
        "Wichtigste Aufgabe des Tages definieren"
      ]
    },
    {
      time: "Vormittags",
      tips: [
        "Schwere Aufgaben in energiereiche Zeit",
        "Regelmäßig lüften für frische Luft",
        "Ausreichend trinken",
        "Kurze Bewegungspausen einbauen"
      ]
    },
    {
      time: "Mittags",
      tips: [
        "Bewusste Mittagspause nehmen",
        "Leichte, nährstoffreiche Mahlzeit",
        "Kurzer Spaziergang oder Entspannung",
        "Sozialer Kontakt zu Kollegen"
      ]
    },
    {
      time: "Nachmittags",
      tips: [
        "Energielevel checken und anpassen",
        "Routine-Aufgaben bei niedrigerer Energie",
        "Zwischenerfolge würdigen",
        "Tag strukturiert abschließen"
      ]
    },
    {
      time: "Feierabend",
      tips: [
        "Klare Grenze zwischen Arbeit und Freizeit",
        "Arbeitsgedanken bewusst loslassen",
        "Entspannungsritual einführen",
        "Zeit für sich selbst einplanen"
      ]
    }
  ];

  const workplaceHacks = [
    {
      category: "Arbeitsplatz-Setup",
      hacks: [
        "Ventilator oder tragbare Klimaanlage am Platz",
        "Ergonomischen Stuhl für körperlichen Komfort",
        "Tageslichtlampe bei wenig natürlichem Licht",
        "Pflanzen für besseres Raumklima"
      ]
    },
    {
      category: "Organisationshilfen",
      hacks: [
        "Digitale Kalender mit Erinnerungen",
        "Farbkodierung für verschiedene Aufgabentypen",
        "Wochenplanung jeden Freitag für kommende Woche",
        "Wichtige Infos immer sichtbar notieren"
      ]
    },
    {
      category: "Kommunikation",
      hacks: [
        "Offenes Gespräch mit vertrauenswürdigen Kollegen",
        "Vorgesetzten über flexible Bedürfnisse informieren",
        "Grenzen höflich aber bestimmt kommunizieren",
        "Um Unterstützung bitten, wenn nötig"
      ]
    },
    {
      category: "Selbstfürsorge am Arbeitsplatz",
      hacks: [
        "Gesunde Snacks für Energietiefs bereithalten",
        "Entspannungsübungen für 2-3 Minuten",
        "Positive Affirmationen oder Mantras nutzen",
        "Schöne Gegenstände für emotionale Unterstützung"
      ]
    }
  ];

  const successMetrics = [
    {
      metric: "Produktivität",
      description: "Auch mit weniger Energie effektiv arbeiten",
      indicators: ["Wichtige Aufgaben werden erledigt", "Qualität bleibt hoch", "Deadlines werden gehalten"]
    },
    {
      metric: "Wohlbefinden",
      description: "Sich am Arbeitsplatz wohl und respektiert fühlen",
      indicators: ["Weniger Stress", "Mehr Gelassenheit", "Positive Arbeitsatmosphäre"]
    },
    {
      metric: "Work-Life-Balance",
      description: "Gesunde Grenzen zwischen Beruf und Privatleben",
      indicators: ["Abschalten gelingt", "Freizeit wird genossen", "Regeneration funktioniert"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dein Berufsalltag - deine Strategie | AOK PLUS Wechseljahre</title>
        <meta name="description" content="Praktische Strategien für einen aktiven, motivierten Arbeitsalltag während der Wechseljahre. Tipps für Energie, Konzentration und Wohlbefinden." />
        <meta name="keywords" content="Wechseljahre Job, Arbeitsalltag, Brainfog, Hitzewallungen Arbeit, Energie Management, Beruf Menopause" />
        
        <meta property="og:title" content="Berufsalltag-Strategien für Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Praktische Tipps für den Arbeitsalltag während der Wechseljahre" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Berufsalltag-Strategien Wechseljahre",
            "description": "Praktische Strategien und Tipps für den Arbeitsalltag während der Wechseljahre",
            "url": "https://aokplus-wechseljahre.de/berufsalltag"
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Dein Berufsalltag</span> - deine Strategie
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Wechseljahre und Job? Geht klar – wenn du weißt, was dir guttut. 
                  Hier findest du erste Ideen, wie du deinen Arbeitsalltag aktiv, fit und motiviert gestalten kannst.
                </p>
              </div>
            </div>
          </section>

          {/* Strategies Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Deine Erfolgsstrategien
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Bewährte Ansätze für die häufigsten Herausforderungen im Berufsalltag.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {workStrategies.map((strategy) => (
                    <Card key={strategy.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {strategy.icon}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{strategy.title}</CardTitle>
                            <div className="flex gap-2">
                              <Badge variant={strategy.difficulty === "Einfach" ? "secondary" : "outline"}>
                                {strategy.difficulty}
                              </Badge>
                              <Badge variant="outline">{strategy.timeToImplement}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {strategy.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm font-medium mb-3">Praktische Schritte:</div>
                          <ul className="space-y-2">
                            {strategy.strategies.map((item, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full">
                          Strategie umsetzen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Daily Tips Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Dein optimaler Arbeitstag
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Tipps für jeden Tagesabschnitt, um energiegeladen und produktiv zu bleiben.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-5 gap-6">
                  {dailyTips.map((timeSlot, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{timeSlot.time}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-left">
                          {timeSlot.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Workplace Hacks Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Life Hacks für den Arbeitsplatz
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Clevere Tricks und Hilfsmittel für mehr Komfort und Effizienz.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {workplaceHacks.map((category, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {category.hacks.map((hack, hackIndex) => (
                            <li key={hackIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {hack}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Erfolg messen
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Woran Sie erkennen, dass Ihre Strategien funktionieren.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {successMetrics.map((metric, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{metric.metric}</CardTitle>
                        <CardDescription>{metric.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Positive Indikatoren:</div>
                          <ul className="space-y-1">
                            {metric.indicators.map((indicator, indIndex) => (
                              <li key={indIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-success" />
                                {indicator}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    <Coffee className="w-4 h-4 mr-2" />
                    Persönliche Beratung buchen
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

export default Berufsalltag;