import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data based on slug
  const getBlogPostData = (slug: string) => {
    const posts: { [key: string]: any } = {
      "10-tipps-mehr-energie-wechseljahre": {
        title: "10 Tipps für mehr Energie in den Wechseljahren",
        content: "Entdecken Sie natürliche Wege, um Ihre Energie zu steigern und sich vitaler zu fühlen während der Wechseljahre.",
        author: "Dr. Sarah Schmidt",
        date: "15. Nov 2024",
        readTime: "5 Min",
        category: "Gesundheit",
        excerpt: "Entdecken Sie natürliche Wege, um Ihre Energie zu steigern und sich vitaler zu fühlen."
      },
      "fuehrungskraft-wechseljahre-meine-geschichte": {
        title: "Führungskraft in den Wechseljahren: Meine Geschichte",
        content: "Wie ich als Geschäftsführerin offen mit den Wechseljahren umgehe und mein Team sensibilisiere.",
        author: "Maria Hoffmann",
        date: "12. Nov 2024",
        readTime: "8 Min",
        category: "Arbeitsplatz",
        excerpt: "Wie ich als Geschäftsführerin offen mit den Wechseljahren umgehe und mein Team sensibilisiere."
      },
      "schlafqualitaet-verbessern-wechseljahre": {
        title: "Schlafqualität verbessern: Was wirklich hilft",
        content: "Praktische Strategien für besseren Schlaf während hormoneller Veränderungen.",
        author: "Dr. Thomas Weber",
        date: "9. Nov 2024",
        readTime: "6 Min",
        category: "Gesundheit",
        excerpt: "Praktische Strategien für besseren Schlaf während hormoneller Veränderungen."
      }
    };

    return posts[slug || ""] || {
      title: "Blog-Artikel",
      content: "Dieser Artikel befindet sich noch in Bearbeitung. Bitte schauen Sie bald wieder vorbei.",
      author: "AOK PLUS Team",
      date: "Heute",
      readTime: "3 Min",
      category: "Allgemein",
      excerpt: "Dieser Artikel befindet sich noch in Bearbeitung."
    };
  };

  const post = getBlogPostData(slug || "");

  return (
    <>
      <Helmet>
        <title>{post.title} | AOK PLUS Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, Wechseljahre, AOK PLUS`} />
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.date
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zum Blog
              </Link>
            </Button>

            {/* Article Header */}
            <Card className="mb-8">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  {post.title}
                </CardTitle>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>Von {post.author}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Teilen
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Article Content */}
            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    {post.content}
                  </p>
                  
                  <div className="bg-muted/30 p-6 rounded-lg mb-6">
                    <p className="text-muted-foreground">
                      <strong>Hinweis:</strong> Dieser Artikel befindet sich noch in der Entwicklung. 
                      Vollständige Inhalte werden in Kürze verfügbar sein.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Weitere hilfreiche Artikel</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <CardTitle className="text-base mb-2">
                            <Link to="/blog" className="hover:text-primary">
                              Zurück zur Blog-Übersicht
                            </Link>
                          </CardTitle>
                          <CardDescription>
                            Entdecken Sie weitere Artikel zu Wechseljahren-Themen
                          </CardDescription>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <CardTitle className="text-base mb-2">
                            <Link to="/lifehacks" className="hover:text-primary">
                              Praktische Lifehacks
                            </Link>
                          </CardTitle>
                          <CardDescription>
                            Einfache Tipps für den Alltag
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;