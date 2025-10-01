import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const timeSeriesData = [
  { mes: "Jan", internacoes: 450, altas: 420, obitos: 15 },
  { mes: "Fev", internacoes: 480, altas: 455, obitos: 18 },
  { mes: "Mar", internacoes: 520, altas: 490, obitos: 22 },
  { mes: "Abr", internacoes: 495, altas: 465, obitos: 20 },
  { mes: "Mai", internacoes: 510, altas: 485, obitos: 19 },
  { mes: "Jun", internacoes: 530, altas: 500, obitos: 21 },
];

const causasData = [
  { name: "Respiratórias", value: 30 },
  { name: "Cardiovasculares", value: 25 },
  { name: "Trauma", value: 15 },
  { name: "Digestivas", value: 12 },
  { name: "Outras", value: 18 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--destructive))", "hsl(var(--secondary))", "hsl(var(--muted))"];

const Internacoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Internações Hospitalares</h1>
        
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Mês</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">530</p>
              <p className="text-sm text-muted-foreground">Internações</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Altas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">500</p>
              <p className="text-sm text-muted-foreground">Pacientes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Taxa Ocupação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground">Média</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tempo Médio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">5.2</p>
              <p className="text-sm text-muted-foreground">Dias</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Evolução Temporal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="internacoes" stroke="hsl(var(--primary))" strokeWidth={2} name="Internações" />
                  <Line type="monotone" dataKey="altas" stroke="hsl(var(--accent))" strokeWidth={2} name="Altas" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Principais Causas (%)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={causasData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="hsl(var(--primary))"
                    dataKey="value"
                  >
                    {causasData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Internacoes;
