import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  MapPin, 
  Clock, 
  Star,
  Utensils,
  Calendar,
  Phone
} from "lucide-react";

const Ernaehrung = () => {
  const nutritionServices = [
    {
      id: 1,
      title: "Individuelle Ernährungsberatung Online",
      type: "Online",
      description: "Persönliche Beratung mit zertifizierten Ernährungsberatern speziell für Wechseljahre-Ernährung.",
      duration: "60 Min",
      price: "Kostenlos für AOK PLUS Versicherte",
      availability: "Mo-Fr 8:00-18:00",
      isAOKservice: true
    },
    {
      id: 2,
      title: "Wechseljahre-Ernährungsworkshop",
      type: "Präsenz",
      description: "Gruppenworkshop zu hormonausgleichender Ernährung und praktische Kochideen.",
      duration: "3 Stunden",
      participants: "8-12 Teilnehmerinnen",
      times: ["Sa 10:00-13:00"],
      location: "Dresden Zentrum",
      isAOKservice: true
    },
    {
      id: 3,
      title: "Kochkurs: Menopause Küche",
      type: "Präsenz",
      description: "Praktischer Kochkurs mit phytoöstrogenreichen Rezepten und Superfoods.",
      duration: "4 Stunden",
      participants: "6-8 Teilnehmerinnen",
      times: ["2. Sa im Monat"],
      location: "Dresden Neustadt",
      isAOKservice: false
    },
    {
      id: 4,
      title: "Ernährungs-App Begleitung",
      type: "Digital",
      description: "12-Wochen digitale Begleitung mit personalisierten Ernährungsplänen und Rezepten.",
      duration: "12 Wochen",
      features: ["Meal Planner", "Symptom Tracker", "Rezept-Datenbank"],
      isAOKservice: true
    }
  ];

  const nutritionTips = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Phytoöstrogene",
      description: "Soja, Leinsamen und Hülsenfrüchte können hormonelle Schwankungen natürlich ausgleichen."
    },
    {
      icon: <Star className="w-8 h-8 text-warning" />,
      title: "Calcium & Vitamin D",
      description: "Wichtig für die Knochengesundheit. Grünes Gemüse, Sesam und Fisch sind gute Quellen."
    },
    {
      icon: <Utensils className="w-8 h-8 text-success" />,
      title: "Omega-3-Fettsäuren",
      description: "Entzündungshemmend und gut für Herz und Gehirn. In Nüssen, Samen und Fisch enthalten."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ernährung in den Wechseljahren | AOK PLUS</title>
        <meta name="description" content="Individuelle Ernährungsberatung für die Wechseljahre. Online und vor Ort verfügbar. AOK PLUS Angebote für hormonausgleichende Ernährung." />
        <meta name="keywords" content="Wechseljahre Ernährung, Ernährungsberatung, Phytoöstrogene, Menopause Diät, AOK Ernährungsberatung" />
        
        <meta property="og:title" content="Ernährung in den Wechseljahren | AOK PLUS" />
        <meta property="og:description" content="Ernährungsberatung speziell für Frauen in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Ernährungsberatung Wechseljahre",
            "description": "Spezialisierte Ernährungsberatung für Frauen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/ernaehrung"
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
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Ernährung</span> in den Wechseljahren
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Die richtige Ernährung kann Wechseljahresbeschwerden lindern und Ihr Wohlbefinden steigern. 
                  Entdecken Sie unsere individuellen Beratungsangebote.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Unsere Ernährungsangebote
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Von individueller Beratung bis zu praktischen Kochkursen – finden Sie die passende Unterstützung für Ihre Ernährung.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {nutritionServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={service.type === "Online" ? "secondary" : service.type === "Digital" ? "outline" : "default"}>
                                {service.type}
                              </Badge>
                              {service.isAOKservice && (
                                <Badge variant="secondary" className="bg-primary/10 text-primary">
                                  AOK PLUS Leistung
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm mb-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>4.9</span>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{service.duration}</span>
                          </div>
                          
                          {service.price && (
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-muted-foreground" />
                              <span className="text-success font-medium">{service.price}</span>
                            </div>
                          )}
                          
                          {service.participants && (
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span>{service.participants}</span>
                            </div>
                          )}
                          
                          {service.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{service.location}</span>
                            </div>
                          )}
                          
                          {service.availability && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span>{service.availability}</span>
                            </div>
                          )}
                        </div>

                        {service.times && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-medium">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span>Termine:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {service.times.map((time, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {time}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.features && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Features:</div>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            {service.type === "Online" ? "Termin buchen" : "Anmelden"}
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

          {/* Tips Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Wichtige Nährstoffe in den Wechseljahren
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Diese Nährstoffe können helfen, Beschwerden zu lindern und die Gesundheit zu unterstützen.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {nutritionTips.map((tip, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          {tip.icon}
                        </div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tip.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Kostenlose Beratung buchen
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

export default Ernaehrung;