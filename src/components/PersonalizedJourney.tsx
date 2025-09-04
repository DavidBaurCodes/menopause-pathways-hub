import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, Heart, Brain, Calendar } from "lucide-react";

const PersonalizedJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "age",
      title: "Wie alt sind Sie?",
      options: [
        { value: "35-40", label: "35-40 Jahre" },
        { value: "41-45", label: "41-45 Jahre" },
        { value: "46-50", label: "46-50 Jahre" },
        { value: "51-55", label: "51-55 Jahre" },
        { value: "55+", label: "55+ Jahre" },
      ],
    },
    {
      id: "symptoms",
      title: "Welche Symptome erleben Sie?",
      options: [
        { value: "irregular-periods", label: "Unregelmäßige Periode" },
        { value: "hot-flashes", label: "Hitzewallungen" },
        { value: "sleep-issues", label: "Schlafprobleme" },
        { value: "mood-changes", label: "Stimmungsschwankungen" },
        { value: "none-yet", label: "Noch keine Symptome" },
      ],
    },
    {
      id: "stage",
      title: "Welche Phase beschreibt Sie am besten?",
      options: [
        { value: "pre", label: "Prämenopause (regelmäßige Periode)" },
        { value: "peri", label: "Perimenopause (unregelmäßige Periode)" },
        { value: "meno", label: "Menopause (keine Periode seit 12+ Monaten)" },
        { value: "post", label: "Postmenopause" },
        { value: "unsure", label: "Ich bin mir nicht sicher" },
      ],
    },
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const getPersonalizedContent = () => {
    const age = answers.age;
    const stage = answers.stage;
    const symptoms = answers.symptoms;

    let recommendations = [];

    if (stage === "pre" || age === "35-40") {
      recommendations.push({
        icon: <Calendar className="w-6 h-6" />,
        title: "Zyklusverfolgung",
        description: "Beginnen Sie mit der Beobachtung von Veränderungen Ihres Zyklus zur Vorbereitung auf die Perimenopause.",
      });
    }

    if (symptoms === "hot-flashes" || symptoms === "sleep-issues") {
      recommendations.push({
        icon: <Heart className="w-6 h-6" />,
        title: "Lebensführung",
        description: "Entdecken Sie Kühlungstechniken, Schlafhygiene und Stressabbau-Strategien.",
      });
    }

    if (stage === "peri" || stage === "meno") {
      recommendations.push({
        icon: <Brain className="w-6 h-6" />,
        title: "Kognitive Gesundheit",
        description: "Lernen Sie über Gehirnnebel, Gedächtnisunterstützung und psychische Gesundheit in den Wechseljahren.",
      });
    }

    return recommendations;
  };

  if (showResults) {
    const recommendations = getPersonalizedContent();
    
    return (
      <section id="journey" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ihr personalisierter <span className="text-gradient">Begleitplan</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground px-4">
                Basierend auf Ihren Antworten empfehlen wir Ihnen diese Ressourcen:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.map((rec, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                      {rec.icon}
                    </div>
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{rec.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                variant="outline"
                className="mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
              >
                Assessment wiederholen
              </Button>
              <Button className="gradient-primary text-white w-full sm:w-auto">
                Alle Ressourcen erkunden
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <section id="journey" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
              Entdecken Sie Ihre <span className="text-gradient">Wechseljahre-Begleitung</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Machen Sie unser kurzes Assessment für personalisierte Ressourcen und Unterstützung
            </p>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Frage {currentStep + 1} von {questions.length}
                </span>
                <div className="w-24 sm:w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary transition-all duration-300 ease-out"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <CardTitle className="text-lg sm:text-xl">{currentQuestion.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <RadioGroup
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1 text-sm sm:text-base">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  Zurück
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id]}
                  className="gradient-primary text-white w-full sm:w-auto order-1 sm:order-2"
                >
                  {currentStep === questions.length - 1 ? "Ergebnisse erhalten" : "Weiter"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedJourney;