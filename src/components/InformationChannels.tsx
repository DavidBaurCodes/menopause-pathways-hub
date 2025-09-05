import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Linkedin, FileText, Calendar, BookOpen, Mail, Video, Users, Music, MessageSquare } from "lucide-react";
import { HeartChatIcon, DocumentEditIcon, ChartPlusIcon, GiftHandsIcon } from "@/components/ui/logo";

const InformationChannels = () => {
  const channels = [
    {
      title: "WhatsApp",
      description: "Schnelle Beratung und Support",
      icon: HeartChatIcon,
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
      title: "Newsletter",
      description: "Regelmäßige Updates direkt per E-Mail",
      icon: Mail,
      action: "Abonnieren",
      href: "#newsletter",
      color: "text-pink-600"
    },
    {
      title: "TikTok",
      description: "Kurze Videos und Tipps",
      icon: Video,
      action: "Folgen",
      href: "https://tiktok.com/@aokplus",
      color: "text-black"
    },
    {
      title: "StudiVZ",
      description: "Vernetze dich mit anderen",
      icon: Users,
      action: "Beitreten",
      href: "https://studivz.net/aokplus",
      color: "text-blue-500"
    },
    {
      title: "mySpace",
      description: "Musik und Community",
      icon: Music,
      action: "Besuchen",
      href: "https://myspace.com/aokplus",
      color: "text-cyan-600"
    },
    {
      title: "ICQ",
      description: "Direkter Chat und Support",
      icon: MessageSquare,
      action: "Chat starten",
      href: "https://icq.com/aokplus",
      color: "text-green-500"
    },
    {
      title: "Flyer anfordern",
      description: "Informationsmaterial bestellen",
      icon: DocumentEditIcon,
      action: "Anfordern",
      href: "/flyer-request",
      color: "text-purple-600"
    },
    {
      title: "Schulungen & Präsentationen",
      description: "Kommende Termine und Events",
      icon: ChartPlusIcon,
      action: "Termine anzeigen",
      href: "/events",
      color: "text-orange-600"
    },
    {
      title: "Buchempfehlungen",
      description: "Expertenwissen zum Nachlesen",
      icon: GiftHandsIcon,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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