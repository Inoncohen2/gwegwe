import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../utils/data';
import ProductCard from './ProductCard';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductList({ onAddToCart }: ProductListProps) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          חדש באתר
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          גלה את הקולקציה החדשה שלנו של מוצרי פרימיום המעוצבים לסגנון חיים מודרני.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}