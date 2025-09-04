import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { LogIn, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-soft border-b">
      <div className="w-full pl-4 pr-4 sm:pr-6 lg:pr-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="p-2 rounded-lg hover:bg-muted transition-colors" />
            <div className="flex items-center space-x-2">
              <Logo size={32} />
              <Link to="/" className="text-xl font-bold text-gradient">AOK PLUS</Link>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 pr-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-2" asChild>
              <Link to="/login">
                <LogIn className="w-4 h-4" />
                Anmelden
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-2" asChild>
              <Link to="/register">
                <Sparkles className="w-4 h-4" />
                Registrieren
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;