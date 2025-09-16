"use client";

import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Cart from "./Cart";

export default function Header() {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">RestroApp</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#menu"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Cardápio
            </a>
            <a
              href="#about"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Sobre
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Carrinho
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-primary text-primary-foreground"
                  >
                    {getTotalItems()}
                  </Badge>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <Cart />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-2 pt-4">
              <a
                href="#menu"
                className="hover:text-primary-foreground/80 transition-colors py-2"
              >
                Cardápio
              </a>
              <a
                href="#about"
                className="hover:text-primary-foreground/80 transition-colors py-2"
              >
                Sobre
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
