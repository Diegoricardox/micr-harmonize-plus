import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const mockData = [
  { ano: "2018", populacao: 150000, masculino: 73000, feminino: 77000 },
  { ano: "2019", populacao: 155000, masculino: 75500, feminino: 79500 },
  { ano: "2020", populacao: 160000, masculino: 78000, feminino: 82000 },
  { ano: "2021", populacao: 165000, masculino: 80500, feminino: 84500 },
  { ano: "2022", populacao: 170000, masculino: 83000, feminino: 87000 },
];

const Populacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Dados Populacionais</h1>
        
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">População Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">170.000</p>
              <p className="text-sm text-muted-foreground">Habitantes em 2022</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Crescimento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">+13.3%</p>
              <p className="text-sm text-muted-foreground">Últimos 5 anos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Densidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">85</p>
              <p className="text-sm text-muted-foreground">hab/km²</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Evolução Populacional</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ano" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="populacao" stroke="hsl(var(--primary))" strokeWidth={2} name="Total" />
                <Line type="monotone" dataKey="masculino" stroke="hsl(var(--accent))" strokeWidth={2} name="Masculino" />
                <Line type="monotone" dataKey="feminino" stroke="hsl(var(--destructive))" strokeWidth={2} name="Feminino" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Populacao;
