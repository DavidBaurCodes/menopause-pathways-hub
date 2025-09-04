import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-soft border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="p-2 rounded-lg hover:bg-muted transition-colors" />
            <div className="flex items-center space-x-2">
              <Logo size={32} />
              <Link to="/" className="text-xl font-bold text-gradient">AOK PLUS</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Anmelden
            </Button>
            <Button size="sm" className="gradient-primary text-white">
              Jetzt starten
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;