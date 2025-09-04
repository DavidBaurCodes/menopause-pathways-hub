import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react";

const Knowledge = () => {
  const knowledgeCategories = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Grundlagen der Wechseljahre",
      description: "Verstehen Sie die verschiedenen Phasen, hormonelle Veränderungen und was Sie erwarten können.",
      articles: 12,
      color: "text-primary"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Aktuelle Forschung",
      description: "Neueste wissenschaftliche Erkenntnisse zu Behandlungsmethoden und Präventionsstrategien.",
      articles: 8,
      color: "text-accent"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Expertenmeinungen",
      description: "Interviews mit führenden Gynäkologen, Endokrinologen und Wechseljahre-Spezialisten.",
      articles: 6,
      color: "text-success"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Ressourcen & Leitfäden",
      description: "Downloadbare Materialien, Checklisten und praktische Anleitungen für Ihren Alltag.",
      articles: 15,
      color: "text-warning"
    }
  ];

  const featuredArticles = [
    {
      title: "Die drei Phasen der Wechseljahre verstehen",
      description: "Ein umfassender Leitfaden durch Perimenopause, Menopause und Postmenopause.",
      readTime: "8 Min. Lesezeit",
      category: "Grundlagen"
    },
    {
      title: "Hormontherapie: Vorteile und Risiken abwägen",
      description: "Aktuelle Forschungsergebnisse zu verschiedenen Formen der Hormonbehandlung.",
      readTime: "12 Min. Lesezeit", 
      category: "Behandlung"
    },
    {
      title: "Natürliche Ansätze bei Wechseljahresbeschwerden",
      description: "Evidenzbasierte pflanzliche Therapien und Lifestyle-Interventionen.",
      readTime: "10 Min. Lesezeit",
      category: "Natürliche Heilmittel"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wissensbereich | AOK PLUS - Expertenwissen zu Wechseljahren</title>
        <meta name="description" content="Umfassender Wissensbereich mit aktuellen Forschungsergebnissen, Expertenmeinungen und evidenzbasierten Informationen zu allen Aspekten der Wechseljahre." />
        <meta name="keywords" content="Wechseljahre Wissen, Menopause Forschung, Expertenmeinungen, medizinische Artikel, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre-Wissensbereich | AOK PLUS" />
        <meta property="og:description" content="Expertenwissen und aktuelle Forschung zu Wechseljahren" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Wechseljahre-Wissensbereich",
            "description": "Umfassende Sammlung wissenschaftlicher Artikel und Expertenwissen zu Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/knowledge"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Wissensbereich für <span className="text-gradient">Wechseljahre</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Evidenzbasierte Informationen, aktuelle Forschungsergebnisse und Expertenwissen 
                zu allen Aspekten der Wechseljahre. Fundiert, verständlich, hilfreich.
              </p>
            </div>
          </section>

          {/* Knowledge Categories */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Themenbereiche entdecken
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {knowledgeCategories.map((category, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-200 ${category.color}`}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-3">
                      <CardDescription className="text-sm leading-relaxed">
                        {category.description}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground">
                        {category.articles} Artikel verfügbar
                      </p>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        Artikel lesen
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Empfohlene Artikel
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {article.description}
                      </CardDescription>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-dark group/btn">
                        Artikel lesen
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Bleiben Sie auf dem Laufenden
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Erhalten Sie die neuesten Forschungsergebnisse, Expertentipps und Gesundheitsinformationen 
                  direkt in Ihr Postfach.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Newsletter abonnieren
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Artikel durchsuchen
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

export default Knowledge;