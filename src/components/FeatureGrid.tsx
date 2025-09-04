import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  Shield, 
  Headphones, 
  Heart,
  ArrowRight,
  Zap
} from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Knowledge Center",
      description: "Evidence-based articles, research studies, and expert insights on all aspects of menopause.",
      href: "#knowledge",
      color: "text-accent"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Podcasts & Media", 
      description: "Expert interviews, personal stories, and workplace management guidance in audio format.",
      href: "#podcasts",
      color: "text-primary"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Workplace Health",
      description: "Comprehensive guides for organizations to support employees through menopause transitions.",
      href: "#workplace", 
      color: "text-success"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Benefits",
      description: "Tailored coverage options and exclusive benefits for menopause-related healthcare needs.",
      href: "#benefits",
      color: "text-warning"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with others, share experiences, and find support in our inclusive community.",
      href: "#community",
      color: "text-primary-light"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Personalized Tools",
      description: "Interactive assessments and tailored resources based on your unique menopause journey.",
      href: "#journey",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Your <span className="text-gradient">Menopause Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From personalized assessments to workplace support, we provide comprehensive resources 
            to empower you through every stage of menopause.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-primary-dark group/btn"
                  asChild
                >
                  <a href={feature.href}>
                    Learn more 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of women who have found support, knowledge, and empowerment 
              through our comprehensive menopause resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-medium">
                Take Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;