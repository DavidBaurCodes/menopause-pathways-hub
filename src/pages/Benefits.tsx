import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Phone, FileText, ArrowRight, Star, Clock } from "lucide-react";

const Benefits = () => {
  const insuranceBenefits = [
    {
      title: "Hormontherapie-Abdeckung",
      description: "Vollständige Übernahme verschiedener Hormonbehandlungen und regelmäßiger Kontrollen.",
      coverage: "100%",
      included: ["Bioidentische Hormone", "Patches & Gels", "Regelmäßige Bluttests", "Gynäkologische Kontrollen"],
      premium: true
    },
    {
      title: "Telemedizinische Beratung",
      description: "24/7 Zugang zu spezialisierten Wechseljahres-Ärzten per Video-Call.",
      coverage: "Unbegrenzt",
      included: ["Gynäkologen-Konsult", "Endokrinologen", "Ernährungsberatung", "Psychologische Unterstützung"],
      premium: true
    },
    {
      title: "Alternative Therapien",
      description: "Abdeckung für Akupunktur, Osteopathie und andere komplementäre Behandlungen.",
      coverage: "80%",
      included: ["Akupunktur", "Osteopathie", "Homöopathie", "Phytotherapie"],
      premium: false
    },
    {
      title: "Präventive Maßnahmen",
      description: "Umfassende Vorsorgeuntersuchungen und Früherkennung wechseljahres-spezifischer Risiken.",
      coverage: "100%",
      included: ["Knochendichtemessung", "Mammographie", "Kardio-Check", "Hautkrebs-Screening"],
      premium: false
    },
    {
      title: "Wellness & Sport",
      description: "Zuschüsse für Fitnessstudios, Yoga-Kurse und Wellness-Behandlungen.",
      coverage: "Bis 500€/Jahr",
      included: ["Fitnessstudio-Mitgliedschaft", "Yoga & Pilates", "Massage-Therapie", "Entspannungskurse"],
      premium: false
    },
    {
      title: "Nahrungsergänzung",
      description: "Erstattung für medizinisch empfohlene Supplemente und Vitamine.",
      coverage: "50%",
      included: ["Vitamin D3", "Omega-3", "Magnesium", "Pflanzliche Präparate"],
      premium: false
    }
  ];

  const serviceChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefonberatung",
      description: "Persönliche Beratung durch unsere Gesundheitsexperten",
      availability: "Mo-Fr 8-18 Uhr",
      contact: "0800 AOK PLUS"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Online-Antrag",
      description: "Schnelle digitale Beantragung von Leistungen",
      availability: "24/7 verfügbar",
      contact: "portal.aokplus.de"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vor-Ort-Service",
      description: "Persönliche Beratung in über 100 Geschäftsstellen",
      availability: "Nach Terminvereinbarung",
      contact: "Filiale finden"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Versicherungsleistungen | AOK PLUS - Wechseljahre-Versicherung</title>
        <meta name="description" content="Exklusive Versicherungsleistungen für Wechseljahre-Gesundheit. Hormontherapie, Telemedizin, alternative Behandlungen und Präventionsmaßnahmen." />
        <meta name="keywords" content="Wechseljahre Versicherung, Hormontherapie Kostenübernahme, Telemedizin, AOK PLUS Leistungen" />
        
        <meta property="og:title" content="Wechseljahre-Versicherungsleistungen | AOK PLUS" />
        <meta property="og:description" content="Umfassende Versicherungsabdeckung für alle Wechseljahres-Bedürfnisse" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "AOK PLUS Wechseljahre-Versicherung",
            "description": "Specialized insurance coverage for menopause health needs",
            "url": "https://aokplus-wechseljahre.de/benefits",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "0800-AOK-PLUS",
              "contactType": "customer service"
            }
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
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Versicherungs<span className="text-gradient">leistungen</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Maßgeschneiderte Versicherungslösungen für Ihre Wechseljahre-Gesundheit. 
                Von Hormontherapie bis Wellness - wir haben Sie umfassend abgesichert.
              </p>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ihre exklusiven Leistungen
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Speziell entwickelte Versicherungspakete für alle Aspekte der Wechseljahre-Gesundheit.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insuranceBenefits.map((benefit, index) => (
                  <Card key={index} className={`group hover:shadow-medium transition-all duration-300 ${benefit.premium ? 'ring-2 ring-primary/20 bg-gradient-to-b from-primary/5 to-transparent' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          variant={benefit.premium ? "default" : "outline"}
                          className={benefit.premium ? "gradient-primary text-white" : ""}
                        >
                          {benefit.premium ? "Premium" : "Standard"}
                        </Badge>
                        {benefit.premium && (
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {benefit.title}
                      </CardTitle>
                      <div className="text-2xl font-bold text-primary">
                        {benefit.coverage}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Enthalten:</h4>
                        <div className="space-y-1">
                          {benefit.included.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        variant={benefit.premium ? "default" : "outline"}
                        size="sm" 
                        className={`w-full ${benefit.premium ? 'gradient-primary text-white' : 'border-primary text-primary hover:bg-primary/5'}`}
                      >
                        Leistung beantragen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Channels */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ihre Service-Kanäle
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wählen Sie den für Sie passenden Weg für Beratung, Anträge und Unterstützung.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {serviceChannels.map((channel, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform text-primary">
                        {channel.icon}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {channel.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {channel.description}
                      </CardDescription>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{channel.availability}</span>
                        </div>
                        <div className="font-medium text-primary">
                          {channel.contact}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                        Kontakt aufnehmen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Information */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Transparente Konditionen
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Keine versteckten Kosten - alle Leistungen auf einen Blick.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Standard Package */}
                  <Card className="hover:shadow-medium transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl">Standard Paket</CardTitle>
                      <div className="text-3xl font-bold text-primary">
                        Beitragsfrei
                      </div>
                      <CardDescription>
                        Grundlegende Wechseljahres-Unterstützung für alle AOK PLUS Mitglieder
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {["Präventive Maßnahmen", "Wellness-Zuschuss", "Nahrungsergänzung", "Alternative Therapien"].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                        Bereits inklusive
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Premium Package */}
                  <Card className="ring-2 ring-primary/20 bg-gradient-to-b from-primary/5 to-transparent hover:shadow-medium transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CardTitle className="text-2xl">Premium Paket</CardTitle>
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        +15€<span className="text-lg font-normal text-muted-foreground">/Monat</span>
                      </div>
                      <CardDescription>
                        Umfassende Wechseljahres-Betreuung mit exklusiven Zusatzleistungen
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {["Alle Standard-Leistungen", "Hormontherapie 100%", "Telemedizin unbegrenzt", "Premium-Support"].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full gradient-primary text-white shadow-medium">
                        Premium upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Haben Sie Fragen zu Ihren Leistungen?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Unsere Versicherungsexperten beraten Sie gerne zu allen Aspekten 
                  Ihrer Wechseljahres-Versicherung und finden die beste Lösung für Sie.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anrufen
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Online-Beratung
                    <ArrowRight className="w-5 h-5 ml-2" />
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

export default Benefits;