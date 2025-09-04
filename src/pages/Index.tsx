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
        <title>MenoWell - Empowering Your Menopause Journey | Comprehensive Support & Insurance</title>
        <meta name="description" content="Comprehensive menopause support platform offering personalized resources, workplace health management, expert content, and tailored insurance solutions for every stage of your journey." />
        <meta name="keywords" content="menopause support, women's health, workplace wellness, menopause insurance, perimenopause, health resources" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MenoWell - Empowering Your Menopause Journey" />
        <meta property="og:description" content="Comprehensive menopause support platform with personalized resources, workplace solutions, and insurance benefits." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "MenoWell",
            "description": "Comprehensive menopause support and insurance solutions",
            "url": "https://menowell.com",
            "logo": "https://menowell.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "1-800-MENOWELL",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://facebook.com/menowell",
              "https://twitter.com/menowell"
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
          <section id="knowledge" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Knowledge Center</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive articles, research, and expert insights coming soon. 
                Access evidence-based information on all aspects of menopause.
              </p>
            </div>
          </section>

          <section id="podcasts" className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Podcasts & Media</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert interviews, personal stories, and workplace management guidance. 
                Listen to inspiring content while on the go.
              </p>
            </div>
          </section>

          <section id="workplace" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Workplace Health Management</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive organizational guides and individual support strategies. 
                Create inclusive, supportive work environments for menopause transitions.
              </p>
            </div>
          </section>

          <section id="community" className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Community & Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with others sharing similar experiences. Join our supportive community 
                for discussions, questions, and mutual encouragement.
              </p>
            </div>
          </section>

          <section id="benefits" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Insurance Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exclusive insurance coverage and benefits tailored specifically for 
                menopause-related healthcare and wellness needs.
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