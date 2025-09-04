import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCategory = () => {
  const { category } = useParams();

  const getCategoryData = (category: string) => {
    const categories: { [key: string]: any } = {
      "gesundheit-wellness": {
        title: "Gesundheit & Wellness",
        description: "Artikel rund um Gesundheit und Wohlbefinden in den Wechseljahren",
        posts: [
          {
            title: "10 Tipps für mehr Energie in den Wechseljahren",
            excerpt: "Entdecken Sie natürliche Wege, um Ihre Energie zu steigern.",
            author: "Dr. Sarah Schmidt",
            date: "15. Nov 2024",
            readTime: "5 Min",
            url: "/blog/10-tipps-mehr-energie-wechseljahre"
          },
          {
            title: "Schlafqualität verbessern: Was wirklich hilft",
            excerpt: "Praktische Strategien für besseren Schlaf.",
            author: "Dr. Thomas Weber",
            date: "9. Nov 2024",
            readTime: "6 Min",
            url: "/blog/schlafqualitaet-verbessern-wechseljahre"
          }
        ]
      },
      "arbeitsplatz": {
        title: "Arbeitsplatz",
        description: "Tipps und Strategien für den Umgang mit Wechseljahren am Arbeitsplatz",
        posts: [
          {
            title: "Führungskraft in den Wechseljahren: Meine Geschichte",
            excerpt: "Wie ich als Geschäftsführerin offen mit den Wechseljahren umgehe.",
            author: "Maria Hoffmann",
            date: "12. Nov 2024",
            readTime: "8 Min",
            url: "/blog/fuehrungskraft-wechseljahre-meine-geschichte"
          }
        ]
      },
      "persoenliche-erfahrungen": {
        title: "Persönliche Erfahrungen",
        description: "Echte Geschichten und Erfahrungen von Betroffenen",
        posts: [
          {
            title: "Meine Wechseljahre-Reise: Von Verwirrung zu Klarheit",
            excerpt: "Eine persönliche Geschichte über Akzeptanz und Wachstum.",
            author: "Julia Wagner",
            date: "28. Okt 2024",
            readTime: "11 Min",
            url: "/blog/wechseljahre-reise-verwirrung-zu-klarheit"
          }
        ]
      }
    };

    return categories[category || ""] || {
      title: "Blog-Kategorie",
      description: "Diese Kategorie befindet sich noch in Bearbeitung.",
      posts: []
    };
  };

  const categoryData = getCategoryData(category || "");

  return (
    <>
      <Helmet>
        <title>{categoryData.title} | AOK PLUS Blog</title>
        <meta name="description" content={categoryData.description} />
        <meta name="keywords" content={`${categoryData.title}, Wechseljahre, AOK PLUS`} />
        
        <meta property="og:title" content={`${categoryData.title} | AOK PLUS Blog`} />
        <meta property="og:description" content={categoryData.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zum Blog
              </Link>
            </Button>

            {/* Category Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {categoryData.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {categoryData.description}
              </p>
            </div>

            {/* Posts Grid */}
            {categoryData.posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryData.posts.map((post: any, index: number) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                    <CardHeader>
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
                        <Link to={post.url}>
                          <span>Artikel lesen</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/read:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Card className="max-w-md mx-auto">
                  <CardContent className="p-8">
                    <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Bald verfügbar</h3>
                    <p className="text-muted-foreground mb-4">
                      Artikel in dieser Kategorie sind noch in Bearbeitung.
                    </p>
                    <Button asChild>
                      <Link to="/blog">
                        Alle Artikel ansehen
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogCategory;