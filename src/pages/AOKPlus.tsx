import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Heart, 
  Phone, 
  Users, 
  Zap, 
  CheckCircle,
  Star,
  Calendar,
  Euro
} from "lucide-react";

const AOKPlus = () => {
  const exclusiveServices = [
    {
      id: 1,
      title: "Hormonberatung Premium",
      category: "Medizinisch",
      description: "Individuelle Beratung durch spezialisierte Gynäkologen und Endokrinologen ohne Wartezeit.",
      features: [
        "Telemedizinische Sprechstunden",
        "Laborauswertung binnen 24h",
        "Individuelle Therapiepläne",
        "Direkter Kontakt zum Arzt"
      ],
      value: "Regulär 250€/Beratung",
      aokBenefit: "Kostenlos für AOK PLUS Versicherte",
      availability: "24/7 verfügbar"
    },
    {
      id: 2,
      title: "Wechseljahre-Coaching",
      category: "Lifestyle",
      description: "Persönliches 12-Wochen-Coaching-Programm mit zertifizierten Menopause-Coaches.",
      features: [
        "Wöchentliche 1:1 Sessions",
        "Personalisierte Strategien",
        "Lifestyle-Anpassungen",
        "Kontinuierliche Betreuung"
      ],
      value: "Regulär 800€/Programm",
      aokBenefit: "80% Kostenübernahme",
      duration: "12 Wochen"
    },
    {
      id: 3,
      title: "Präventions-Plus Paket",
      category: "Vorsorge",
      description: "Erweiterte Vorsorgeuntersuchungen und Gesundheits-Checks speziell für die Wechseljahre.",
      features: [
        "Hormonprofil-Analyse",
        "Knochendichte-Messung",
        "Herz-Kreislauf-Check",
        "Stoffwechsel-Analyse"
      ],
      value: "Regulär 450€/Check",
      aokBenefit: "Vollständig übernommen",
      frequency: "Jährlich empfohlen"
    },
    {
      id: 4,
      title: "Digitale Gesundheitsassistentin",
      category: "Digital",
      description: "KI-gestützte App mit personalisierten Empfehlungen und Symptom-Tracking.",
      features: [
        "Symptom-Dokumentation",
        "Personalisierte Tipps",
        "Medikamenten-Erinnerungen",
        "Arzt-Kommunikation"
      ],
      value: "Regulär 9,99€/Monat",
      aokBenefit: "Kostenlos für AOK PLUS",
      platforms: "iOS & Android"
    },
    {
      id: 5,
      title: "Wellness-Retreat Zuschuss",
      category: "Wellness",
      description: "Finanzielle Unterstützung für zertifizierte Wechseljahre-Wellness-Programme.",
      features: [
        "Partnerkliniken deutschlandweit",
        "Medizinische Betreuung",
        "Entspannungsprogramme",
        "Ernährungsberatung"
      ],
      value: "Regulär 1.200-2.500€",
      aokBenefit: "Bis zu 500€ Zuschuss",
      frequency: "Alle 2 Jahre"
    },
    {
      id: 6,
      title: "24/7 Wechseljahre-Hotline",
      category: "Support",
      description: "Rund-um-die-Uhr Beratung durch geschulte Fachkräfte für akute Beschwerden und Fragen.",
      features: [
        "Medizinische Erstberatung",
        "Krisenintervention",
        "Therapie-Vermittlung",
        "Mehrsprachiger Service"
      ],
      value: "Regulär 2,50€/Min",
      aokBenefit: "Kostenlos für AOK PLUS",
      languages: "Deutsch, Englisch, Türkisch"
    }
  ];

  const membershipBenefits = [
    {
      category: "Gesundheit",
      benefits: [
        "Kostenlose Gesundheits-Apps",
        "Erweiterte Vorsorgeuntersuchungen",
        "Bonus-Programme für Prävention",
        "Telemedizin ohne Zusatzkosten"
      ]
    },
    {
      category: "Service",
      benefits: [
        "Persönliche Ansprechpartner",
        "Schnelle Terminvermittlung",
        "Digitale Gesundheitsakte",
        "24/7 Service-Hotline"
      ]
    },
    {
      category: "Zusatzleistungen",
      benefits: [
        "Naturheilverfahren-Zuschuss",
        "Osteopathie-Behandlungen",
        "Professionelle Zahnreinigung",
        "Reiseschutzimpfungen"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sabine M., 52",
      location: "Dresden",
      text: "Die Hormonberatung über AOK PLUS hat mir so geholfen. Endlich hatte ich jemanden, der sich Zeit genommen und alles erklärt hat.",
      rating: 5,
      service: "Hormonberatung Premium"
    },
    {
      name: "Andrea K., 48",
      location: "Leipzig",
      text: "Das Coaching-Programm war genau das, was ich brauchte. Ich fühle mich viel besser vorbereitet auf diese Lebensphase.",
      rating: 5,
      service: "Wechseljahre-Coaching"
    },
    {
      name: "Martina L., 55",
      location: "Chemnitz",
      text: "Die App hilft mir täglich dabei, meine Symptome zu verstehen und rechtzeitig zu handeln. Einfach toll!",
      rating: 5,
      service: "Digitale Gesundheitsassistentin"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Meine AOK PLUS - Exklusive Wechseljahre-Leistungen | AOK PLUS</title>
        <meta name="description" content="Exklusive AOK PLUS Leistungen für Wechseljahre: Hormonberatung, Coaching, Prävention und 24/7 Support. Mehr Gesundheit, mehr Service." />
        <meta name="keywords" content="AOK PLUS Leistungen, Wechseljahre Versicherung, Hormonberatung, Coaching, Prävention, Krankenversicherung" />
        
        <meta property="og:title" content="Meine AOK PLUS Wechseljahre-Leistungen" />
        <meta property="og:description" content="Exklusive Leistungen und Services für AOK PLUS Versicherte in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthInsurancePlan",
            "name": "AOK PLUS Wechseljahre-Leistungen",
            "description": "Spezialisierte Krankenversicherungsleistungen für Frauen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/aok-plus"
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
                    <Shield className="w-8 h-8 text-warning" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Meine AOK PLUS</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Als AOK PLUS Versicherte profitieren Sie von exklusiven Leistungen für Ihre Gesundheit 
                  in den Wechseljahren. Mehr Service, mehr Unterstützung, mehr Wohlbefinden.
                </p>
              </div>
            </div>
          </section>

          {/* Exclusive Services Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Exklusive Wechseljahre-Leistungen
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Diese besonderen Services sind nur für AOK PLUS Versicherte verfügbar und unterstützen Sie optimal in den Wechseljahren.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {exclusiveServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-medium transition-shadow border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {service.category}
                            </Badge>
                          </div>
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="text-sm font-medium">Leistungen:</div>
                          <ul className="space-y-1">
                            {service.features.map((feature, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-3 text-sm">
                          <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                            <div className="font-medium text-destructive mb-1">Regulärer Preis:</div>
                            <p className="text-muted-foreground">{service.value}</p>
                          </div>
                          <div className="p-3 bg-success/5 border border-success/20 rounded-lg">
                            <div className="font-medium text-success mb-1">Ihr AOK PLUS Vorteil:</div>
                            <p className="text-muted-foreground">{service.aokBenefit}</p>
                          </div>
                        </div>

                        <div className="text-xs text-muted-foreground">
                          {service.availability && <div><strong>Verfügbarkeit:</strong> {service.availability}</div>}
                          {service.duration && <div><strong>Dauer:</strong> {service.duration}</div>}
                          {service.frequency && <div><strong>Empfehlung:</strong> {service.frequency}</div>}
                          {service.platforms && <div><strong>Verfügbar für:</strong> {service.platforms}</div>}
                          {service.languages && <div><strong>Sprachen:</strong> {service.languages}</div>}
                        </div>

                        <Button className="w-full mt-4 gradient-primary text-white">
                          <Heart className="w-4 h-4 mr-2" />
                          Leistung in Anspruch nehmen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Membership Benefits */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Weitere AOK PLUS Vorteile
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Als AOK PLUS Versicherte genießen Sie viele weitere Vorteile für Ihre Gesundheit und Ihr Wohlbefinden.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {membershipBenefits.map((category, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          {category.category === "Gesundheit" ? <Heart className="w-6 h-6 text-primary" /> :
                           category.category === "Service" ? <Phone className="w-6 h-6 text-primary" /> :
                           <Zap className="w-6 h-6 text-primary" />}
                        </div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-left">
                          {category.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              {benefit}
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

          {/* Testimonials */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Das sagen unsere Versicherten
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Erfahrungen von AOK PLUS Versicherten mit unseren Wechseljahre-Leistungen.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({length: testimonial.rating}).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Badge variant="outline" className="w-fit">{testimonial.service}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground italic">
                          "{testimonial.text}"
                        </p>
                        <div className="text-xs text-muted-foreground">
                          <div className="font-medium">{testimonial.name}</div>
                          <div>{testimonial.location}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Noch nicht AOK PLUS Versicherte?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Wechseln Sie jetzt und profitieren Sie von unseren exklusiven Wechseljahre-Leistungen 
                  und dem umfassenden Gesundheitsschutz der AOK PLUS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    <Users className="w-4 h-4 mr-2" />
                    Jetzt Mitglied werden
                  </Button>
                  <Button variant="outline" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Beratungstermin vereinbaren
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

export default AOKPlus;