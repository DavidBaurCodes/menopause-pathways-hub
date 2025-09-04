import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Briefcase, 
  Home, 
  BookOpen, 
  Phone,
  Download,
  MessageCircle
} from "lucide-react";

const Allies = () => {
  const partnerResources = [
    {
      id: 1,
      title: "Partner-Leitfaden: Wechseljahre verstehen",
      type: "PDF-Download",
      description: "Umfassender Ratgeber für Partner über körperliche und emotionale Veränderungen in den Wechseljahren.",
      pages: "32 Seiten",
      topics: ["Körperliche Veränderungen", "Emotionale Unterstützung", "Intimität", "Kommunikation"],
      audience: "Partner & Ehepartner",
      downloadCount: "15k+"
    },
    {
      id: 2,
      title: "Familie & Freunde Workshop",
      type: "Online-Seminar",
      description: "Interaktiver Workshop für Familienmitglieder und enge Freunde zur Unterstützung von betroffenen Frauen.",
      duration: "2 Stunden",
      format: "Live Online",
      nextDates: ["15. März", "22. März", "5. April"],
      includes: ["Aufzeichnung", "Handout", "Q&A-Session"]
    },
    {
      id: 3,
      title: "Arbeitgeber-Toolkit",
      type: "Betriebliche Ressource",
      description: "Praktische Hilfen für Führungskräfte und HR zur Unterstützung von Mitarbeiterinnen in den Wechseljahren.",
      components: ["Awareness-Training", "Gesprächsleitfäden", "Betriebsvereinbarung-Vorlage"],
      target: "HR & Führungskräfte",
      companies: "50+ Unternehmen nutzen bereits"
    },
    {
      id: 4,
      title: "Teens & Wechseljahre der Mutter",
      type: "Jugend-Ressource",
      description: "Altersgerechte Aufklärung für Teenager über die Wechseljahre ihrer Mütter.",
      ageGroup: "13-18 Jahre",
      format: "Interaktive Website + Videos",
      topics: ["Was passiert mit Mama?", "Wie kann ich helfen?", "Normale Reaktionen"],
      feedback: "96% positive Bewertungen"
    }
  ];

  const supportStrategies = [
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Emotionale Unterstützung",
      description: "Wie Sie als Partner oder Familienmitglied emotionale Stabilität bieten können.",
      tips: [
        "Aktiv zuhören ohne zu urteilen",
        "Geduld bei Stimmungsschwankungen zeigen",
        "Gemeinsame entspannende Aktivitäten planen",
        "Professionelle Hilfe vorschlagen, wenn nötig"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-success" />,
      title: "Praktische Alltagshilfe",
      description: "Konkrete Unterstützung im täglichen Leben und Haushalt.",
      tips: [
        "Haushalt und Childcare teilen",
        "Für kühle Schlafumgebung sorgen",
        "Gesunde Mahlzeiten gemeinsam planen",
        "Zeit für Selbstfürsorge ermöglichen"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-warning" />,
      title: "Arbeitsplatz-Sensibilität",
      description: "Wie Arbeitgeber und Kollegen unterstützend wirken können.",
      tips: [
        "Flexible Arbeitszeiten anbieten",
        "Rückzugsräume zur Verfügung stellen",
        "Offene Gesprächskultur schaffen",
        "Weiterbildung zu Menopause anbieten"
      ]
    }
  ];

  const communicationGuides = [
    {
      situation: "Hitzewallungen am Arbeitsplatz",
      doSay: "Kann ich etwas tun, um dir zu helfen? Soll ich das Fenster öffnen?",
      dontSay: "Du bist schon wieder am Schwitzen...",
      tip: "Bieten Sie praktische Hilfe an, ohne die Situation zu kommentieren."
    },
    {
      situation: "Stimmungsschwankungen",
      doSay: "Ich merke, dass es dir nicht gut geht. Möchtest du darüber reden?",
      dontSay: "Du bist so launisch in letzter Zeit.",
      tip: "Zeigen Sie Verständnis und bieten Sie Gesprächsbereitschaft an."
    },
    {
      situation: "Schlafprobleme",
      doSay: "Wie kann ich dir helfen, besser zu schlafen?",
      dontSay: "Du wälzt dich schon wieder die ganze Nacht rum.",
      tip: "Suchen Sie gemeinsam nach Lösungen statt Probleme zu benennen."
    },
    {
      situation: "Vergesslichkeit",
      doSay: "Soll ich dir dabei helfen, das zu organisieren?",
      dontSay: "Das hast du schon wieder vergessen!",
      tip: "Bieten Sie Unterstützung an, ohne Vorwürfe zu machen."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Allies & Partner - Unterstützung für Angehörige | AOK PLUS</title>
        <meta name="description" content="Ressourcen und Leitfäden für Partner, Familie, Freunde und Arbeitgeber zur Unterstützung von Frauen in den Wechseljahren." />
        <meta name="keywords" content="Wechseljahre Partner, Familie Unterstützung, Arbeitgeber Menopause, Angehörige Hilfe, Allies" />
        
        <meta property="og:title" content="Allies & Partner Unterstützung | AOK PLUS" />
        <meta property="og:description" content="Hilfen für Angehörige von Frauen in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Allies & Partner Ressourcen Wechseljahre",
            "description": "Unterstützung und Ressourcen für Angehörige von Frauen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/allies"
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-warning/20 to-primary/20 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-warning" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Allies & Partner</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Informationen und Ressourcen für Partner, Familie, Freunde und Arbeitgebende 
                  von Frauen in den Wechseljahren. Gemeinsam können wir besser unterstützen.
                </p>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ressourcen für Angehörige
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Praktische Hilfen und Informationen für alle, die Frauen in den Wechseljahren unterstützen möchten.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {partnerResources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                            <Badge variant={resource.type.includes("PDF") ? "secondary" : resource.type.includes("Online") ? "outline" : "default"}>
                              {resource.type}
                            </Badge>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            {resource.downloadCount && (
                              <div>{resource.downloadCount} Downloads</div>
                            )}
                            {resource.companies && (
                              <div>{resource.companies}</div>
                            )}
                            {resource.feedback && (
                              <div>{resource.feedback}</div>
                            )}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          {resource.duration && (
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-muted-foreground" />
                              <span>{resource.duration}</span>
                            </div>
                          )}
                          
                          {resource.pages && (
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-muted-foreground" />
                              <span>{resource.pages}</span>
                            </div>
                          )}
                          
                          {resource.audience && (
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span>{resource.audience}</span>
                            </div>
                          )}
                          
                          {resource.ageGroup && (
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span>Zielgruppe: {resource.ageGroup}</span>
                            </div>
                          )}
                        </div>

                        {resource.topics && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Themen:</div>
                            <div className="flex flex-wrap gap-2">
                              {resource.topics.map((topic, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {resource.components && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Enthält:</div>
                            <div className="flex flex-wrap gap-2">
                              {resource.components.map((component, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {component}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {resource.nextDates && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Nächste Termine:</div>
                            <div className="flex flex-wrap gap-2">
                              {resource.nextDates.map((date, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {date}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            {resource.type.includes("PDF") ? (
                              <>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </>
                            ) : resource.type.includes("Online") ? (
                              "Anmelden"
                            ) : (
                              "Zugang erhalten"
                            )}
                          </Button>
                          <Button variant="outline">
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Wie können Sie unterstützen?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Praktische Strategien und Tipps für verschiedene Lebensbereiche.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {supportStrategies.map((strategy, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          {strategy.icon}
                        </div>
                        <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {strategy.description}
                        </p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Praktische Tipps:</div>
                          <ul className="text-left space-y-1">
                            {strategy.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Communication Guide Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Kommunikations-Leitfaden
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Was Sie sagen können und was Sie besser vermeiden sollten.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {communicationGuides.map((guide, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{guide.situation}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
                            <div className="font-medium text-success mb-2">✓ Besser so:</div>
                            <p className="text-sm italic">"{guide.doSay}"</p>
                          </div>
                          <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                            <div className="font-medium text-destructive mb-2">✗ Vermeiden:</div>
                            <p className="text-sm italic">"{guide.dontSay}"</p>
                          </div>
                        </div>
                        <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                          <div className="font-medium text-primary text-sm mb-1">Tipp:</div>
                          <p className="text-sm text-muted-foreground">{guide.tip}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Partner-Support Chat
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

export default Allies;