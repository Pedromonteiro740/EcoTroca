
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Benefits() {
  const ecoPoints = 520;
  const maxPoints = 1000;
  const percentComplete = (ecoPoints / maxPoints) * 100;

  return (
    <section className="container py-16 space-y-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <Badge variant="outline" className="px-3 py-1 bg-eco-50 text-eco-600 border-eco-200">
            Vantagens
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Os benefícios vão além da economia
          </h2>
          <p className="text-muted-foreground">
            Ao participar do EcoTroca, você contribui para um futuro mais sustentável enquanto 
            desfruta de vantagens reais e mensuráveis.
          </p>
          
          <ul className="space-y-2">
            {[
              "Encontre itens por até 70% do valor de mercado",
              "Reduza o impacto ambiental dando nova vida aos objetos",
              "Conecte-se com uma comunidade de pessoas conscientes",
              "Economize espaço em casa eliminando o que não usa",
              "Acumule EcoPontos e troque por benefícios exclusivos"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="bg-eco-100 rounded-full p-1 mt-0.5">
                  <Check className="h-3 w-3 text-eco-700" />
                </div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 flex flex-col gap-6">
          <Card className="border-eco-100">
            <CardHeader>
              <CardTitle>Seus EcoPontos</CardTitle>
              <CardDescription>Acompanhe seu progresso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{ecoPoints}</span>
                <span className="text-sm text-muted-foreground">Meta: {maxPoints}</span>
              </div>
              <Progress value={percentComplete} className="h-3 bg-muted" />
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4">
              <span className="text-sm">Nível: Eco-iniciante</span>
              <Badge variant="outline" className="bg-eco-100 text-eco-700 border-eco-200">
                +80 na próxima troca
              </Badge>
            </CardFooter>
          </Card>
          
          <Card className="border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-eco-700">Seu Impacto</CardTitle>
              <CardDescription>Resultados das suas contribuições</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-2xl font-bold">12.5kg</span>
                  <p className="text-xs text-muted-foreground">CO₂ evitado</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold">8</span>
                  <p className="text-xs text-muted-foreground">Itens reutilizados</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold">780L</span>
                  <p className="text-xs text-muted-foreground">Água economizada</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold">3</span>
                  <p className="text-xs text-muted-foreground">Comunidades ativas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
