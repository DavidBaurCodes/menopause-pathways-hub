import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Heart, Coffee, Moon, Dumbbell, Users, Building2, Target, TrendingUp, CheckCircle } from "lucide-react";

const Lifehacks = () => {
  const personalLifehacks = [
    {
      title: "Der 5-Minuten Morgen-Boost",
      description: "Starten Sie mit einer kurzen Atemübung in den Tag für mehr Energie und Gelassenheit.",
      category: "Energie",
      difficulty: "Einfach",
      time: "5 Min",
      icon: <Coffee className="w-5 h-5" />,
      url: "/blog/5-minuten-morgen-boost-wechseljahre"
    },
    {
      title: "Hitzewellen clever überstehen",
      description: "Praktische Tricks für den Umgang mit Hitzewallungen im Alltag und unterwegs.",
      category: "Symptome",
      difficulty: "Einfach", 
      time: "Sofort",
      icon: <Heart className="w-5 h-5" />,
      url: "/blog/hitzewallungen-tipps-alltag"
    },
    {
      title: "Schlaf-Routine optimieren",
      description: "Einfache Gewohnheiten für besseren Schlaf trotz hormoneller Veränderungen.",
      category: "Schlaf",
      difficulty: "Mittel",
      time: "30 Min",
      icon: <Moon className="w-5 h-5" />,
      url: "/blog/schlaf-routine-wechseljahre-optimieren"
    },
    {
      title: "Krafttraining in 15 Minuten",
      description: "Effektive Übungen für starke Knochen und Muskeln - perfekt für den Alltag.",
      category: "Fitness",
      difficulty: "Mittel",
      time: "15 Min",
      icon: <Dumbbell className="w-5 h-5" />,
      url: "/blog/krafttraining-15-minuten-wechseljahre"
    },
    {
      title: "Stimmungsschwankungen meistern",
      description: "Schnelle Techniken zur emotionalen Regulation und Stressbewältigung.",
      category: "Mental",
      difficulty: "Einfach",
      time: "2 Min",
      icon: <Heart className="w-5 h-5" />,
      url: "/blog/stimmungsschwankungen-wechseljahre-meistern"
    },
    {
      title: "Nährstoff-Booster für zwischendurch",
      description: "Einfache Snacks und Getränke, die Ihren Hormonhaushalt unterstützen.",
      category: "Ernährung",
      difficulty: "Einfach",
      time: "10 Min",
      icon: <Coffee className="w-5 h-5" />,
      url: "/blog/naehrstoff-booster-hormonhaushalt"
    }
  ];

  const companyLifehacks = [
    {
      title: "Flexible Arbeitszeiten implementieren",
      description: "Wie Sie stufenweise flexible Arbeitsmodelle für alle Mitarbeiterinnen einführen.",
      category: "Flexibilität",
      difficulty: "Mittel",
      time: "1 Monat",
      icon: <Building2 className="w-5 h-5" />,
      url: "/blog/flexible-arbeitszeiten-wechseljahre-unternehmen"
    },
    {
      title: "Menopause-freundliche Büroausstattung",
      description: "Einfache Anpassungen der Arbeitsplätze für mehr Komfort und Produktivität.",
      category: "Arbeitsplatz",
      difficulty: "Einfach",
      time: "1 Woche",
      icon: <Target className="w-5 h-5" />,
      url: "/blog/menopause-freundliche-bueroausstattung"
    },
    {
      title: "Sensibilisierungs-Workshop organisieren",
      description: "Schritt-für-Schritt Anleitung für Aufklärungs-Workshops im Unternehmen.",
      category: "Schulung",
      difficulty: "Mittel", 
      time: "2 Wochen",
      icon: <Users className="w-5 h-5" />,
      url: "/blog/wechseljahre-workshop-unternehmen-organisieren"
    },
    {
      title: "Gesundheitsleistungen erweitern",
      description: "Konkrete Vorschläge für menopause-spezifische Benefits und Unterstützung.",
      category: "Benefits",
      difficulty: "Schwer",
      time: "3 Monate",
      icon: <TrendingUp className="w-5 h-5" />,
      url: "/blog/gesundheitsleistungen-wechseljahre-benefits"
    },
    {
      title: "Peer-Support-Netzwerk aufbauen",
      description: "Anleitung zum Aufbau eines internen Unterstützungsnetzwerks für Betroffene.",
      category: "Community",
      difficulty: "Mittel",
      time: "6 Wochen",
      icon: <Users className="w-5 h-5" />,
      url: "/blog/peer-support-netzwerk-wechseljahre-aufbauen"
    },
    {
      title: "Führungskräfte-Schulung kompakt",
      description: "30-Minuten-Schulungsmodul für Führungskräfte zum Thema Wechseljahre.",
      category: "Leadership",
      difficulty: "Einfach",
      time: "30 Min",
      icon: <Target className="w-5 h-5" />,
      url: "/blog/fuehrungskraefte-schulung-wechseljahre"
    }  
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einfach': return 'bg-green-100 text-green-800';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800';
      case 'Schwer': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Lifehacks | AOK PLUS - Praktische Tipps für Wechseljahre</title>
        <meta name="description" content="Entdecken Sie praktische Lifehacks für Wechseljahre - sowohl für Betroffene als auch für Unternehmen. Einfache Lösungen für den Alltag." />
        <meta name="keywords" content="Wechseljahre Lifehacks, Menopause Tipps, Arbeitsplatz Wechseljahre, Unternehmen Menopause, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre Lifehacks | AOK PLUS" />
        <meta property="og:description" content="Praktische Tipps und Tricks für Wechseljahre im Alltag und am Arbeitsplatz" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Wechseljahre Lifehacks",
            "description": "Praktische Tipps und Lösungen für Wechseljahre",
            "url": "https://aokplus-wechseljahre.de/lifehacks"
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
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Praktische <span className="text-gradient">Lifehacks</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Entdecken Sie einfache, praktische Tipps für den Umgang mit Wechseljahren - 
                für Betroffene und Unternehmen.
              </p>
            </div>
          </section>

          {/* Lifehacks Content */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                  <TabsTrigger value="personal" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Für Betroffene
                  </TabsTrigger>
                  <TabsTrigger value="companies" className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Für Firmen
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      Lifehacks für Betroffene
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Einfache Tricks und Techniken, die Sie sofort in Ihren Alltag integrieren können.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {personalLifehacks.map((hack, index) => (
                      <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary">
                              {hack.icon}
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-xs">
                                {hack.time}
                              </Badge>
                              <Badge className={`text-xs ${getDifficultyColor(hack.difficulty)}`}>
                                {hack.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {hack.title}
                          </CardTitle>
                          <Badge variant="secondary" className="w-fit text-xs">
                            {hack.category}
                          </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="leading-relaxed">
                            {hack.description}
                          </CardDescription>
                          <Button size="sm" className="w-full gradient-primary text-white group/try" asChild>
                            <a href={hack.url}>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Jetzt ausprobieren
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="companies" className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      Lifehacks für Unternehmen
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Praktische Maßnahmen für eine menopause-freundliche Arbeitsumgebung.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companyLifehacks.map((hack, index) => (
                      <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary">
                              {hack.icon}
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-xs">
                                {hack.time}
                              </Badge>
                              <Badge className={`text-xs ${getDifficultyColor(hack.difficulty)}`}>
                                {hack.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {hack.title}
                          </CardTitle>
                          <Badge variant="secondary" className="w-fit text-xs">
                            {hack.category}
                          </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="leading-relaxed">
                            {hack.description}
                          </CardDescription>
                          <Button size="sm" className="w-full gradient-primary text-white group/implement" asChild>
                            <a href={hack.url}>
                              <Target className="w-4 h-4 mr-2" />
                              Umsetzen
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Haben Sie eigene Lifehacks?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Teilen Sie Ihre praktischen Tipps mit unserer Community und helfen Sie anderen 
                  auf ihrem Weg durch die Wechseljahre.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Tipp einreichen
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Zur Community
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

export default Lifehacks;