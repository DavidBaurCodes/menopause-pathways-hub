import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import PersonalizedJourney from "@/components/PersonalizedJourney";
import Footer from "@/components/Footer";

const Assessment = () => {
  return (
    <>
      <Helmet>
        <title>Wechseljahre-Assessment | AOK PLUS - Personalisierte Begleitung</title>
        <meta name="description" content="Machen Sie unser kostenloses Assessment und erhalten Sie personalisierte Empfehlungen für Ihre Wechseljahre-Reise. Individuell abgestimmte Ressourcen und Unterstützung." />
        <meta name="keywords" content="Wechseljahre Assessment, Menopause Test, Fragebogen Wechseljahre, personalisierte Beratung, AOK PLUS" />
        
        <meta property="og:title" content="Wechseljahre-Assessment | AOK PLUS" />
        <meta property="og:description" content="Personalisiertes Assessment für individuell abgestimmte Wechseljahre-Unterstützung" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Wechseljahre-Assessment",
            "description": "Personalisierte Bewertung für Wechseljahre-Unterstützung",
            "url": "https://aokplus-wechseljahre.de/assessment",
            "mainEntity": {
              "@type": "MedicalTest",
              "name": "Wechseljahre-Assessment",
              "description": "Interaktives Assessment zur Bestimmung der individuellen Wechseljahre-Phase"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <PersonalizedJourney />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Assessment;