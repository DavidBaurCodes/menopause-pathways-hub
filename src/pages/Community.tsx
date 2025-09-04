import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, Calendar, Star, ArrowRight, UserCheck } from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Diskussionsforen",
      description: "Tauschen Sie sich mit anderen Frauen über Ihre Erfahrungen aus und finden Sie Antworten auf Ihre Fragen.",
      members: "2,847",
      color: "text-primary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer-Support-Gruppen",
      description: "Kleinere, moderierte Gruppen für vertraulichen Austausch und gegenseitige Unterstützung.",
      members: "456",
      color: "text-accent"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Online-Events",
      description: "Regelmäßige Webinare, Fragerunden mit Experten und Community-Meetings.",
      members: "1,203",
      color: "text-success"
    }
  ];

  const lifeHacks = [
    {
      title: "Brainfog bekämpfen",
      description: "Sofortmaßnahmen und Langzeitstrategien für mentale Klarheit",
      tips: ["To-Do-Listen führen", "Gehirntraining-Apps", "Strukturierte Tagesabläufe", "Meditation"],
      category: "Kognition"
    },
    {
      title: "Hitzewallungen managen",
      description: "Praktische Tipps für den Umgang mit plötzlichen Hitzeschüben", 
      tips: ["Kühlende Kleidung", "Ventilator am Arbeitsplatz", "Eiswürfel-Trick", "Atemtechniken"],
      category: "Körperlich"
    },
    {
      title: "Schlafqualität verbessern",
      description: "Bewährte Methoden für erholsamen Schlaf trotz hormoneller Veränderungen",
      tips: ["Kühlende Bettwäsche", "Abendroutine entwickeln", "Bildschirmzeit reduzieren", "Magnesium"],
      category: "Schlaf"
    },
    {
      title: "Stimmung stabilisieren", 
      description: "Emotionale Balance finden und Stimmungsschwankungen abfedern",
      tips: ["Tagebuch führen", "Sport & Bewegung", "Soziale Kontakte", "Professionelle Hilfe"],
      category: "Mental"
    }
  ];

  const alliesResources = [
    {
      title: "Für Partner & Ehemänner",
      description: "Wie Sie Ihre Partnerin während der Wechseljahre am besten unterstützen können.",
      points: ["Verständnis entwickeln", "Geduld zeigen", "Gemeinsam Lösungen finden", "Raum geben"]
    },
    {
      title: "Für Familienmitglieder",
      description: "Informationen für Kinder, Eltern und Geschwister über die Wechseljahre.",
      points: ["Offene Kommunikation", "Mythen aufklären", "Unterstützung anbieten", "Normale Reaktionen"]
    },
    {
      title: "Für Freunde & Kollegen", 
      description: "Wie das soziale Umfeld eine positive Rolle spielen kann.",
      points: ["Sensibilität zeigen", "Flexibilität anbieten", "Vorurteile abbauen", "Ermutigung geben"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community & Support | AOK PLUS - Wechseljahre-Gemeinschaft</title>
        <meta name="description" content="Verbinden Sie sich mit anderen Frauen in ähnlichen Situationen. Community-Support, Life Hacks und Ressourcen für Allies und sekundär Betroffene." />
        <meta name="keywords" content="Wechseljahre Community, Peer Support, Life Hacks, Brainfog, Allies, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre Community & Support | AOK PLUS" />
        <meta property="og:description" content="Unterstützende Gemeinschaft und praktische Hilfe für Wechseljahre" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Wechseljahre Community & Support",
            "description": "Supportive community platform for menopause journey",
            "url": "https://aokplus-wechseljahre.de/community"
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
                <Users className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Community & <span className="text-gradient">Support</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Verbinden Sie sich mit anderen Frauen auf ähnlichen Wegen. Teilen Sie Erfahrungen, 
                finden Sie Unterstützung und entdecken Sie praktische Alltagshilfen.
              </p>
            </div>
          </section>

          {/* Community Features */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Unsere Community-Bereiche
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {communityFeatures.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 text-center">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-200 ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <UserCheck className="w-4 h-4" />
                        <span>{feature.members} Mitglieder</span>
                      </div>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                        Beitreten
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Life Hacks */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Life Hacks für Betroffene
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bewährte Alltagstipps und Strategien von der Community - 
                  praktische Lösungen für häufige Wechseljahres-Herausforderungen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {lifeHacks.map((hack, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {hack.category}
                        </Badge>
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {hack.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {hack.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Bewährte Tipps:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {hack.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-dark group/btn">
                        Mehr Tipps anzeigen
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Allies Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Für Allies & sekundär Betroffene
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                  Informationen und Unterstützung für Partner, Familie und Freunde. 
                  Werden Sie zu einem verständnisvollen und hilfreichen Ally.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {alliesResources.map((resource, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success/10 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <Heart className="w-6 h-6 text-success" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {resource.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Wichtige Punkte:</h4>
                        <div className="space-y-1">
                          {resource.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-success hover:text-success/80 group/btn">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Join Community CTA */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Werden Sie Teil unserer Community
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Über 3.000 Frauen haben bereits Unterstützung, Freundschaften und wertvolle 
                  Tipps in unserer Community gefunden. Seien Sie die Nächste!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Kostenlos beitreten
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Community entdecken
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

export default Community;