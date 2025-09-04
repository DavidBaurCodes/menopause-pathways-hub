import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  Filter,
  Star
} from "lucide-react";

const MedicalExperts = () => {
  const [postalCode, setPostalCode] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const specialties = [
    "Gynäkologen",
    "Dermatologen", 
    "Kardiologen",
    "HNO-Ärzte",
    "Osteopathen",
    "Endokrinologen",
    "Physiotherapeuten",
    "Psychologen",
    "Psychotherapeuten",
    "Ernährungsberater"
  ];

  const mockExperts = [
    {
      id: 1,
      name: "Dr. med. Sarah Weber",
      specialty: "Gynäkologin",
      specialization: "Frauengesundheit & Wechseljahre",
      address: "Hauptstraße 123, 01067 Dresden",
      phone: "0351 123456",
      email: "praxis@dr-weber.de",
      rating: 4.8,
      reviews: 156,
      availability: "Termine verfügbar",
      distance: "2.1 km",
      languages: ["Deutsch", "Englisch"],
      acceptsInsurance: true,
      onlineBooking: true
    },
    {
      id: 2,
      name: "Dr. med. Michael Hoffmann", 
      specialty: "Endokrinologe",
      specialization: "Hormontherapie & Metabolismus",
      address: "Prager Straße 45, 01069 Dresden",
      phone: "0351 789012",
      email: "kontakt@endokrinologie-dresden.de",
      rating: 4.9,
      reviews: 203,
      availability: "Wartezeit: 2-3 Wochen",
      distance: "3.5 km",
      languages: ["Deutsch"],
      acceptsInsurance: true,
      onlineBooking: false
    },
    {
      id: 3,
      name: "Lisa Müller",
      specialty: "Physiotherapeutin",
      specialization: "Beckenbodentherapie & Frauengesundheit",
      address: "Altmarkt 15, 01067 Dresden",
      phone: "0351 345678",
      email: "info@physio-mueller.de",
      rating: 4.7,
      reviews: 89,
      availability: "Termine verfügbar",
      distance: "1.8 km",
      languages: ["Deutsch", "Französisch"],
      acceptsInsurance: true,
      onlineBooking: true
    },
    {
      id: 4,
      name: "Dr. med. Andrea Schmidt",
      specialty: "Psychotherapeutin",
      specialization: "Lebensphasenberatung & Wechseljahre",
      address: "Königsbrücker Straße 78, 01099 Dresden",
      phone: "0351 567890",
      email: "kontakt@psychotherapie-schmidt.de",
      rating: 4.6,
      reviews: 127,
      availability: "Wartezeit: 4-6 Wochen",
      distance: "4.2 km",
      languages: ["Deutsch", "Englisch"],
      acceptsInsurance: true,
      onlineBooking: false
    },
    {
      id: 5,
      name: "Dr. med. Thomas Richter",
      specialty: "Kardiologe",
      specialization: "Herz-Kreislauf & Wechseljahre",
      address: "Fetscherstraße 12, 01307 Dresden",
      phone: "0351 234567",
      email: "praxis@kardiologie-richter.de",
      rating: 4.5,
      reviews: 89,
      availability: "Termine verfügbar",
      distance: "5.1 km",
      languages: ["Deutsch"],
      acceptsInsurance: true,
      onlineBooking: true
    },
    {
      id: 6,
      name: "Maria Hoffmann",
      specialty: "Ernährungsberaterin",
      specialization: "Wechseljahre-Ernährung & Stoffwechsel",
      address: "Neustadt Markt 8, 01097 Dresden",
      phone: "0351 876543",
      email: "beratung@ernaehrung-hoffmann.de",
      rating: 4.9,
      reviews: 76,
      availability: "Termine verfügbar",
      distance: "2.8 km",
      languages: ["Deutsch", "Italienisch"],
      acceptsInsurance: false,
      onlineBooking: true
    },
    {
      id: 7,
      name: "Dr. med. Claudia Berndt",
      specialty: "Dermatologin",
      specialization: "Hautveränderungen in den Wechseljahren",
      address: "Wilsdruffer Straße 25, 01067 Dresden",
      phone: "0351 987654",
      email: "info@hautarzt-berndt.de",
      rating: 4.7,
      reviews: 142,
      availability: "Wartezeit: 1-2 Wochen",
      distance: "1.5 km",
      languages: ["Deutsch", "Spanisch"],
      acceptsInsurance: true,
      onlineBooking: true
    },
    {
      id: 8,
      name: "Frank Weber",
      specialty: "Osteopath",
      specialization: "Ganzheitliche Behandlung & Wechseljahre",
      address: "Bautzner Straße 67, 01099 Dresden",
      phone: "0351 456789",
      email: "praxis@osteopathie-weber.de",
      rating: 4.8,
      reviews: 94,
      availability: "Termine verfügbar",
      distance: "3.7 km",
      languages: ["Deutsch", "Englisch"],
      acceptsInsurance: false,
      onlineBooking: true
    }
  ];

  const handleSearch = () => {
    // Simulate search - in real implementation this would be an API call
    if (postalCode.length >= 5) {
      setSearchResults(mockExperts);
    }
  };

  return (
    <>
      <Helmet>
        <title>Medizinische Experten für Wechseljahre | AOK PLUS</title>
        <meta name="description" content="Finden Sie qualifizierte medizinische Experten für Frauengesundheit und Wechseljahre in Ihrer Nähe. Von Gynäkologen bis Ernährungsberatern." />
        <meta name="keywords" content="Wechseljahre Ärzte, Gynäkologe, Endokrinologe, Physiotherapie, Psychologe, Ernährungsberatung, Frauengesundheit" />
        
        <meta property="og:title" content="Medizinische Experten für Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Qualifizierte Experten für Frauengesundheit in Ihrer Nähe finden" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Medizinische Experten für Wechseljahre",
            "description": "Verzeichnis qualifizierter medizinischer Experten für Frauengesundheit und Wechseljahre",
            "url": "https://aokplus-wechseljahre.de/medical-experts"
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
                  Medizinische Experten für <span className="text-gradient">Frauengesundheit</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Finden Sie qualifizierte Ärzte, Therapeuten und Berater, die sich auf die Begleitung 
                  von Frauen in den Wechseljahren spezialisiert haben.
                </p>
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      Experten in Ihrer Nähe finden
                    </CardTitle>
                    <CardDescription>
                      Geben Sie Ihre Postleitzahl ein und wählen Sie den gewünschten Fachbereich
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Input
                          placeholder="Postleitzahl eingeben (z.B. 01067)"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          maxLength={5}
                        />
                      </div>
                      <div className="flex-1">
                        <Select value={specialty} onValueChange={setSpecialty}>
                          <SelectTrigger>
                            <SelectValue placeholder="Fachbereich wählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Alle Fachbereiche</SelectItem>
                            {specialties.map((spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button 
                      onClick={handleSearch} 
                      className="w-full"
                      disabled={postalCode.length < 5}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Experten suchen
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Results Section */}
          {searchResults.length > 0 && (
            <section className="py-12 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">
                      {searchResults.length} Experten in Ihrer Nähe
                    </h2>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {searchResults.map((expert) => (
                      <Card key={expert.id} className="hover:shadow-medium transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
                                  <Badge variant="secondary" className="mb-2">
                                    {expert.specialty}
                                  </Badge>
                                  <p className="text-sm text-muted-foreground">
                                    {expert.specialization}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-medium">{expert.rating}</span>
                                  <span className="text-muted-foreground">
                                    ({expert.reviews} Bewertungen)
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-muted-foreground" />
                                  <span>{expert.address}</span>
                                  <Badge variant="outline">
                                    {expert.distance}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-muted-foreground" />
                                  <span>{expert.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4 text-muted-foreground" />
                                  <span>{expert.email}</span>
                                </div>
                              <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-muted-foreground" />
                                  <span className={expert.availability.includes("verfügbar") ? "text-success" : "text-warning"}>
                                    {expert.availability}
                                  </span>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-2 mt-4">
                                <span className="text-sm text-muted-foreground">Sprachen:</span>
                                {expert.languages.map((lang) => (
                                  <Badge key={lang} variant="outline">
                                    {lang}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex flex-wrap items-center gap-2 mt-2">
                                {expert.acceptsInsurance && (
                                  <Badge variant="secondary">Kassenpatienten</Badge>
                                )}
                                {expert.onlineBooking && (
                                  <Badge variant="secondary">Online-Terminbuchung</Badge>
                                )}
                              </div>
                            </div>

                            <div className="lg:w-48 flex flex-col gap-2">
                              <Button className="w-full" asChild>
                                <a href={`tel:${expert.phone}`}>
                                  Termin vereinbaren
                                </a>
                              </Button>
                              <Button variant="outline" className="w-full" asChild>
                                <a href={`mailto:${expert.email}`}>
                                  Kontakt aufnehmen
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Info Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                  Unsere Fachbereiche
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specialties.map((specialty, index) => {
                    const descriptions = {
                      "Gynäkologen": "Spezialisiert auf Frauengesundheit und hormonelle Veränderungen",
                      "Dermatologen": "Hautveränderungen und dermatologische Probleme in den Wechseljahren",
                      "Kardiologen": "Herz-Kreislauf-Gesundheit und Risikofaktoren",
                      "HNO-Ärzte": "Schlafstörungen und Atemwegsveränderungen",
                      "Osteopathen": "Ganzheitliche Behandlung von Beschwerden des Bewegungsapparats",
                      "Endokrinologen": "Hormonspezialisten für komplexe Hormontherapien",
                      "Physiotherapeuten": "Beckenbodentherapie und körperliche Rehabilitation",
                      "Psychologen": "Psychologische Begleitung und Unterstützung",
                      "Psychotherapeuten": "Therapeutische Behandlung von psychischen Belastungen",
                      "Ernährungsberater": "Individuell angepasste Ernährungskonzepte"
                    };

                    return (
                      <Card key={index} className="text-center">
                        <CardHeader>
                          <CardTitle className="text-lg">{specialty}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            {descriptions[specialty as keyof typeof descriptions]}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
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

export default MedicalExperts;