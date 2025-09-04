import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, Heart, Brain, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/personalized-journey-hero.jpg";

const PersonalizedJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "age",
      title: "Wie alt bist du?",
      type: "single",
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
      title: "Welche Symptome erlebst du? (Mehrfachauswahl möglich)",
      type: "multiple",
      options: [
        { value: "irregular-periods", label: "Unregelmäßige Periode" },
        { value: "hot-flashes", label: "Hitzewallungen" },
        { value: "sleep-issues", label: "Schlafprobleme" },
        { value: "mood-changes", label: "Stimmungsschwankungen" },
        { value: "brain-fog", label: "Gedächtnisprobleme/Brainfog" },
        { value: "weight-gain", label: "Gewichtszunahme" },
        { value: "joint-pain", label: "Gelenkschmerzen" },
        { value: "dry-skin", label: "Trockene Haut/Haare" },
        { value: "none-yet", label: "Noch keine Symptome" },
      ],
    },
    {
      id: "stage",
      title: "Welche Phase beschreibt dich am besten?",
      type: "single",
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

  const handleMultipleAnswer = (questionId: string, value: string, checked: boolean) => {
    const currentAnswers = answers[questionId] ? answers[questionId].split(',') : [];
    let newAnswers;
    
    if (checked) {
      newAnswers = [...currentAnswers, value];
    } else {
      newAnswers = currentAnswers.filter(answer => answer !== value);
    }
    
    setAnswers({ ...answers, [questionId]: newAnswers.join(',') });
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
        description: "Beginne mit der Beobachtung von Veränderungen deines Zyklus zur Vorbereitung auf die Perimenopause.",
      });
    }

    if (symptoms === "hot-flashes" || symptoms === "sleep-issues") {
      recommendations.push({
        icon: <Heart className="w-6 h-6" />,
        title: "Lebensführung",
        description: "Entdecke Kühlungstechniken, Schlafhygiene und Stressabbau-Strategien.",
      });
    }

    if (stage === "peri" || stage === "meno") {
      recommendations.push({
        icon: <Brain className="w-6 h-6" />,
        title: "Kognitive Gesundheit",
        description: "Lerne über Gehirnnebel, Gedächtnisunterstützung und psychische Gesundheit in den Wechseljahren.",
      });
    }

    return recommendations;
  };

  if (showResults) {
    const recommendations = getPersonalizedContent();
    
    return (
      <section id="journey" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section with Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12 shadow-strong">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
              <img 
                src={heroImage} 
                alt="Personalisierte Wechseljahre-Begleitung"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-6">
                <Sparkles className="w-12 h-12 mb-4 text-white" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Dein Weg ist einzigartig!
                </h2>
                <p className="text-lg sm:text-xl max-w-2xl opacity-90">
                  Basierend auf deinen Antworten - maßgeschneiderte Empfehlungen für deine Wechseljahre
                </p>
              </div>
            </div>

            {/* Recommendations Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {recommendations.map((rec, index) => (
                <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-white to-primary/5">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform shadow-medium">
                      {rec.icon}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{rec.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed mb-6">{rec.description}</CardDescription>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/5"
                      asChild
                    >
                      <a href="/wechseljahre-details">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 text-center border border-primary/20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
                Bereit für konkrete Schritte?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Entdecke praktische Lifehacks und bewährte Strategien, die sofort umsetzbar sind.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="gradient-primary text-white shadow-medium hover:shadow-strong transition-all px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a href="/lifehacks">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Praktische Lifehacks entdecken
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg"
                  onClick={() => {
                    setCurrentStep(0);
                    setAnswers({});
                    setShowResults(false);
                  }}
                >
                  Assessment wiederholen
                </Button>
              </div>
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
              Entdecke deine <span className="text-gradient">Wechseljahre-Begleitung</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Mache unser kurzes Assessment für personalisierte Ressourcen und Unterstützung
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
              {currentQuestion.type === "single" ? (
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
              ) : (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => {
                    const currentAnswers = answers[currentQuestion.id] ? answers[currentQuestion.id].split(',') : [];
                    const isChecked = currentAnswers.includes(option.value);
                    
                    return (
                      <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <Checkbox
                          id={option.value}
                          checked={isChecked}
                          onCheckedChange={(checked) => 
                            handleMultipleAnswer(currentQuestion.id, option.value, checked as boolean)
                          }
                        />
                        <Label htmlFor={option.value} className="cursor-pointer flex-1 text-sm sm:text-base">
                          {option.label}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              )}

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