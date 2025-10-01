import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Rascunho = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Rascunho e Configurações</h1>
        
        <Tabs defaultValue="config" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="config">Configurações</TabsTrigger>
            <TabsTrigger value="dados">Conexão Dados</TabsTrigger>
            <TabsTrigger value="notas">Notas</TabsTrigger>
          </TabsList>

          <TabsContent value="config" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configure parâmetros gerais do sistema, períodos de análise e preferências de visualização.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dados" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Conexão PostgreSQL</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Configure a conexão com o banco de dados PostgreSQL para importar dados em tempo real.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Status da Conexão:</p>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Aguardando configuração</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notas" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notas e Anotações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adicione notas e comentários sobre análises e descobertas nos dados.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Rascunho;
