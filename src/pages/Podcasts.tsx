import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Headphones, Play, Clock, Users, Heart, Briefcase } from "lucide-react";

const Podcasts = () => {
  const podcastCategories = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Gesundheit & Wellness",
      count: 15,
      color: "text-primary"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Arbeitsplatz & Karriere", 
      count: 8,
      color: "text-accent"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Persönliche Geschichten",
      count: 12,
      color: "text-success"
    }
  ];

  const featuredPodcasts = [
    {
      title: "Wechseljahre am Arbeitsplatz: Ein Gespräch mit HR-Expertin Dr. Schmidt",
      description: "Wie Unternehmen eine unterstützende Umgebung für Frauen in den Wechseljahren schaffen können.",
      duration: "45 Min",
      category: "Arbeitsplatz",
      guest: "Dr. Sarah Schmidt",
      date: "15. Nov 2024",
      featured: true
    },
    {
      title: "Hormontherapie: Mythen und Fakten mit Prof. Dr. Weber",
      description: "Eine evidenzbasierte Diskussion über moderne Ansätze der Hormonbehandlung.",
      duration: "38 Min",
      category: "Gesundheit", 
      guest: "Prof. Dr. Maria Weber",
      date: "8. Nov 2024",
      featured: true
    },
    {
      title: "Meine Wechseljahre-Reise: Julia erzählt ihre Geschichte",
      description: "Persönliche Einblicke einer 52-jährigen Unternehmerin über ihren Umgang mit den Wechseljahren.",
      duration: "29 Min",
      category: "Persönlich",
      guest: "Julia Müller",
      date: "1. Nov 2024",
      featured: false
    },
    {
      title: "Schlafprobleme in den Wechseljahren: Praktische Lösungen",
      description: "Schlafexperte gibt konkrete Tipps für bessere Nachtruhe während der Wechseljahre.",
      duration: "32 Min", 
      category: "Gesundheit",
      guest: "Dr. Thomas Klein",
      date: "25. Okt 2024",
      featured: false
    },
    {
      title: "Führung in den Wechseljahren: Stärke aus Erfahrung",
      description: "Wie Führungskräfte ihre Wechseljahre-Erfahrung als Stärke nutzen können.",
      duration: "41 Min",
      category: "Arbeitsplatz",
      guest: "Sabine Hoffmann", 
      date: "18. Okt 2024",
      featured: false
    },
    {
      title: "Sport und Bewegung: Ihr Körper in den Wechseljahren",
      description: "Fitnesstrainerin erklärt, wie sich Trainingsroutinen an hormonelle Veränderungen anpassen.",
      duration: "35 Min",
      category: "Gesundheit",
      guest: "Lisa Richter",
      date: "11. Okt 2024", 
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Podcasts & Medien | AOK PLUS - Wechseljahre-Gespräche</title>
        <meta name="description" content="Hören Sie inspirierende Podcasts zu Wechseljahren mit Expertenmeinungen, persönlichen Geschichten und praktischen Tipps für Gesundheit und Arbeitsplatz." />
        <meta name="keywords" content="Wechseljahre Podcast, Menopause Audio, Experteninterviews, Arbeitsplatz Wechseljahre, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre Podcasts | AOK PLUS" />
        <meta property="og:description" content="Inspirierende Audio-Inhalte zu Wechseljahren mit Experten und Betroffenen" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage", 
            "name": "Wechseljahre Podcasts",
            "description": "Sammlung von Podcasts und Audio-Inhalten zu Wechseljahren-Themen",
            "url": "https://aokplus-wechseljahre.de/podcasts"
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
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Podcasts & <span className="text-gradient">Medien</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Hören Sie inspirierende Gespräche mit Experten, persönliche Geschichten und 
                praktische Tipps für Ihren Weg durch die Wechseljahre.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Kategorien entdecken
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {podcastCategories.map((category, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 text-center">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-200 ${category.color}`}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.count} Episoden verfügbar
                      </p>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                        Anhören
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Podcasts */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Aktuelle Episoden
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPodcasts.map((podcast, index) => (
                  <Card key={index} className={`group hover:shadow-medium transition-all duration-300 ${podcast.featured ? 'ring-2 ring-primary/20' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant={podcast.featured ? "default" : "outline"} className="text-xs">
                          {podcast.category}
                        </Badge>
                        {podcast.featured && (
                          <Badge className="text-xs bg-gradient-primary text-white">
                            Neu
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-3">
                        {podcast.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed line-clamp-3">
                        {podcast.description}
                      </CardDescription>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Mit {podcast.guest}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{podcast.duration}</span>
                          </div>
                          <span>{podcast.date}</span>
                        </div>
                      </div>
                      
                      <Button size="sm" className="w-full gradient-primary text-white group/play">
                        <Play className="w-4 h-4 mr-2 group-hover/play:scale-110 transition-transform" />
                        Jetzt anhören
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Subscription CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <Headphones className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Verpassen Sie keine Episode
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Abonnieren Sie unseren Podcast und erhalten Sie neue Episoden automatisch. 
                  Verfügbar auf allen gängigen Podcast-Plattformen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Podcast abonnieren
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Alle Episoden
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

export default Podcasts;