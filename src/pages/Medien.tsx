import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  BookOpen, 
  Video, 
  Phone, 
  Linkedin, 
  MessageCircle,
  Download,
  Play,
  ExternalLink
} from "lucide-react";

const Medien = () => {
  const mediaChannels = [
    {
      id: 1,
      title: "Wechseljahre-Podcast",
      type: "Audio",
      description: "Wöchentlicher Podcast mit Expertinnen, Betroffenen und praktischen Tipps für den Alltag.",
      episodes: "52 Folgen",
      duration: "20-30 Min",
      platforms: ["Spotify", "Apple Podcasts", "Google Podcasts"],
      rating: 4.8,
      subscribers: "25k+"
    },
    {
      id: 2,
      title: "Video-Bibliothek",
      type: "Video",
      description: "Umfassende Sammlung von Erklärvideos, Übungsanleitungen und Experteninterviews.",
      content: "150+ Videos",
      categories: ["Symptome", "Therapien", "Lifestyle", "Bewegung"],
      viewTime: "5-15 Min",
      views: "500k+"
    },
    {
      id: 3,
      title: "Blog & Ratgeber",
      type: "Text",
      description: "Aktuelle Artikel, wissenschaftliche Erkenntnisse und persönliche Erfahrungsberichte.",
      articles: "200+ Artikel",
      updateFrequency: "2x wöchentlich",
      topics: ["Medizin", "Ernährung", "Psyche", "Partnerschaft"],
      readTime: "3-8 Min"
    },
    {
      id: 4,
      title: "Social Media Kanäle",
      type: "Social",
      description: "Aktuelle Tipps, Community-Austausch und Live-Sessions auf verschiedenen Plattformen.",
      platforms: ["LinkedIn", "Instagram", "Facebook", "WhatsApp"],
      followers: "85k+",
      engagement: "Täglich neue Inhalte",
      features: ["Live Q&A", "Community Posts", "Experten-Takeover"]
    },
    {
      id: 5,
      title: "Telefonberatung",
      type: "Persönlich",
      description: "Direkte Beratung durch geschulte Beraterinnen für individuelle Fragen und Anliegen.",
      availability: "Mo-Fr 8:00-18:00",
      languages: ["Deutsch", "Englisch", "Türkisch"],
      waitTime: "Durchschnittlich 2 Min",
      satisfaction: "96% Zufriedenheit"
    },
    {
      id: 6,
      title: "Literatur-Empfehlungen",
      type: "Bücher",
      description: "Kuratierte Buchempfehlungen von Experten und der Community zu allen Wechseljahre-Themen.",
      categories: ["Ratgeber", "Erfahrungsberichte", "Wissenschaft", "Belletristik"],
      books: "50+ Empfehlungen",
      reviews: "Mit Bewertungen und Zusammenfassungen",
      formats: ["Print", "E-Book", "Hörbuch"]
    }
  ];

  const downloadResources = [
    {
      title: "Wechseljahre-Leitfaden",
      type: "PDF",
      pages: "24 Seiten",
      description: "Umfassender Überblick über alle Phasen der Wechseljahre",
      downloads: "50k+"
    },
    {
      title: "Symptom-Tracker",
      type: "PDF + App",
      description: "Vorlage zur Dokumentation von Beschwerden und Zyklusveränderungen",
      downloads: "35k+"
    },
    {
      title: "Notfall-Karte Hitzewallungen",
      type: "Kreditkartenformat",
      description: "Schnelle Hilfe-Tipps für unterwegs",
      downloads: "80k+"
    },
    {
      title: "Gesprächsleitfaden Arztbesuch",
      type: "Checkliste",
      description: "Strukturierte Vorbereitung für das Gespräch mit dem Gynäkologen",
      downloads: "45k+"
    }
  ];

  const liveEvents = [
    {
      title: "Experten-Sprechstunde",
      format: "Live Q&A",
      frequency: "Jeden 2. Mittwoch 19:00",
      platform: "YouTube Live",
      participants: "200-300"
    },
    {
      title: "Community Meet-up",
      format: "Virtueller Austausch",
      frequency: "Monatlich",
      platform: "Zoom",
      participants: "50-80"
    },
    {
      title: "Wellness-Workshop",
      format: "Interaktiver Workshop",
      frequency: "Quartalsweise",
      platform: "Online + Präsenz",
      participants: "30-50"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medien & Informationskanäle | AOK PLUS Wechseljahre</title>
        <meta name="description" content="Umfassende Medienkanäle zu Wechseljahren: Podcasts, Videos, Blogs, Social Media, Telefonberatung und Literatur-Empfehlungen." />
        <meta name="keywords" content="Wechseljahre Medien, Podcast, Videos, Blog, Social Media, Telefonberatung, Literatur, AOK PLUS" />
        
        <meta property="og:title" content="Medien & Informationskanäle Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Vielfältige Medienkanäle und Informationsquellen zu den Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Wechseljahre Medien und Informationskanäle",
            "description": "Umfassende Medienkanäle und Informationsquellen zu den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/medien"
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
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Medien</span> & Informationskanäle
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Noch Fragen? Wir haben weiterführende Antworten: Von Podcasts über Videos bis zu persönlicher Beratung – 
                  entdecken Sie alle Wege, sich über die Wechseljahre zu informieren.
                </p>
              </div>
            </div>
          </section>

          {/* Media Channels Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Unsere Informationskanäle
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Wählen Sie den Kanal, der am besten zu Ihrem Lernstil und Ihren Bedürfnissen passt.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mediaChannels.map((channel) => (
                    <Card key={channel.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{channel.title}</CardTitle>
                            <Badge variant={channel.type === "Audio" ? "secondary" : channel.type === "Video" ? "default" : channel.type === "Social" ? "outline" : "secondary"}>
                              {channel.type}
                            </Badge>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            {channel.subscribers && <div>{channel.subscribers}</div>}
                            {channel.views && <div>{channel.views}</div>}
                            {channel.rating && <div>⭐ {channel.rating}</div>}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {channel.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          {channel.episodes && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Episoden:</span>
                              <span>{channel.episodes}</span>
                            </div>
                          )}
                          {channel.content && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Inhalt:</span>
                              <span>{channel.content}</span>
                            </div>
                          )}
                          {channel.articles && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Artikel:</span>
                              <span>{channel.articles}</span>
                            </div>
                          )}
                          {channel.availability && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Erreichbar:</span>
                              <span>{channel.availability}</span>
                            </div>
                          )}
                        </div>

                        {channel.platforms && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Verfügbar auf:</div>
                            <div className="flex flex-wrap gap-2">
                              {channel.platforms.map((platform, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {channel.categories && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Kategorien:</div>
                            <div className="flex flex-wrap gap-2">
                              {channel.categories.map((category, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {category}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            {channel.type === "Audio" ? (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Anhören
                              </>
                            ) : channel.type === "Video" ? (
                              <>
                                <Video className="w-4 h-4 mr-2" />
                                Videos ansehen
                              </>
                            ) : channel.type === "Text" ? (
                              <>
                                <BookOpen className="w-4 h-4 mr-2" />
                                Artikel lesen
                              </>
                            ) : channel.type === "Social" ? (
                              <>
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Folgen
                              </>
                            ) : (
                              <>
                                <Phone className="w-4 h-4 mr-2" />
                                Anrufen
                              </>
                            )}
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Download Resources Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Download-Ressourcen
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Praktische Hilfsmittel und Leitfäden zum Herunterladen und Ausdrucken.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {downloadResources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <Badge variant="outline">{resource.type}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {resource.downloads} Downloads
                          </div>
                        </div>
                        <CardDescription>
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {resource.pages && (
                          <div className="text-sm text-muted-foreground mb-4">
                            Umfang: {resource.pages}
                          </div>
                        )}
                        <Button className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Kostenlos herunterladen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Live Events Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Live-Events & Webinare
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Nehmen Sie an unseren regelmäßigen Live-Veranstaltungen teil und stellen Sie direkte Fragen.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {liveEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{event.format}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <span><strong>Häufigkeit:</strong> {event.frequency}</span>
                              <span><strong>Plattform:</strong> {event.platform}</span>
                              <span><strong>Teilnehmer:</strong> {event.participants}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button>Teilnehmen</Button>
                            <Button variant="outline">Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Newsletter abonnieren
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

export default Medien;