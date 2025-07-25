import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { About } from "./pages/About"
import Groupe from "./pages/Groupe";
import { Services } from "./pages/Services";
import Interventions from "./pages/Interventions";
import DevisGratuit from "./pages/DevisGratuit";
import { Contact }from "./pages/Contact";
import ZoneIntervention from "./pages/Zone-intervention";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/groupe" element={<Groupe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/interventions" element={<Interventions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis-gratuit" element={<DevisGratuit />} />
          <Route path="/zone-intervention" element={<ZoneIntervention />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
