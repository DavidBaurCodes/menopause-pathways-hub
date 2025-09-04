import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Smartphone, 
  MapPin, 
  Clock, 
  Star,
  Flower,
  Brain,
  Moon
} from "lucide-react";

const Wellness = () => {
  const wellnessPrograms = [
    {
      id: 1,
      title: "Achtsamkeits-App \"MenoMind\"",
      type: "Digital",
      description: "Geführte Meditationen und Achtsamkeitsübungen speziell für Frauen in den Wechseljahren.",
      features: ["10 Min täglich", "Schlafmeditationen", "Hitzewallungen-SOS"],
      rating: 4.8,
      downloads: "50k+",
      price: "Kostenlos für AOK PLUS"
    },
    {
      id: 2,
      title: "Me-Time Retreat Wochenende",
      type: "Präsenz",
      description: "Wellness-Wochenende mit Entspannungstechniken, Massage und Stressbewältigung.",
      duration: "2 Tage",
      location: "Bad Schandau",
      participants: "12-16 Teilnehmerinnen",
      includes: ["Vollpension", "Spa-Zugang", "Workshops"],
      nextDates: ["15.-16. Feb", "22.-23. März"]
    },
    {
      id: 3,
      title: "Stressbewältigung Online-Kurs",
      type: "Online",
      description: "8-Wochen Programm zur Entwicklung persönlicher Stressbewältigungsstrategien.",
      duration: "8 Wochen",
      sessions: "1x wöchentlich 90 Min",
      groupSize: "8-12 Teilnehmerinnen",
      methods: ["Progressive Muskelentspannung", "Atemtechniken", "Gedankenmanagement"]
    },
    {
      id: 4,
      title: "Aromatherapie Workshop",
      type: "Präsenz",
      description: "Erlernen Sie die Anwendung ätherischer Öle zur Linderung von Wechseljahresbeschwerden.",
      duration: "4 Stunden",
      location: "Dresden Altstadt",
      takeHome: ["Eigenes Aromamischung", "Duftstein", "Anwendungsguide"],
      nextDate: "25. Februar"
    }
  ];

  const wellnessTips = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Achtsamkeit",
      description: "Regelmäßige Meditation kann Hitzewallungen reduzieren und die Schlafqualität verbessern.",
      techniques: ["5-Minuten-Meditation", "Atemübungen", "Body Scan"]
    },
    {
      icon: <Moon className="w-12 h-12 text-accent" />,
      title: "Schlafhygiene",
      description: "Guter Schlaf ist essentiell für hormonelle Balance und emotionales Wohlbefinden.",
      techniques: ["Kühles Schlafzimmer", "Entspannungsrituale", "Bildschirmfrei vor dem Schlafen"]
    },
    {
      icon: <Flower className="w-12 h-12 text-success" />,
      title: "Naturheilkunde",
      description: "Pflanzliche Helfer können auf sanfte Weise Beschwerden lindern.",
      techniques: ["Traubensilberkerze", "Rotklee", "Johanniskraut"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wellness & Me-Time für die Wechseljahre | AOK PLUS</title>
        <meta name="description" content="Entdecken Sie Wellness-Programme für die Wechseljahre. Me-Time Strategien, Stressbewältigung und Achtsamkeits-Apps für Ihr Wohlbefinden." />
        <meta name="keywords" content="Wechseljahre Wellness, Me-Time, Stressbewältigung, Achtsamkeit, Meditation, Aromatherapie, Entspannung" />
        
        <meta property="og:title" content="Wellness für die Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Wellness und Me-Time Programme speziell für Frauen in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "AOK PLUS Wellness Programme Wechseljahre",
            "description": "Wellness und Entspannungsprogramme für Frauen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/wellness"
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
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Wellness & Me-Time</span> in den Wechseljahren
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Gönnen Sie sich bewusste Auszeiten und entdecken Sie Entspannungstechniken, 
                  die speziell auf die Bedürfnisse in den Wechseljahren abgestimmt sind.
                </p>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Unsere Wellness-Programme
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Von digitalen Apps bis zu entspannenden Retreats – finden Sie Ihren persönlichen Weg zu mehr Wohlbefinden.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {wellnessPrograms.map((program) => (
                    <Card key={program.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                            <Badge variant={program.type === "Digital" ? "secondary" : program.type === "Online" ? "outline" : "default"}>
                              {program.type}
                            </Badge>
                          </div>
                          <div className="text-right">
                            {program.rating && (
                              <div className="flex items-center gap-1 text-sm mb-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{program.rating}</span>
                              </div>
                            )}
                            {program.downloads && (
                              <span className="text-xs text-muted-foreground">
                                {program.downloads} Downloads
                              </span>
                            )}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          {program.duration && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{program.duration}</span>
                            </div>
                          )}
                          
                          {program.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{program.location}</span>
                            </div>
                          )}
                          
                          {program.price && (
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-muted-foreground" />
                              <span className="text-success font-medium">{program.price}</span>
                            </div>
                          )}
                        </div>

                        {program.features && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Features:</div>
                            <div className="flex flex-wrap gap-2">
                              {program.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {program.methods && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Methoden:</div>
                            <div className="flex flex-wrap gap-2">
                              {program.methods.map((method, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {method}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {program.includes && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Inklusive:</div>
                            <div className="flex flex-wrap gap-2">
                              {program.includes.map((item, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {program.nextDates && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Nächste Termine:</div>
                            <div className="flex flex-wrap gap-2">
                              {program.nextDates.map((date, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {date}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            {program.type === "Digital" ? (
                              <>
                                <Smartphone className="w-4 h-4 mr-2" />
                                App laden
                              </>
                            ) : (
                              "Buchen"
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

          {/* Tips Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Wellness-Tipps für den Alltag
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Kleine Schritte, große Wirkung – integrieren Sie diese Wellness-Praktiken in Ihren Alltag.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {wellnessTips.map((tip, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          {tip.icon}
                        </div>
                        <CardTitle className="text-xl">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tip.description}
                        </p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Techniken:</div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {tip.techniques.map((technique, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {technique}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Wellness-Programme entdecken
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

export default Wellness;