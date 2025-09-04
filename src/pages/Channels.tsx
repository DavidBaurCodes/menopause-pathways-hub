import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InformationChannels from "@/components/InformationChannels";

const Channels = () => {
  return (
    <>
      <Helmet>
        <title>Informationskanäle | AOK PLUS - Weitere Wege zu Wechseljahre-Informationen</title>
        <meta name="description" content="Entdecken Sie verschiedene Informationskanäle für Wechseljahre-Themen: WhatsApp, LinkedIn, Flyer, Schulungen und Buchempfehlungen." />
        <meta name="keywords" content="Wechseljahre Informationen, WhatsApp Support, LinkedIn, Flyer, Schulungen, Buchempfehlungen, AOK PLUS" />
        
        <meta property="og:title" content="Informationskanäle | AOK PLUS" />
        <meta property="og:description" content="Verschiedene Wege, um mehr über die Wechseljahre zu erfahren und sich zu vernetzen" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Informationskanäle",
            "description": "Verschiedene Kanäle für Wechseljahre-Informationen und Support",
            "url": "https://aokplus-wechseljahre.de/channels"
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
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
                <span className="text-gradient">Informationskanäle</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Entdecken Sie verschiedene Wege, um mehr über die Wechseljahre zu erfahren 
                und sich mit unserer Community zu vernetzen.
              </p>
            </div>
          </section>

          {/* Information Channels Component */}
          <InformationChannels />
          
          {/* Additional Info Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Haben Sie Fragen?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns über einen 
                  der verfügbaren Kanäle oder vereinbaren Sie einen persönlichen Termin.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                    <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      WhatsApp Support
                    </button>
                  </a>
                  <a href="mailto:info@aok-plus.de">
                    <button className="w-full sm:w-auto px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                      E-Mail senden
                    </button>
                  </a>
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

export default Channels;