import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import InformationChannels from "@/components/InformationChannels";
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
          <FeatureGrid />
          <InformationChannels />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;