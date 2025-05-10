
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-eco-50 to-background pt-8 pb-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Transforme o que não usa em{" "}
                <span className="text-eco-600">valor</span>
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Troque, doe ou venda itens usados enquanto contribui para um mundo mais sustentável. 
                Ganhe recompensas e faça parte desta comunidade consciente.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-eco-600 hover:bg-eco-700">
                Começar agora
              </Button>
              <Button size="lg" variant="outline">
                Como funciona?
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg
                  className="h-4 w-4 fill-eco-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>4.9 estrelas (2.5k avaliações)</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="h-4 w-4 fill-eco-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                </svg>
                <span>+50k itens trocados</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[350px] sm:h-[450px]">
              <div className="absolute top-1/4 -left-4 w-40 h-40 md:w-60 md:h-60 bg-eco-200 rounded-3xl transform -rotate-6 animate-float"></div>
              <div className="absolute top-1/3 left-20 w-40 h-60 md:w-60 md:h-80 bg-eco-100 rounded-3xl transform rotate-12 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-eco-300/30 to-eco-500/30"></div>
              </div>
              <div className="absolute top-16 right-8 w-40 h-40 md:w-52 md:h-52 bg-eco-400 rounded-full transform -rotate-12 overflow-hidden animate-pulse-slow">
                <div className="w-full h-full bg-gradient-to-br from-eco-300/20 to-eco-600/20"></div>
              </div>
              <div className="absolute bottom-12 right-4 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-3xl transform rotate-12 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tl from-accent/20 to-accent/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="text-background"
          ></path>
        </svg>
      </div>
    </div>
  );
}
