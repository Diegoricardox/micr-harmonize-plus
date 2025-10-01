import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CloudRain, Thermometer, Wind, Droplets } from "lucide-react";

const climateData = [
  { mes: "Jan", temperatura: 28, precipitacao: 180, umidade: 78 },
  { mes: "Fev", temperatura: 29, precipitacao: 160, umidade: 76 },
  { mes: "Mar", temperatura: 28, precipitacao: 140, umidade: 74 },
  { mes: "Abr", temperatura: 26, precipitacao: 80, umidade: 70 },
  { mes: "Mai", temperatura: 24, precipitacao: 60, umidade: 68 },
  { mes: "Jun", temperatura: 23, precipitacao: 40, umidade: 65 },
];

const Ambiente = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Dados Ambientais</h1>
        
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperatura</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">23°C</p>
              <p className="text-xs text-muted-foreground">Média atual</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Precipitação</CardTitle>
              <CloudRain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">40mm</p>
              <p className="text-xs text-muted-foreground">Mensal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Umidade</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">65%</p>
              <p className="text-xs text-muted-foreground">Relativa</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vento</CardTitle>
              <Wind className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">15km/h</p>
              <p className="text-xs text-muted-foreground">Velocidade</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Temperatura Mensal (°C)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={climateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperatura" stroke="hsl(var(--primary))" strokeWidth={2} name="Temperatura" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Precipitação e Umidade</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={climateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="precipitacao" stroke="hsl(var(--accent))" strokeWidth={2} name="Precipitação (mm)" />
                  <Line yAxisId="right" type="monotone" dataKey="umidade" stroke="hsl(var(--primary))" strokeWidth={2} name="Umidade (%)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Ambiente;
