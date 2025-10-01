import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Sobre o Sistema</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Microrregião de Saúde - Sistema de Harmonização</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Este sistema foi desenvolvido para harmonizar e visualizar dados de saúde de diferentes fontes,
                incluindo informações sobre população, estabelecimentos de saúde, internações e dados ambientais.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Fornecer uma plataforma interativa e dinâmica para análise de dados de saúde pública,
                facilitando a tomada de decisões baseadas em evidências.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funcionalidades</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Visualização de dados populacionais</li>
                <li>Mapeamento de estabelecimentos de saúde</li>
                <li>Análise de internações hospitalares</li>
                <li>Monitoramento de dados ambientais</li>
                <li>Dashboards interativos e dinâmicos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
