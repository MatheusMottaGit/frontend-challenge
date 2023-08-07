'use client'
import { Product } from "@/hooks/useFetch";
import { ReactNode, createContext, useState } from "react";

interface Cart {
  cart: Product[]
  addToCart: (value: Product[]) => void
}

export const CartContext = createContext({} as Cart)

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [cart, setCart] = useState<Product[]>([])

  function addToCart(value: Product[]) {
    localStorage.setItem('cart', JSON.stringify(value))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}