# 🍔 Carrinho de Compras - Lanchonete  

O objetivo é implementar a funcionalidade de um **carrinho de compras** para uma lanchonete, permitindo que os clientes visualizem produtos, adicionem/removam itens e acompanhem o resumo do pedido em tempo real.

---

## 🚀 Tecnologias Utilizadas
- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📦 Funcionalidades
- ✅ Listagem de produtos com **imagem, nome e preço**

- ✅ Adicionar produtos ao carrinho

- ✅ Aumentar/diminuir quantidade de cada item

- ✅ Resumo do pedido atualizado em tempo real

- ✅ Exibição do valor total acumulado

---

## 📂 Estrutura do Projeto

/app/data/products → API que retorna os produtos

layout.tsx → Layout global

page.tsx → Página principal

/components

ProductCard.tsx → Card de produto

Cart → Carrinho de compras


/context

CartContext.tsx → Contexto global do carrinho

/public/img → Imagens dos produtos

---

## ⚙️ Como Rodar Localmente

1. Clone o repositório:

git clone https://github.com/michele-oliveira/restroapp
   
3. Instale as dependências:

npm install

3. Rode o servidor de desenvolvimento:

npm run dev

4. Abra no navegador:

http://localhost:3000

---

## 🛒 Demonstração
Produtos
Os produtos estão definidos em /src/data/products e utilizam imagens disponíveis em /public/img.

Exemplo de produto:

{

  "photo": "/img/big-mac.png",
  
  "name": "Big Mac",
  
  "price": 5.99,
  
  "active": false,
  
  "quantity": 1
  
}

Interface

Tela principal com produtos em grid

Cada card possui preço, nome e controles de quantidade

Carrinho ao lado com resumo em tempo real

## Autor

Desenvolvido por Michele Oliveira
