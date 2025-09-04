import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Users, 
  MapPin, 
  Clock, 
  Star,
  Phone,
  Calendar,
  Shield
} from "lucide-react";

const Psyche = () => {
  const psychologicalServices = [
    {
      id: 1,
      title: "Psychologische Beratung Wechseljahre",
      type: "Einzelberatung",
      description: "Individuelle Unterstützung bei emotionalen Herausforderungen und psychischen Belastungen in den Wechseljahren.",
      duration: "50 Min",
      availability: "Termine innerhalb 1 Woche",
      specializations: ["Hormonelle Stimmungsschwankungen", "Selbstbild & Identität", "Partnerschaftsthemen"],
      coverage: "Teilweise Kassenleistung"
    },
    {
      id: 2,
      title: "Wechseljahre-Gesprächsgruppe",
      type: "Gruppentherapie",
      description: "Geschützter Raum zum Austausch mit anderen Frauen und professioneller psychologischer Begleitung.",
      duration: "90 Min wöchentlich",
      groupSize: "6-8 Teilnehmerinnen",
      sessions: "12 Termine",
      location: "Dresden Zentrum",
      nextStart: "5. März 2024"
    },
    {
      id: 3,
      title: "Online-Therapie Menopause",
      type: "Online",
      description: "Flexible psychotherapeutische Begleitung via Videosprechstunde für alle Phasen der Wechseljahre.",
      duration: "50 Min",
      availability: "Mo-Fr 8:00-20:00, Sa 9:00-15:00",
      platforms: ["Sichere Videoplattform", "Chat-Support", "Notfall-Hotline"],
      coverage: "Kassenleistung möglich"
    },
    {
      id: 4,
      title: "Achtsamkeitsbasierte Therapie",
      type: "Hybrid",
      description: "Kombination aus Achtsamkeitspraxis und psychotherapeutischen Ansätzen zur Stressbewältigung.",
      duration: "8 Wochen à 120 Min",
      format: "4x Präsenz + 4x Online",
      techniques: ["MBSR", "Akzeptanz-Commitment-Therapie", "Emotionsregulation"],
      location: "Dresden Neustadt"
    }
  ];

  const mentalHealthTips = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Emotionale Achtsamkeit",
      description: "Lernen Sie, Ihre Gefühle wahrzunehmen und anzunehmen, ohne sie zu bewerten.",
      practices: ["Gefühls-Tagebuch", "Emotionscheck-ins", "Selbstmitgefühl"]
    },
    {
      icon: <Users className="w-12 h-12 text-success" />,
      title: "Soziale Verbindungen",
      description: "Starke Beziehungen sind ein wichtiger Schutzfaktor für die psychische Gesundheit.",
      practices: ["Peer-Gruppen", "Familiengespräche", "Freundschaftspflege"]
    },
    {
      icon: <Shield className="w-12 h-12 text-warning" />,
      title: "Resilienz stärken",
      description: "Entwickeln Sie Ihre psychische Widerstandskraft für herausfordernde Zeiten.",
      practices: ["Stressmanagement", "Positive Psychologie", "Bewältigungsstrategien"]
    }
  ];

  const commonChallenges = [
    {
      challenge: "Stimmungsschwankungen",
      description: "Hormonelle Veränderungen können zu plötzlichen Stimmungstiefs oder Reizbarkeit führen.",
      support: "Verhaltenstherapie, Achtsamkeitsübungen, ggf. hormonelle Unterstützung"
    },
    {
      challenge: "Selbstwertgefühl",
      description: "Körperliche Veränderungen können das Selbstbild und Selbstwertgefühl beeinträchtigen.",
      support: "Kognitive Therapie, Körperakzeptanz-Training, Selbstfürsorge-Strategien"
    },
    {
      challenge: "Ängste & Sorgen",
      description: "Zukunftsängste und Sorgen um Gesundheit und Alter können verstärkt auftreten.",
      support: "Angsttherapie, Entspannungsverfahren, rationale Problemlösung"
    },
    {
      challenge: "Partnerschaftsprobleme",
      description: "Veränderungen in Sexualität und Intimität können Beziehungen belasten.",
      support: "Paartherapie, Kommunikationstraining, Sexualberatung"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Psychische Gesundheit in den Wechseljahren | AOK PLUS</title>
        <meta name="description" content="Professionelle psychologische Unterstützung für Frauen in den Wechseljahren. Einzelberatung, Gruppentherapie und Online-Angebote." />
        <meta name="keywords" content="Wechseljahre Psychologie, psychische Gesundheit, Menopause Therapie, Stimmungsschwankungen, Beratung" />
        
        <meta property="og:title" content="Psychische Gesundheit Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Psychologische Begleitung und Therapie für Frauen in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Psychische Gesundheit Wechseljahre",
            "description": "Psychologische Unterstützung und Therapie für Frauen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/psyche"
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
                    <Brain className="w-8 h-8 text-warning" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Psychische Gesundheit</span> in den Wechseljahren
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Die Wechseljahre bringen nicht nur körperliche, sondern auch emotionale Veränderungen mit sich. 
                  Professionelle Unterstützung kann Ihnen helfen, diese Phase gestärkt zu meistern.
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
                    Unsere psychologischen Angebote
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Von Einzelberatung bis Gruppentherapie – finden Sie die passende Unterstützung für Ihre psychische Gesundheit.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {psychologicalServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            <Badge variant={service.type === "Online" ? "secondary" : service.type === "Hybrid" ? "outline" : "default"}>
                              {service.type}
                            </Badge>
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
                          
                          {service.availability && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span>{service.availability}</span>
                            </div>
                          )}
                          
                          {service.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{service.location}</span>
                            </div>
                          )}
                          
                          {service.coverage && (
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-muted-foreground" />
                              <span className="text-success font-medium">{service.coverage}</span>
                            </div>
                          )}
                          
                          {service.nextStart && (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span>Nächster Start: {service.nextStart}</span>
                            </div>
                          )}
                        </div>

                        {service.specializations && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Schwerpunkte:</div>
                            <div className="flex flex-wrap gap-2">
                              {service.specializations.map((spec, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.techniques && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Methoden:</div>
                            <div className="flex flex-wrap gap-2">
                              {service.techniques.map((technique, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {technique}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.platforms && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Leistungen:</div>
                            <div className="flex flex-wrap gap-2">
                              {service.platforms.map((platform, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            Termin vereinbaren
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

          {/* Challenges Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Häufige psychische Herausforderungen
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Diese emotionalen Themen beschäftigen viele Frauen in den Wechseljahren. Sie sind nicht allein.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {commonChallenges.map((item, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{item.challenge}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Unterstützung:</div>
                          <p className="text-sm text-success">
                            {item.support}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {mentalHealthTips.map((tip, index) => (
                    <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          {tip.icon}
                        </div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tip.description}
                        </p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Praktiken:</div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {tip.practices.map((practice, practiceIndex) => (
                              <Badge key={practiceIndex} variant="outline" className="text-xs">
                                {practice}
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

export default Psyche;