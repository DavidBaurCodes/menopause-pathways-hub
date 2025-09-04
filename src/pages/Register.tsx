import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Eye, EyeOff, ArrowLeft, Check } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToNewsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual registration logic with Supabase
    console.log("Registration attempt:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Registrieren - AOK PLUS Wechseljahre</title>
        <meta name="description" content="Erstelle dein kostenloses AOK PLUS Konto und erhalte personalisierten Zugang zu Wechseljahre-Ressourcen und Unterstützung." />
        <meta name="keywords" content="AOK PLUS Registrierung, Anmelden, Wechseljahre, Kostenloses Konto" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back to home link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <Card className="border-2 shadow-strong">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <Logo size={48} />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">
                  Konto erstellen
                </CardTitle>
                <CardDescription className="text-base">
                  Registriere dich kostenlos für deine AOK PLUS Wechseljahre-Begleitung
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vorname</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Maria"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nachname</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Mustermann"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="maria@beispiel.de"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Passwort</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Sicheres Passwort wählen"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                        className="h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Passwort wiederholen"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        required
                        className="h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm leading-5">
                      Ich stimme den{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Nutzungsbedingungen
                      </Link>{" "}
                      und der{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu. *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.agreeToNewsletter}
                      onCheckedChange={(checked) => handleInputChange("agreeToNewsletter", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="newsletter" className="text-sm leading-5">
                      Ich möchte regelmäßig Tipps und Updates zu Wechseljahre-Themen erhalten (optional)
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 gradient-primary text-white font-medium"
                  disabled={!formData.agreeToTerms}
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Kostenloses Konto erstellen
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">
                  Bereits ein Konto? 
                </span>{" "}
                <Link 
                  to="/login" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Jetzt anmelden
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Benefits section */}
          <div className="mt-6 bg-white/50 backdrop-blur rounded-xl p-4 border">
            <h3 className="font-medium text-sm text-center mb-3">Was du mit deinem kostenlosen Konto erhältst:</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-success flex-shrink-0" />
                <span>Personalisiertes Wechseljahre-Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-success flex-shrink-0" />
                <span>Zugang zu exklusiven AOK PLUS Ressourcen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-success flex-shrink-0" />
                <span>Community-Zugang und Expertenberatung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;