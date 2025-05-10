
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Cadastre seus itens',
      description: 'Tire fotos, descreva e categorize seus itens em bom estado que não usa mais.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 3v18" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Conecte-se',
      description: 'Encontre pessoas interessadas em seus itens ou busque o que precisa.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 8a4 4 0 0 1-8 0" />
          <circle cx="12" cy="16" r="6" />
          <path d="m9 16 3-3 3 3" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Troque ou Negocie',
      description: 'Combine a troca, doação ou venda através do chat seguro do aplicativo.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m8 6 4-4 4 4" />
          <path d="M12 2v10" />
          <path d="m16 18-4 4-4-4" />
          <path d="M12 22v-10" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Ganhe Recompensas',
      description: 'Acumule EcoPontos com cada interação e troque por benefícios exclusivos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v8" />
          <path d="m9 18 3-1.5 3 1.5" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background via-eco-50 to-background">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Como funciona o EcoTroca</h2>
          <p className="text-muted-foreground">
            Um processo simples para transformar itens parados em recursos úteis, enquanto 
            você contribui para um planeta mais sustentável.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="border-eco-100 relative overflow-hidden bg-background/80 backdrop-blur-sm hover:shadow-md hover:shadow-eco-100 transition-all">
              <span className="absolute -top-4 -left-4 text-6xl font-bold text-eco-100">
                {step.number}
              </span>
              <CardContent className="pt-12 pb-8 px-6">
                <div className="bg-eco-100 text-eco-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button size="lg" className="bg-eco-600 hover:bg-eco-700">
            Comece Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
