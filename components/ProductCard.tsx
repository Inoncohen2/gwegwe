import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block overflow-hidden aspect-[4/3] bg-slate-100 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      
      <button 
        onClick={(e) => {
          e.preventDefault();
          onAddToCart(product);
        }}
        className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur text-black rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white z-10"
        aria-label="הוסף לעגלה"
      >
        <Plus className="w-5 h-5" />
      </button>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            ₪{product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}