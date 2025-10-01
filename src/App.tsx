import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Populacao from "./pages/Populacao";
import Estabelecimentos from "./pages/Estabelecimentos";
import Internacoes from "./pages/Internacoes";
import Ambiente from "./pages/Ambiente";
import Rascunho from "./pages/Rascunho";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/populacao" element={<Populacao />} />
          <Route path="/estabelecimentos" element={<Estabelecimentos />} />
          <Route path="/internacoes" element={<Internacoes />} />
          <Route path="/ambiente" element={<Ambiente />} />
          <Route path="/rascunho" element={<Rascunho />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
