
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-eco-600 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg space-y-4">
            <h2 className="text-3xl font-bold">Pronto para participar da revolução sustentável?</h2>
            <p className="opacity-90">
              Junte-se a milhares de pessoas transformando o consumo em uma experiência 
              mais consciente, econômica e divertida.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-eco-700 hover:bg-eco-50">
              Baixe o App
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-eco-700">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
