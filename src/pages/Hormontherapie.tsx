import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Phone, 
  MapPin, 
  Clock, 
  Star,
  Monitor,
  Calendar,
  Shield
} from "lucide-react";

const Hormontherapie = () => {
  const therapyOptions = [
    {
      id: 1,
      title: "Bioidentische Hormontherapie",
      type: "Individuelle Therapie",
      description: "Maßgeschneiderte Hormonbehandlung mit bioidentischen Hormonen, die dem körpereigenen Hormonsystem entsprechen.",
      benefits: ["Natürliche Hormonstruktur", "Individuell dosiert", "Weniger Nebenwirkungen"],
      duration: "Langzeittherapie",
      monitoring: "Regelmäßige Kontrollen",
      coverage: "Teilweise Kassenleistung"
    },
    {
      id: 2,
      title: "Telemedizinische Beratung",
      type: "Online-Beratung",
      description: "Flexible Hormonberatung und -überwachung via Videosprechstunde mit spezialisierten Gynäkologen.",
      features: ["Videosprechstunde", "Digitale Befunde", "Chat-Support", "Rezept-Service"],
      availability: "Mo-Fr 7:00-20:00",
      response: "Innerhalb 24h",
      coverage: "Kassenleistung"
    },
    {
      id: 3,
      title: "Hormon-Coaching",
      type: "Begleittherapie",
      description: "Unterstützung bei der Hormontherapie durch speziell ausgebildete Coaches und Pflegekräfte.",
      includes: ["Therapiebegleitung", "Lifestyle-Beratung", "Symptom-Monitoring"],
      sessions: "Wöchentlich 30 Min",
      duration: "3-6 Monate",
      format: "Online oder Telefon"
    },
    {
      id: 4,
      title: "Hormon-Monitoring App",
      type: "Digital Health",
      description: "Digitale Überwachung Ihrer Hormonspiegel und Symptome mit direkter Verbindung zu Ihrem Arzt.",
      features: ["Symptom-Tracking", "Laborwerte-Import", "Erinnerungen", "Arzt-Dashboard"],
      compatibility: "iOS & Android",
      price: "Kostenlos für AOK PLUS",
      dataProtection: "DSGVO-konform"
    }
  ];

  const hormoneTypes = [
    {
      name: "Östrogen",
      description: "Haupthormon für weibliche Eigenschaften, reguliert Menstruationszyklus und viele Körperfunktionen.",
      symptoms: ["Hitzewallungen", "Schlafstörungen", "Stimmungsschwankungen", "Trockenheit"],
      therapyOptions: ["Tabletten", "Pflaster", "Gel", "Sprays"]
    },
    {
      name: "Progesteron",
      description: "Wichtig für Knochengesundheit, Schlaf und emotionale Balance.",
      symptoms: ["Schlafprobleme", "Angst", "Gewichtszunahme", "Wassereinlagerungen"],
      therapyOptions: ["Kapseln", "Creme", "Pesssar", "Oral"]
    },
    {
      name: "Testosteron",
      description: "Auch bei Frauen wichtig für Energie, Libido und Muskelaufbau.",
      symptoms: ["Energiemangel", "Libidoverlust", "Muskelabbau", "Depression"],
      therapyOptions: ["Gel", "Creme", "Tabletten", "Injektionen"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hormontherapie & Telemedizin | AOK PLUS Wechseljahre</title>
        <meta name="description" content="Moderne Hormontherapie und telemedizinische Betreuung für Frauen in den Wechseljahren. Bioidentische Hormone und digitale Gesundheitsdienste." />
        <meta name="keywords" content="Hormontherapie Wechseljahre, bioidentische Hormone, Telemedizin, Östrogen, Progesteron, Hormonersatztherapie" />
        
        <meta property="og:title" content="Hormontherapie & Telemedizin | AOK PLUS" />
        <meta property="og:description" content="Moderne Hormontherapie und telemedizinische Betreuung für die Wechseljahre" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Hormontherapie Wechseljahre",
            "description": "Informationen zu Hormontherapie und telemedizinischer Betreuung in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/hormontherapie"
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Hormontherapie</span> & Telemedizin
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Moderne Hormonbehandlung kombiniert mit flexibler telemedizinischer Betreuung 
                  für eine optimale Versorgung in den Wechseljahren.
                </p>
              </div>
            </div>
          </section>

          {/* Therapy Options Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Unsere Therapieoptionen
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Von bioidentischen Hormonen bis zu digitaler Betreuung – finden Sie die passende Behandlung für Ihre Bedürfnisse.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {therapyOptions.map((therapy) => (
                    <Card key={therapy.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{therapy.title}</CardTitle>
                            <Badge variant={therapy.type.includes("Online") ? "secondary" : therapy.type.includes("Digital") ? "outline" : "default"}>
                              {therapy.type}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm mb-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>4.8</span>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {therapy.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          {therapy.duration && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{therapy.duration}</span>
                            </div>
                          )}
                          
                          {therapy.availability && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span>{therapy.availability}</span>
                            </div>
                          )}
                          
                          {therapy.coverage && (
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-muted-foreground" />
                              <span className="text-success font-medium">{therapy.coverage}</span>
                            </div>
                          )}
                          
                          {therapy.price && (
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-muted-foreground" />
                              <span className="text-success font-medium">{therapy.price}</span>
                            </div>
                          )}
                        </div>

                        {therapy.benefits && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Vorteile:</div>
                            <div className="flex flex-wrap gap-2">
                              {therapy.benefits.map((benefit, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {therapy.features && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Features:</div>
                            <div className="flex flex-wrap gap-2">
                              {therapy.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {therapy.includes && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Leistungen:</div>
                            <div className="flex flex-wrap gap-2">
                              {therapy.includes.map((item, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            {therapy.type.includes("Online") || therapy.type.includes("Digital") ? (
                              <>
                                <Monitor className="w-4 h-4 mr-2" />
                                Online starten
                              </>
                            ) : (
                              "Beratung buchen"
                            )}
                          </Button>
                          <Button variant="outline">
                            Mehr Infos
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Hormone Types Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Wichtige Hormone in den Wechseljahren
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Diese Hormone spielen eine zentrale Rolle während der Wechseljahre und können therapeutisch unterstützt werden.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {hormoneTypes.map((hormone, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{hormone.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {hormone.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-medium mb-2">Häufige Symptome bei Mangel:</div>
                            <div className="flex flex-wrap gap-1">
                              {hormone.symptoms.map((symptom, sympIndex) => (
                                <Badge key={sympIndex} variant="outline" className="text-xs">
                                  {symptom}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-sm font-medium mb-2">Therapieformen:</div>
                            <div className="flex flex-wrap gap-1">
                              {hormone.therapyOptions.map((option, optIndex) => (
                                <Badge key={optIndex} variant="secondary" className="text-xs">
                                  {option}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Hormonberatung vereinbaren
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Info Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">Sicherheit & Qualität</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Alle unsere Hormontherapien werden von spezialisierten Gynäkologen und Endokrinologen durchgeführt. 
                      Wir verwenden nur zugelassene Präparate und führen regelmäßige Kontrollen durch.
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="font-semibold text-primary">Zertifizierte Ärzte</div>
                        <div className="text-sm text-muted-foreground">Spezialisiert auf Hormontherapie</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-primary">Regelmäßige Kontrollen</div>
                        <div className="text-sm text-muted-foreground">Sichere Therapieüberwachung</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-primary">Individuelle Dosierung</div>
                        <div className="text-sm text-muted-foreground">Auf Sie abgestimmt</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Hormontherapie;