import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Empowering Your{" "}
                <span className="text-gradient">Menopause Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comprehensive resources, personalized support, and workplace solutions 
                to navigate menopause with confidence and care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white shadow-medium">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                Explore Resources
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Trusted by 50,000+ women</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Expert-backed content</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Diverse women supporting each other through menopause journey"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-medium border">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Feel more confident</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-medium border">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;