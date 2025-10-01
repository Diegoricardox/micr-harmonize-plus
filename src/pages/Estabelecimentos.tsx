import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const mockData = [
  { tipo: "Hospitais", quantidade: 12, leitos: 450 },
  { tipo: "UBS", quantidade: 28, leitos: 0 },
  { tipo: "UPA", quantidade: 5, leitos: 50 },
  { tipo: "Clínicas", quantidade: 45, leitos: 0 },
  { tipo: "Laboratórios", quantidade: 18, leitos: 0 },
];

const Estabelecimentos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Estabelecimentos de Saúde</h1>
        
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">108</p>
              <p className="text-sm text-muted-foreground">Estabelecimentos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hospitais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">12</p>
              <p className="text-sm text-muted-foreground">Unidades</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Leitos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">500</p>
              <p className="text-sm text-muted-foreground">Disponíveis</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">UBS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">28</p>
              <p className="text-sm text-muted-foreground">Unidades Básicas</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tipo" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade" fill="hsl(var(--primary))" name="Quantidade" />
                <Bar dataKey="leitos" fill="hsl(var(--accent))" name="Leitos" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Estabelecimentos;
