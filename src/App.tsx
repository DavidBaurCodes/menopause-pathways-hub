import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import Lexicon from "./pages/Lexicon";
import Knowledge from "./pages/Knowledge";
import Podcasts from "./pages/Podcasts";
import Workplace from "./pages/Workplace";
import Community from "./pages/Community";
import Benefits from "./pages/Benefits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/lexicon" element={<Lexicon />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/workplace" element={<Workplace />} />
            <Route path="/community" element={<Community />} />
            <Route path="/benefits" element={<Benefits />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
