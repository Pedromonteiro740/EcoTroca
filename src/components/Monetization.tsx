
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export default function Monetization() {
  const plans = [
    {
      name: "Básico",
      price: "Grátis",
      description: "Para usuários casuais",
      features: [
        { name: "Até 5 anúncios ativos", included: true },
        { name: "Acesso a trocas e doações", included: true },
        { name: "Sistema básico de EcoPontos", included: true },
        { name: "Chat com outros usuários", included: true },
        { name: "Suporte por e-mail", included: true },
        { name: "Anúncios no aplicativo", included: false },
        { name: "Destaque de anúncios", included: false },
        { name: "Acesso a eventos premium", included: false },
      ],
      ctaText: "Começar Grátis",
    },
    {
      name: "Premium",
      price: "R$19,90/mês",
      description: "Para usuários frequentes",
      features: [
        { name: "Anúncios ilimitados", included: true },
        { name: "Sem anúncios no aplicativo", included: true },
        { name: "EcoPontos em dobro", included: true },
        { name: "Destaque em resultados de busca", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Acesso a eventos premium", included: true },
        { name: "Verificação premium", included: true },
        { name: "Análise avançada de impacto", included: true },
      ],
      ctaText: "Assinar Premium",
      popular: true,
    },
    {
      name: "Empresarial",
      price: "R$59,90/mês",
      description: "Para pequenos negócios",
      features: [
        { name: "Loja personalizada no app", included: true },
        { name: "Painel administrativo", included: true },
        { name: "Análises e relatórios", included: true },
        { name: "Perfil verificado de negócio", included: true },
        { name: "Marketing para sua audiência", included: true },
        { name: "API para integração", included: true },
        { name: "Suporte especializado", included: true },
        { name: "Cupons de desconto exclusivos", included: true },
      ],
      ctaText: "Falar com Vendas",
    },
  ];

  const additionalRevenue = [
    {
      title: "Marketplace taxa",
      description: "5% sobre vendas (não aplicável para trocas e doações)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
          <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
          <line x1="12" y1="22" x2="12" y2="13" />
          <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
        </svg>
      ),
    },
    {
      title: "Parcerias com marcas",
      description: "Ofertas exclusivas de produtos sustentáveis e serviços eco-friendly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Publicidade direcionada",
      description: "Anúncios relevantes para usuários gratuitos, com foco em produtos sustentáveis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
    {
      title: "Eventos e workshops",
      description: "Organização de eventos educativos e práticos sobre economia circular",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-background via-eco-50 to-background">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-3 py-1 bg-eco-50 text-eco-600 border-eco-200">
            Planos e Monetização
          </Badge>
          <h2 className="text-3xl font-bold">Escolha o plano ideal para você</h2>
          <p className="text-muted-foreground">
            O EcoTroca oferece diferentes opções para atender a todos os tipos de usuários,
            desde pessoas físicas até pequenos negócios.
          </p>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="plans">Planos de Assinatura</TabsTrigger>
            <TabsTrigger value="revenue">Fontes de Receita</TabsTrigger>
          </TabsList>
          <TabsContent value="plans" className="pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative border rounded-xl overflow-hidden bg-card text-card-foreground shadow ${
                    plan.popular ? "border-eco-500 shadow-eco-100/50" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 -m-3">
                      <Badge className="bg-eco-500 text-white border-0">Popular</Badge>
                    </div>
                  )}
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium text-xl">{plan.name}</h3>
                      <div>
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-eco-600" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-eco-600 hover:bg-eco-700" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="revenue" className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {additionalRevenue.map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 bg-card shadow-sm flex gap-4 items-start"
                >
                  <div className="bg-eco-100 text-eco-700 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
