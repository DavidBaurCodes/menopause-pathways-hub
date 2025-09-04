import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HealthLexicon from "@/components/HealthLexicon";
import Footer from "@/components/Footer";

const Lexicon = () => {
  return (
    <>
      <Helmet>
        <title>Gesundheitslexikon | AOK PLUS - Wechseljahre-Begriffe erklärt</title>
        <meta name="description" content="Medizinische Fachbegriffe zu den Wechseljahren verständlich erklärt. Von Perimenopause bis Hormontherapie - Ihr umfassendes Wechseljahre-Lexikon." />
        <meta name="keywords" content="Wechseljahre Lexikon, Menopause Begriffe, medizinische Begriffe, Hormontherapie, Perimenopause, AOK PLUS" />
        
        <meta property="og:title" content="Gesundheitslexikon Wechseljahre | AOK PLUS" />
        <meta property="og:description" content="Medizinische Begriffe zu den Wechseljahren verständlich erklärt" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Wechseljahre Gesundheitslexikon",
            "description": "Umfassendes Lexikon medizinischer Begriffe zu den Wechseljahren",
            "url": "https://aokplus-wechseljahre.de/lexicon",
            "mainEntity": {
              "@type": "DefinedTermSet",
              "name": "Wechseljahre-Begriffe",
              "description": "Sammlung medizinischer Fachbegriffe zu den Wechseljahren"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HealthLexicon />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Lexicon;