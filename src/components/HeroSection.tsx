import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Link } from "react-router-dom";
import heroImage from "@/assets/meno-ladies-3.webp";
const HeroSection = () => {
  return <section className="relative min-h-[80vh] flex items-center gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Stark, weiblich, mitten im Leben - hier findest du Antworten, die dein Körper jetzt braucht
              </p>
               <div className="space-y-1">
                 <div className="flex items-center gap-3">
                   <Logo size={40} />
                   <div className="flex items-start gap-1 flex-col">
                    {/* <div className="text-base sm:text-lg md:text-4xl leading-relaxed text-foreground font-bold">
                      Mein
                      <br />
                     </div> */}
                    <div className="flex">
                      <span className="text-base sm:text-lg md:text-4xl leading-relaxed text-foreground font-bold p-1">
                        Mein 
                      </span>
                      <span className="text-base sm:text-lg md:text-4xl leading-relaxed text-foreground font-script font-bold p-1">
                        meno
                      </span>
                      <span className="text-base sm:text-lg md:text-4xl leading-relaxed text-foreground font-bold p-1">
                        PLUS
                      </span>
                    </div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="gradient-primary text-white shadow-medium w-full sm:w-auto" asChild>
                <Link to="/assessment">Selbsttest starten</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 hover:text-primary w-full sm:w-auto">
                Ressourcen erkunden
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Vertrauen von 50.000+ Frauen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Expertenwissen bestätigt</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img src={heroImage} alt="Diverse Frauen unterstützen sich gegenseitig durch die Wechseljahre" className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Headline overlay */}
              <div className="absolute top-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-gradient whitespace-nowrap">Deine Wechseljahre-Begleitung</span>
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;