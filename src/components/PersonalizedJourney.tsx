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
      title: "What's your age range?",
      options: [
        { value: "35-40", label: "35-40 years" },
        { value: "41-45", label: "41-45 years" },
        { value: "46-50", label: "46-50 years" },
        { value: "51-55", label: "51-55 years" },
        { value: "55+", label: "55+ years" },
      ],
    },
    {
      id: "symptoms",
      title: "Which symptoms are you experiencing?",
      options: [
        { value: "irregular-periods", label: "Irregular periods" },
        { value: "hot-flashes", label: "Hot flashes" },
        { value: "sleep-issues", label: "Sleep difficulties" },
        { value: "mood-changes", label: "Mood changes" },
        { value: "none-yet", label: "No symptoms yet" },
      ],
    },
    {
      id: "stage",
      title: "Which stage best describes you?",
      options: [
        { value: "pre", label: "Pre-menopause (regular periods)" },
        { value: "peri", label: "Perimenopause (irregular periods)" },
        { value: "meno", label: "Menopause (no period for 12+ months)" },
        { value: "post", label: "Post-menopause" },
        { value: "unsure", label: "I'm not sure" },
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
        title: "Track Your Cycle",
        description: "Start monitoring changes in your menstrual cycle to prepare for perimenopause.",
      });
    }

    if (symptoms === "hot-flashes" || symptoms === "sleep-issues") {
      recommendations.push({
        icon: <Heart className="w-6 h-6" />,
        title: "Lifestyle Management",
        description: "Discover cooling techniques, sleep hygiene, and stress reduction strategies.",
      });
    }

    if (stage === "peri" || stage === "meno") {
      recommendations.push({
        icon: <Brain className="w-6 h-6" />,
        title: "Cognitive Wellness",
        description: "Learn about brain fog, memory support, and mental health during menopause.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Personalized <span className="text-gradient">Journey Plan</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Based on your responses, here are our recommended resources:
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
                className="mr-4"
              >
                Retake Assessment
              </Button>
              <Button className="gradient-primary text-white">
                Explore Full Resources
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Your <span className="text-gradient">Menopause Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Take our quick assessment to receive personalized resources and support
            </p>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary transition-all duration-300 ease-out"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <CardTitle className="text-xl">{currentQuestion.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <RadioGroup
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1 text-base">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id]}
                  className="gradient-primary text-white"
                >
                  {currentStep === questions.length - 1 ? "Get Results" : "Next"}
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