import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50" dir="rtl">
      <Navbar 
        cartCount={totalItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ProductList onAddToCart={addToCart} />} />
          <Route 
            path="/product/:id" 
            element={<ProductDetails onAddToCart={addToCart} onOpenCart={() => setIsCartOpen(true)} />} 
          />
        </Routes>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Modern Shop. כל הזכויות שמורות.
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
    </div>
  );
}