
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Bell, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 rounded-full bg-eco-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                <path d="M21 10V8a1 1 0 0 0-1-1h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4a1 1 0 0 0 1-1V1"></path>
                <path d="M7 22h10"></path>
                <path d="M12 17v5"></path>
                <path d="M3 10.2C3 5.2 7 2 12 2"></path>
                <path d="M19.2 15.2c1.1.2 2 1.2 2 2.4v2.9c0 .9-.7 1.5-1.5 1.5h-5"></path>
                <path d="M12 17c-5 0-9-3.2-9-8.2"></path>
                <path d="M10 17v5"></path>
                <path d="M7 10h7"></path>
                <path d="M10 13h4"></path>
              </svg>
            </div>
            <span className="font-bold text-xl text-eco-700">EcoTroca</span>
          </div>
        </div>

        <div className="flex-1 mx-4 max-w-md relative">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos, serviços, pessoas..."
              className="w-full pl-8 rounded-full bg-muted/50"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>

          <Button variant="outline" className="gap-2 hidden sm:flex">
            <PlusCircle className="h-4 w-4" />
            <span>Novo Item</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Usuário" />
                  <AvatarFallback className="bg-eco-200 text-eco-700">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem className="cursor-pointer">
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Meus EcoPontos: 520
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
