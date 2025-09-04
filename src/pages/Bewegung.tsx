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
  Play,
  Calendar
} from "lucide-react";

const Bewegung = () => {
  const movementPrograms = [
    {
      id: 1,
      title: "Beckenbodentraining Online",
      type: "Virtual",
      description: "Speziell entwickelt für Frauen in den Wechseljahren zur Stärkung des Beckenbodens.",
      duration: "30 Min",
      level: "Anfänger",
      participants: "12-15 Teilnehmerinnen",
      times: ["Mo 18:00", "Mi 19:30", "Fr 17:00"],
      isAOKCourse: true
    },
    {
      id: 2,
      title: "Hormon-Yoga",
      type: "Hybrid",
      description: "Yoga-Übungen zur natürlichen Hormonregulation und Stressreduktion.",
      duration: "60 Min",
      level: "Alle Level",
      participants: "8-12 Teilnehmerinnen",
      times: ["Di 19:00", "Sa 10:00"],
      isAOKCourse: true
    },
    {
      id: 3,
      title: "Krafttraining 50+",
      type: "Präsenz",
      description: "Gelenkschonendes Krafttraining zur Vorbeugung von Osteoporose.",
      duration: "45 Min",
      level: "Fortgeschritten",
      participants: "6-10 Teilnehmerinnen",
      times: ["Mo 17:00", "Do 18:00"],
      location: "Dresden Neustadt",
      isAOKCourse: false
    },
    {
      id: 4,
      title: "Aqua-Fitness Menopause",
      type: "Präsenz",
      description: "Wassergymnastik speziell für Beschwerden in den Wechseljahren.",
      duration: "50 Min",
      level: "Alle Level",
      participants: "12-16 Teilnehmerinnen",
      times: ["Mi 16:00", "Fr 18:30"],
      location: "Dresden Süd",
      isAOKCourse: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bewegung in den Wechseljahren | AOK PLUS</title>
        <meta name="description" content="Entdecken Sie Bewegungsprogramme speziell für Frauen in den Wechseljahren. Von Beckenbodentraining bis Hormon-Yoga – online und vor Ort." />
        <meta name="keywords" content="Wechseljahre Sport, Beckenbodentraining, Hormon-Yoga, Krafttraining, Aqua-Fitness, AOK Präventionskurse" />
        
        <meta property="og:title" content="Bewegung in den Wechseljahren | AOK PLUS" />
        <meta property="og:description" content="Bewegungsprogramme für Frauen in den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "AOK PLUS Bewegungsprogramme Wechseljahre",
            "description": "Spezialisierte Bewegungsprogramme für Frauen in den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/bewegung"
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-success" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Bewegung</span> in den Wechseljahren
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Entdecken Sie speziell entwickelte Bewegungsprogramme, die Ihren Körper stärken 
                  und Ihr Wohlbefinden in den Wechseljahren unterstützen.
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
                    Unsere Bewegungsprogramme
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Von virtuellen Kursen bis zu Präsenztraining – finden Sie das perfekte Programm für Ihre Bedürfnisse.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {movementPrograms.map((program) => (
                    <Card key={program.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={program.type === "Virtual" ? "secondary" : program.type === "Hybrid" ? "outline" : "default"}>
                                {program.type}
                              </Badge>
                              {program.isAOKCourse && (
                                <Badge variant="secondary" className="bg-success/10 text-success">
                                  AOK Präventionskurs
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm mb-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>4.8</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {program.participants}
                            </span>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-muted-foreground" />
                            <span>{program.level}</span>
                          </div>
                          {program.location && (
                            <div className="flex items-center gap-2 col-span-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{program.location}</span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>Kurszeiten:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {program.times.map((time, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {time}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            {program.type === "Virtual" ? (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Online teilnehmen
                              </>
                            ) : (
                              "Anmelden"
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

          {/* Benefits Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                  Warum Bewegung in den Wechseljahren?
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg">Hormonbalance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Regelmäßige Bewegung hilft, Hormonschwankungen auszugleichen und Beschwerden zu lindern.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Users className="w-12 h-12 text-success mx-auto mb-4" />
                      <CardTitle className="text-lg">Knochengesundheit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Krafttraining und gewichtsbelastende Übungen beugen Osteoporose vor.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Star className="w-12 h-12 text-warning mx-auto mb-4" />
                      <CardTitle className="text-lg">Stimmung</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Sport setzt Endorphine frei und verbessert die psychische Gesundheit.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium" asChild>
                    <a href="#programs">Programm finden</a>
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

export default Bewegung;