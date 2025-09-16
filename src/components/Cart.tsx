"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatMoneyBrl } from "@/utils/formatters";
import { Trash, Minus, Plus } from "lucide-react";

export default function Cart() {
  const {
    items,
    getTotalItems,
    getTotalPrice,
    removeItem,
    clearCart,
    updateQuantity,
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
        🛒 Meu Carrinho
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-600 text-center">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6 max-h-96 overflow-y-auto pr-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-1 sm:grid-cols-12 items-center py-4 gap-4"
              >
                <div className="flex justify-center sm:col-span-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="rounded-md object-cover"
                  />
                </div>

                <div className="sm:col-span-5 text-center sm:text-left">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    R$ {formatMoneyBrl(item.price)} cada
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 sm:col-span-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-center sm:justify-end sm:col-span-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash className="text-red-600 h-5 w-5" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-gray-200 pt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-semibold text-xl mb-4 text-center sm:text-left gap-2">
              <span>Total ({getTotalItems()} itens):</span>
              <span className="text-primary">
                R$ {formatMoneyBrl(getTotalPrice())}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <Button
                variant="outline"
                className="sm:w-auto w-full"
                onClick={clearCart}
              >
                Limpar Carrinho
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 sm:w-auto w-full">
                Finalizar Compra
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
