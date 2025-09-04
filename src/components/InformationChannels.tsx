import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Linkedin, FileText, Calendar, BookOpen } from "lucide-react";

const InformationChannels = () => {
  const channels = [
    {
      title: "WhatsApp",
      description: "Schnelle Beratung und Support",
      icon: MessageCircle,
      action: "Jetzt kontaktieren",
      href: "https://wa.me/491234567890",
      color: "text-green-600"
    },
    {
      title: "LinkedIn",
      description: "Folgen Sie uns für Updates",
      icon: Linkedin,
      action: "Folgen",
      href: "https://linkedin.com/company/aok-plus",
      color: "text-blue-600"
    },
    {
      title: "Flyer anfordern",
      description: "Informationsmaterial bestellen",
      icon: FileText,
      action: "Anfordern",
      href: "/flyer-request",
      color: "text-purple-600"
    },
    {
      title: "Schulungen & Präsentationen",
      description: "Kommende Termine und Events",
      icon: Calendar,
      action: "Termine anzeigen",
      href: "/events",
      color: "text-orange-600"
    },
    {
      title: "Buchempfehlungen",
      description: "Expertenwissen zum Nachlesen",
      icon: BookOpen,
      action: "Bücher entdecken",
      href: "/books",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Weitere Informationskanäle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie verschiedene Wege, um mehr über die Wechseljahre zu erfahren und sich mit unserer Community zu vernetzen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {channels.map((channel) => (
            <Card key={channel.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-background">
                  <channel.icon className={`h-8 w-8 ${channel.color}`} />
                </div>
                <CardTitle className="text-lg">{channel.title}</CardTitle>
                <CardDescription className="text-sm">
                  {channel.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href={channel.href}>
                    {channel.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationChannels;