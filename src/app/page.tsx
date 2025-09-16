"use client";

import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, Clock, Shield, Truck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <Header />

        <main>
          <section className="relative py-20 px-4">
            <div className="absolute inset-0">
              <Image
                src="/img/restaurante.jpg"
                alt="Restaurante"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative container mx-auto text-center text-white">
              <p className="text-xl mb-8 max-w-2xl mx-auto text-bold">
                Descubra os melhores sabores com a conveniência de pedir online.
                Qualidade, rapidez e sabor em cada pedido.
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
                  <p className="text-gray-600">Entregamos em até 30 minutos</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Segurança</h3>
                  <p className="text-gray-600">Pagamento 100% seguro</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Qualidade</h3>
                  <p className="text-gray-600">
                    Ingredientes frescos e selecionados
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Frete Grátis</h3>
                  <p className="text-gray-600">A partir de R$ 30,00</p>
                </div>
              </div>
            </div>
          </section>

          <section id="menu" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nosso Cardápio
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Sabores únicos preparados com ingredientes frescos e muito
                  amor
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Sobre o RestroApp
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Somos uma plataforma inovadora que conecta você aos melhores
                  restaurantes da sua região. Com tecnologia de ponta e um
                  compromisso com a qualidade, garantimos uma experiência
                  gastronômica excepcional a cada pedido.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      1000+
                    </div>
                    <div className="text-gray-600">Pedidos Entregues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-gray-600">Restaurantes Parceiros</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      4.9
                    </div>
                    <div className="text-gray-600">Avaliação Média</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
