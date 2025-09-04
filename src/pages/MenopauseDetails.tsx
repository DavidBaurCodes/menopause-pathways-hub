import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart, Brain, Thermometer, Moon, Weight, Zap } from "lucide-react";

const MenopauseDetails = () => {
  const phases = [
    {
      title: "Prämenopause",
      age: "30er - frühe 40er",
      description: "Normale, regelmäßige Zyklen mit ersten subtilen hormonellen Veränderungen",
      symptoms: ["Leichte PMS-Veränderungen", "Gelegentliche Zyklusunregelmäßigkeiten"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Perimenopause", 
      age: "40er - frühe 50er",
      description: "Übergangsphase mit deutlichen hormonellen Schwankungen",
      symptoms: ["Unregelmäßige Zyklen", "Hitzewallungen", "Schlafstörungen", "Stimmungsschwankungen"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Menopause",
      age: "Durchschnitt 51 Jahre", 
      description: "Letzte Menstruation - rückblickend nach 12 Monaten ohne Periode diagnostiziert",
      symptoms: ["Keine Periode seit 12+ Monaten"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Postmenopause",
      age: "Nach der Menopause",
      description: "Phase nach der Menopause mit stabilisierten, niedrigen Hormonspiegeln",
      symptoms: ["Langfristige Auswirkungen", "Knochendichte-Veränderungen", "Herz-Kreislauf-Risiken"],
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const commonSymptoms = [
    { icon: <Thermometer className="w-5 h-5" />, name: "Hitzewallungen", description: "Plötzliche Wärmeschübe, oft mit Schwitzen" },
    { icon: <Moon className="w-5 h-5" />, name: "Schlafstörungen", description: "Einschlaf- und Durchschlafprobleme" },
    { icon: <Brain className="w-5 h-5" />, name: "Gedächtnisprobleme", description: "Brain Fog und Konzentrationsschwäche" },
    { icon: <Heart className="w-5 h-5" />, name: "Stimmungsschwankungen", description: "Emotionale Höhen und Tiefen" },
    { icon: <Weight className="w-5 h-5" />, name: "Gewichtsveränderungen", description: "Besonders im Bauchbereich" },
    { icon: <Zap className="w-5 h-5" />, name: "Energiemangel", description: "Müdigkeit und verringerte Ausdauer" }
  ];

  return (
    <>
      <Helmet>
        <title>Wechseljahre Detailguide | AOK PLUS - Umfassende Informationen</title>
        <meta name="description" content="Detaillierte Informationen zu allen Phasen der Wechseljahre, Symptomen und Behandlungsmöglichkeiten. Ihr umfassender Guide durch die Menopause." />
        <meta name="keywords" content="Wechseljahre Phasen, Menopause Symptome, Perimenopause, Postmenopause, Hormontherapie, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre Detailguide | AOK PLUS" />
        <meta property="og:description" content="Umfassende Informationen zu allen Aspekten der Wechseljahre" />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Wechseljahre Detailguide",
            "description": "Umfassende Informationen zu Wechseljahren und Menopause",
            "url": "https://aokplus-wechseljahre.de/wechseljahre-details"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ihr umfassender <span className="text-gradient">Wechseljahre-Guide</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Verstehen Sie die verschiedenen Phasen, Symptome und Behandlungsmöglichkeiten 
                  der Wechseljahre mit unserem detaillierten Leitfaden.
                </p>
                <Button variant="outline" asChild className="mb-8">
                  <a href="/assessment">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück zum Assessment
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Phases Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                  Die vier Phasen der Wechseljahre
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {phases.map((phase, index) => (
                    <Card key={index} className="relative overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={phase.color}>{phase.age}</Badge>
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                        <CardDescription>{phase.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-2 text-sm">Typische Anzeichen:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {symptom}
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

          {/* Common Symptoms */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                  Häufige Symptome verstehen
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {commonSymptoms.map((symptom, index) => (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                            {symptom.icon}
                          </div>
                          <CardTitle className="text-lg">{symptom.name}</CardTitle>
                        </div>
                        <CardDescription>{symptom.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Bereit für den nächsten Schritt?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Entdecken Sie praktische Tipps und bewährte Strategien für Ihren Alltag.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="gradient-primary text-white" asChild>
                        <a href="/lifehacks">Praktische Lifehacks entdecken</a>
                      </Button>
                      
                      <Button variant="outline" asChild>
                        <a href="/knowledge">Wissen vertiefen</a>
                      </Button>
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

export default MenopauseDetails;