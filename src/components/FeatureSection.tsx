
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, Coins, Users, Award } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="container py-16 space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="px-3 py-1 bg-eco-50 text-eco-600 border-eco-200">
          Funcionalidades Principais
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          Como o EcoTroca transforma sua experiência
        </h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Nossa plataforma integra sustentabilidade, economia e engajamento social em uma
          experiência simples e envolvente.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-eco-100 hover:shadow-md hover:shadow-eco-100 transition-all">
          <CardHeader className="space-y-1">
            <div className="bg-eco-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Recycle className="w-6 h-6 text-eco-700" />
            </div>
            <CardTitle className="text-xl">Marketplace Circular</CardTitle>
            <CardDescription>Troque, doe ou venda itens em uma única plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Interface intuitiva para cadastrar itens com fotos, descrições e categorias. 
              Busca avançada e sistema de localização para encontrar itens próximos a você.
            </p>
          </CardContent>
        </Card>

        <Card className="border-eco-100 hover:shadow-md hover:shadow-eco-100 transition-all">
          <CardHeader className="space-y-1">
            <div className="bg-eco-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-eco-700" />
            </div>
            <CardTitle className="text-xl">Sistema de EcoPontos</CardTitle>
            <CardDescription>Ganhe recompensas por suas ações sustentáveis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Acumule pontos ao reciclar, trocar ou doar itens. Troque seus EcoPontos por 
              descontos em lojas parceiras ou produtos exclusivos no app.
            </p>
          </CardContent>
        </Card>

        <Card className="border-eco-100 hover:shadow-md hover:shadow-eco-100 transition-all">
          <CardHeader className="space-y-1">
            <div className="bg-eco-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-eco-700" />
            </div>
            <CardTitle className="text-xl">Comunidades Locais</CardTitle>
            <CardDescription>Conecte-se com pessoas com interesses similares</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Participe de grupos por bairro, cidade ou interesse. Organize e participe de eventos 
              locais como feiras de troca e workshops de reutilização.
            </p>
          </CardContent>
        </Card>

        <Card className="border-eco-100 hover:shadow-md hover:shadow-eco-100 transition-all">
          <CardHeader className="space-y-1">
            <div className="bg-eco-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-eco-700" />
            </div>
            <CardTitle className="text-xl">Impacto Ambiental</CardTitle>
            <CardDescription>Visualize sua contribuição para o planeta</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Dashboard personalizado que mostra o impacto das suas ações (CO2 evitado, água 
              economizada). Compartilhe suas conquistas nas redes sociais.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
