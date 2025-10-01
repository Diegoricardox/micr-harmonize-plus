import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Sun, ArrowUpDown, CloudRain, Search, TrendingUp, Map, BarChart, Database } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Climate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cametá/Mocajuba</p>
                  <p className="text-4xl font-bold text-foreground">27.4 °C</p>
                </div>
                <Thermometer className="h-12 w-12 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/20 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Índice de Quentura</p>
                  <p className="text-4xl font-bold text-foreground">31.4 °C</p>
                  <p className="text-xs text-muted-foreground mt-1">Percepção térmica</p>
                </div>
                <Sun className="h-12 w-12 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-blue-50 dark:bg-blue-950/20">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nível do rio</p>
                  <p className="text-4xl font-bold text-foreground">0.74 m</p>
                </div>
                <ArrowUpDown className="h-12 w-12 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Chuva</p>
                  <p className="text-4xl font-bold text-foreground">0 mm</p>
                  <p className="text-xs text-muted-foreground mt-1">Precipitação</p>
                </div>
                <CloudRain className="h-12 w-12 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
              Sobre o Projeto Harmonize
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A aplicação web do Projeto Harmonize conecta dados de saúde hospitalar de municípios como 
              Cametá (PA), Mocajuba (PA) e Patos (PB) a informações climáticas detalhadas, incluindo 
              níveis do rio, chuvas, umidade, raios UV e dados capturados por drones.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com uma interface interativa, a plataforma oferece mapas e gráficos que permitem aos usuários 
              explorar a relação entre fatores climáticos e padrões de saúde. Essas ferramentas visuais 
              simplificam a análise e oferecem insights para gestores e pesquisadores planejarem ações de 
              saúde pública de forma eficiente. Além disso, a aplicação é uma ponte essencial para entender 
              como o ambiente impacta comunidades ribeirinhas e urbanas vulneráveis, facilitando a tomada de 
              decisões e a alocação de recursos. O objetivo principal é transformar dados complexos em 
              conhecimento acessível, promovendo intervenções direcionadas e maior resiliência nas 
              comunidades atendidas.
            </p>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Principais Benefícios:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Exploração de dados por município, idade e tipo de agravo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Integração com variáveis climáticas (temperatura, precipitação, nível do rio).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Map className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Mapas temáticos interativos por período e tipo de evento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Análise de tendência com previsões e séries temporais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Database className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Dados organizados e atualizados para facilitar a tomada de decisão.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Sobre;
