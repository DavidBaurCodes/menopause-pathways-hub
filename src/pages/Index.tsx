import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PersonalizedJourney from "@/components/PersonalizedJourney";
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AOK PLUS - Ihre Wechseljahre-Begleitung | Umfassende Unterstützung & Versicherung</title>
        <meta name="description" content="Umfassende Wechseljahre-Unterstützungsplattform mit personalisierten Ressourcen, betrieblichem Gesundheitsmanagement, Expertenwissen und maßgeschneiderten Versicherungslösungen für jede Phase Ihrer Reise." />
        <meta name="keywords" content="Wechseljahre Unterstützung, Frauengesundheit, betriebliches Wellness, Wechseljahre Versicherung, Perimenopause, Gesundheitsressourcen, AOK PLUS" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AOK PLUS - Ihre Wechseljahre-Begleitung" />
        <meta property="og:description" content="Umfassende Wechseljahre-Unterstützungsplattform mit personalisierten Ressourcen, betrieblichen Lösungen und Versicherungsleistungen." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "AOK PLUS",
            "description": "Umfassende Wechseljahre-Unterstützung und Versicherungslösungen",
            "url": "https://aokplus-wechseljahre.de",
            "logo": "https://aokplus-wechseljahre.de/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "0800-AOK-PLUS",
              "contactType": "Kundenservice"
            },
            "sameAs": [
              "https://facebook.com/aokplus",
              "https://twitter.com/aokplus"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <PersonalizedJourney />
          <FeatureGrid />
          
          {/* Placeholder sections for future development */}
          <section id="knowledge" className="py-12 sm:py-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">Wissensbereich</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Umfassende Artikel, Forschung und Experteneinblicke kommen bald. 
                Zugang zu evidenzbasierten Informationen zu allen Aspekten der Wechseljahre.
              </p>
            </div>
          </section>

          <section id="podcasts" className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">Podcasts & Medien</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Experteninterviews, persönliche Geschichten und betriebliche Management-Anleitungen. 
                Hören Sie inspirierende Inhalte unterwegs.
              </p>
            </div>
          </section>

          <section id="workplace" className="py-12 sm:py-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">Betriebliches Gesundheitsmanagement</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Umfassende Organisationsleitfäden und individuelle Unterstützungsstrategien. 
                Schaffen Sie inklusive, unterstützende Arbeitsumgebungen für Wechseljahre-Übergänge.
              </p>
            </div>
          </section>

          <section id="community" className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">Gemeinschaft & Unterstützung</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Verbinden Sie sich mit anderen, die ähnliche Erfahrungen teilen. Treten Sie unserer 
                unterstützenden Gemeinschaft für Diskussionen, Fragen und gegenseitige Ermutigung bei.
              </p>
            </div>
          </section>

          <section id="benefits" className="py-12 sm:py-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">Versicherungsleistungen</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Exklusive Versicherungsabdeckung und Leistungen, die speziell für 
                Wechseljahre-bezogene Gesundheits- und Wellnessbedürfnisse entwickelt wurden.
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;