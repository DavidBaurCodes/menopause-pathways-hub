import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import Lexicon from "./pages/Lexicon";
import Knowledge from "./pages/Knowledge";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import Lifehacks from "./pages/Lifehacks";
import Podcasts from "./pages/Podcasts";
import Workplace from "./pages/Workplace";
import Community from "./pages/Community";
import Benefits from "./pages/Benefits";
import Channels from "./pages/Channels";
import MenopauseDetails from "./pages/MenopauseDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/lexicon" element={<Lexicon />} />
                  <Route path="/knowledge" element={<Knowledge />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/blog/category/:category" element={<BlogCategory />} />
                  <Route path="/lifehacks" element={<Lifehacks />} />
                  <Route path="/podcasts" element={<Podcasts />} />
                  <Route path="/workplace" element={<Workplace />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/benefits" element={<Benefits />} />
                  <Route path="/channels" element={<Channels />} />
                  <Route path="/wechseljahre-details" element={<MenopauseDetails />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
