import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic with Supabase
    console.log("Login attempt:", { email, password });
  };

  return (
    <>
      <Helmet>
        <title>Anmelden - AOK PLUS Wechseljahre</title>
        <meta name="description" content="Melde dich bei AOK PLUS an und erhalte personalisierten Zugang zu Wechseljahre-Ressourcen und Unterstützung." />
        <meta name="keywords" content="AOK PLUS Login, Anmelden, Wechseljahre, Mitgliederbereich" />
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
                  Willkommen zurück
                </CardTitle>
                <CardDescription className="text-base">
                  Melde dich in deinem AOK PLUS Konto an
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="deine@email.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                        placeholder="Dein Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                </div>

                <div className="flex items-center justify-between text-sm">
                  <Link 
                    to="/forgot-password" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Passwort vergessen?
                  </Link>
                </div>

                <Button type="submit" className="w-full h-11 gradient-primary text-white font-medium">
                  <LogIn className="w-4 h-4 mr-2" />
                  Anmelden
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">
                  Noch kein Konto? 
                </span>{" "}
                <Link 
                  to="/register" 
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Jetzt registrieren
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Info section */}
          <div className="mt-6 bg-white/50 backdrop-blur rounded-xl p-4 border">
            <h3 className="font-medium text-sm text-center mb-3">Deine Vorteile nach der Anmeldung:</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <LogIn className="w-3 h-3 text-success flex-shrink-0" />
                <span>Zugriff auf dein personalisiertes Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <LogIn className="w-3 h-3 text-success flex-shrink-0" />
                <span>Gespeicherte Inhalte und Fortschritte</span>
              </div>
              <div className="flex items-center gap-2">
                <LogIn className="w-3 h-3 text-success flex-shrink-0" />
                <span>Exklusive AOK PLUS Mitgliederinhalte</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t text-center text-xs text-muted-foreground">
              <p>
                Durch die Anmeldung stimmst du unseren{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Nutzungsbedingungen
                </Link>{" "}
                und der{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                zu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;