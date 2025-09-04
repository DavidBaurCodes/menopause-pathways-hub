import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Heart, Briefcase, Users } from "lucide-react";

const Blog = () => {
  const blogCategories = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Gesundheit & Wellness",
      count: 24,
      color: "text-primary",
      url: "/blog/category/gesundheit-wellness"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Arbeitsplatz",
      count: 18,
      color: "text-accent",
      url: "/blog/category/arbeitsplatz"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Persönliche Erfahrungen",
      count: 32,
      color: "text-success",
      url: "/blog/category/persoenliche-erfahrungen"
    }
  ];

  const featuredPosts = [
    {
      title: "10 Tipps für mehr Energie in den Wechseljahren",
      excerpt: "Entdecken Sie natürliche Wege, um Ihre Energie zu steigern und sich vitaler zu fühlen.",
      author: "Dr. Sarah Schmidt",
      date: "15. Nov 2024",
      readTime: "5 Min",
      category: "Gesundheit",
      featured: true,
      image: "/api/placeholder/400/250",
      url: "/blog/10-tipps-mehr-energie-wechseljahre"
    },
    {
      title: "Führungskraft in den Wechseljahren: Meine Geschichte",
      excerpt: "Wie ich als Geschäftsführerin offen mit den Wechseljahren umgehe und mein Team sensibilisiere.",
      author: "Maria Hoffmann",
      date: "12. Nov 2024", 
      readTime: "8 Min",
      category: "Arbeitsplatz",
      featured: true,
      image: "/api/placeholder/400/250",
      url: "/blog/fuehrungskraft-wechseljahre-meine-geschichte"
    },
    {
      title: "Schlafqualität verbessern: Was wirklich hilft",
      excerpt: "Praktische Strategien für besseren Schlaf während hormoneller Veränderungen.",
      author: "Dr. Thomas Weber",
      date: "9. Nov 2024",
      readTime: "6 Min", 
      category: "Gesundheit",
      featured: false,
      image: "/api/placeholder/400/250",
      url: "/blog/schlafqualitaet-verbessern-wechseljahre"
    },
    {
      title: "Kommunikation am Arbeitsplatz während der Wechseljahre",
      excerpt: "Wie Sie mit Kollegen und Vorgesetzten über Ihre Bedürfnisse sprechen können.",
      author: "Lisa Müller",
      date: "5. Nov 2024",
      readTime: "7 Min",
      category: "Arbeitsplatz", 
      featured: false,
      image: "/api/placeholder/400/250",
      url: "/blog/kommunikation-arbeitsplatz-wechseljahre"
    },
    {
      title: "Ernährung in den Wechseljahren: Ein ganzheitlicher Ansatz",
      excerpt: "Welche Nährstoffe jetzt besonders wichtig sind und wie Sie Ihre Ernährung anpassen können.",
      author: "Anna Richter",
      date: "1. Nov 2024",
      readTime: "9 Min",
      category: "Gesundheit",
      featured: false,
      image: "/api/placeholder/400/250",
      url: "/blog/ernaehrung-wechseljahre-ganzheitlicher-ansatz"
    },
    {
      title: "Meine Wechseljahre-Reise: Von Verwirrung zu Klarheit",
      excerpt: "Eine persönliche Geschichte über Akzeptanz, Wachstum und neue Lebensperspektiven.",
      author: "Julia Wagner",
      date: "28. Okt 2024",
      readTime: "11 Min",
      category: "Persönlich",
      featured: false,
      image: "/api/placeholder/400/250",
      url: "/blog/wechseljahre-reise-verwirrung-zu-klarheit"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | AOK PLUS - Wechseljahre-Ratgeber und Erfahrungen</title>
        <meta name="description" content="Lesen Sie aktuelle Artikel zu Wechseljahren mit Expertentipps, persönlichen Erfahrungen und praktischen Ratschlägen für Gesundheit und Arbeitsplatz." />
        <meta name="keywords" content="Wechseljahre Blog, Menopause Ratgeber, Expertenartikel, Arbeitsplatz Wechseljahre, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre Blog | AOK PLUS" />
        <meta property="og:description" content="Aktuelle Artikel und Ratgeber zu Wechseljahren mit Expertenwissen und persönlichen Erfahrungen" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Wechseljahre Blog",
            "description": "Ratgeber und Artikel zu Wechseljahren-Themen",
            "url": "https://aokplus-wechseljahre.de/blog"
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
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                Blog & <span className="text-gradient">Ratgeber</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Aktuelle Artikel, Expertentipps und persönliche Erfahrungen 
                für Ihren Weg durch die Wechseljahre.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Themenbereiche
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {blogCategories.map((category, index) => (
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
                        {category.count} Artikel verfügbar
                      </p>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5" asChild>
                        <a href={category.url}>
                          Artikel lesen
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Neueste Artikel
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <Card key={index} className={`group hover:shadow-medium transition-all duration-300 ${post.featured ? 'ring-2 ring-primary/20' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant={post.featured ? "default" : "outline"} className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="text-xs bg-gradient-primary text-white">
                            Neu
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-3">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Von {post.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <Button size="sm" className="w-full gradient-primary text-white group/read" asChild>
                        <a href={post.url}>
                          <span>Artikel lesen</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/read:translate-x-1 transition-transform" />
                        </a>
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
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Bleiben Sie informiert
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Abonnieren Sie unseren Newsletter und erhalten Sie neue Artikel und 
                  Tipps direkt in Ihr Postfach.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white shadow-medium">
                    Newsletter abonnieren
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Alle Artikel
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

export default Blog;