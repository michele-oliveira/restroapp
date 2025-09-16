"use client";

import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { formatMoneyBrl } from "@/utils/formatters";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cartItem = items.find((item) => item.id === product.id);
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    if (isInCart) {
      updateQuantity(product.id, cartItem.quantity + quantity);
    } else {
      addItem({ ...product, quantity });
    }
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {product.active ? (
            <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-500">
              Disponível
            </Badge>
          ) : (
            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-500">
              Esgotado
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            {isInCart && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                No carrinho ({cartItem.quantity})
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          <div
            className="flex items-center justify-center mb-1"
          >
            <span className="text-2xl font-bold text-primary">
              R$ {formatMoneyBrl(product.price)}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="text-lg font-medium min-w-[2rem] text-center">
              {quantity}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            disabled={!product.active}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isInCart ? "Adicionar Mais" : "Adicionar ao Carrinho"}
          </Button>

        </div>
      </CardFooter>
    </Card>
  );
}
