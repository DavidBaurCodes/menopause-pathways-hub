import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
import { LeafIcon, HealthCareIcon, HeartPulseIcon, HeartSearchIcon, NutritionIcon } from "@/components/ui/logo";

const HealthLexicon = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Phasen":
        return <LeafIcon className="w-5 h-5" />;
      case "Symptome":
        return <HeartPulseIcon className="w-5 h-5" />;
      case "Hormone":
        return <HealthCareIcon className="w-5 h-5" />;
      case "Behandlung":
        return <HealthCareIcon className="w-5 h-5" />;
      case "Risiken":
        return <HeartSearchIcon className="w-5 h-5" />;
      case "Natürliche Hilfe":
        return <NutritionIcon className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const lexiconEntries = [
    {
      term: "Perimenopause",
      category: "Phasen",
      definition: "Die Übergangszeit vor der Menopause, in der die Hormone zu schwanken beginnen. Kann 2-10 Jahre dauern und beginnt meist zwischen dem 40. und 44. Lebensjahr.",
      symptoms: ["Unregelmäßige Periode", "Hitzewallungen", "Schlafprobleme", "Stimmungsschwankungen"],
      icon: <LeafIcon className="w-5 h-5" />
    },
    {
      term: "Menopause", 
      category: "Phasen",
      definition: "Der Zeitpunkt, an dem die Menstruation 12 Monate lang ausgeblieben ist. Das Durchschnittsalter liegt bei 51 Jahren.",
      symptoms: ["Keine Menstruation", "Hitzewallungen", "Vaginale Trockenheit", "Gewichtszunahme"],
      icon: <LeafIcon className="w-5 h-5" />
    },
    {
      term: "Postmenopause",
      category: "Phasen", 
      definition: "Die Zeit nach der Menopause. Die Hormone haben sich auf einem niedrigeren Niveau eingependelt.",
      symptoms: ["Osteoporose-Risiko", "Herz-Kreislauf-Risiko", "Hautveränderungen", "Gedächtnisprobleme"],
      icon: <LeafIcon className="w-5 h-5" />
    },
    {
      term: "Hitzewallungen",
      category: "Symptome",
      definition: "Plötzliche Wärmegefühle, meist im Oberkörper und Gesicht. Können von Schwitzen und Herzklopfen begleitet werden.",
      symptoms: ["Schwitzen", "Rötung der Haut", "Herzklopfen", "Schwindel"],
      icon: <HeartPulseIcon className="w-5 h-5" />
    },
    {
      term: "Brainfog",
      category: "Symptome", 
      definition: "Gefühl geistiger Benommenheit, Vergesslichkeit und Konzentrationsschwierigkeiten während der Wechseljahre.",
      symptoms: ["Vergesslichkeit", "Konzentrationsprobleme", "Wortfindungsstörungen", "Müdigkeit"],
      icon: <HeartPulseIcon className="w-5 h-5" />
    },
    {
      term: "Hormontherapie (HRT)",
      category: "Behandlung",
      definition: "Medizinische Behandlung mit Östrogen und/oder Progesteron zur Linderung von Wechseljahresbeschwerden.",
      symptoms: ["Reduzierte Hitzewallungen", "Besserer Schlaf", "Schutz vor Knochenschwund", "Mögliche Nebenwirkungen"],
      icon: <HealthCareIcon className="w-5 h-5" />
    },
    {
      term: "Östrogen",
      category: "Hormone",
      definition: "Das wichtigste weibliche Geschlechtshormon, das in den Eierstöcken produziert wird. Sinkt während der Wechseljahre stark ab.",
      symptoms: ["Reguliert Menstruationszyklus", "Beeinflusst Knochendichte", "Wirkt auf Haut und Haare", "Beeinflusst Stimmung"],
      icon: <HealthCareIcon className="w-5 h-5" />
    },
    {
      term: "Progesteron",
      category: "Hormone", 
      definition: "Hormon, das den Menstruationszyklus reguliert und die Gebärmutterschleimhaut auf eine Schwangerschaft vorbereitet.",
      symptoms: ["Reguliert Zyklus", "Beruhigende Wirkung", "Beeinflusst Schlaf", "Sinkt vor Östrogen"],
      icon: <HealthCareIcon className="w-5 h-5" />
    },
    {
      term: "Vaginale Atrophie",
      category: "Symptome",
      definition: "Ausdünnung und Trockenheit der Scheidenwände durch Östrogenmangel. Kann Schmerzen und Infekte verursachen.",
      symptoms: ["Trockenheit", "Schmerzen beim Sex", "Juckreiz", "Häufige Harnwegsinfekte"],
      icon: <HeartPulseIcon className="w-5 h-5" />
    },
    {
      term: "Osteoporose", 
      category: "Risiken",
      definition: "Knochenschwund durch Östrogenmangel. Das Risiko für Knochenbrüche steigt erheblich nach der Menopause.",
      symptoms: ["Fragile Knochen", "Erhöhtes Bruchrisiko", "Rückenschmerzen", "Größenverlust"],
      icon: <HeartSearchIcon className="w-5 h-5" />
    },
    {
      term: "Phytoöstrogene",
      category: "Natürliche Hilfe",
      definition: "Pflanzliche Stoffe, die ähnlich wie Östrogen wirken. Finden sich in Soja, Leinsamen und anderen Pflanzen.",
      symptoms: ["Milde hormonähnliche Wirkung", "In Soja enthalten", "Können Hitzewallungen lindern", "Natürliche Alternative"],
      icon: <NutritionIcon className="w-5 h-5" />
    },
    {
      term: "Prämenopause",
      category: "Phasen",
      definition: "Die Zeit vor den Wechseljahren, in der noch regelmäßige Menstruationszyklen auftreten.",
      symptoms: ["Regelmäßige Periode", "Normale Hormonspiegel", "Gelegentliche PMS-Symptome", "Normale Fruchtbarkeit"],
      icon: <LeafIcon className="w-5 h-5" />
    }
  ];

  const categories = ["Alle", "Phasen", "Symptome", "Hormone", "Behandlung", "Risiken", "Natürliche Hilfe"];
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredEntries = lexiconEntries.filter(entry => {
    const matchesSearch = entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "Alle" || entry.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="health-lexicon" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
            Gesundheits<span className="text-gradient">lexikon</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Verständliche Erklärungen wichtiger Begriffe rund um die Wechseljahre. 
            Medizinisches Wissen einfach erklärt für besseres Verständnis Ihrer Gesundheit.
          </p>
        </div>

        {/* Suchleiste */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Suchen Sie nach Begriffen, Symptomen oder Behandlungen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-base"
            />
          </div>
        </div>

        {/* Kategorie-Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 transition-colors ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Lexikon-Einträge */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    {getCategoryIcon(entry.category)}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {entry.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {entry.term}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {entry.definition}
                </CardDescription>
                
                {entry.symptoms.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Wichtige Aspekte:</h4>
                    <div className="flex flex-wrap gap-1">
                      {entry.symptoms.slice(0, 3).map((symptom, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                      {entry.symptoms.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{entry.symptoms.length - 3} weitere
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Keine Einträge gefunden</h3>
            <p className="text-muted-foreground">
              Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Haben Sie weitere Fragen?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Unser medizinisches Experten-Netzwerk steht Ihnen für persönliche Beratung zur Verfügung. 
              Finden Sie qualifizierte Ärzte in Ihrer Nähe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="gradient-primary text-white shadow-medium w-full sm:w-auto">
                Experten finden
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                Telemedizin nutzen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthLexicon;