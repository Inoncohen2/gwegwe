import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../utils/data';

interface ProductDetailsProps {
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
}

export default function ProductDetails({ onAddToCart, onOpenCart }: ProductDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">המוצר לא נמצא</h2>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowRight className="w-4 h-4" /> חזרה לחנות
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors">
        <ArrowRight className="w-4 h-4 ml-2" />
        חזרה לחנות
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-slate-900">
              ₪{product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-slate-500 text-sm mr-2 font-medium">(4.8/5)</span>
            </div>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {product.description || 'חווה איכות פרימיום עם פריט מעוצב בקפידה זה. מותאם לחיים המודרניים, משלב פונקציונליות עם אסתטיקה על-זמנית.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={() => {
                onAddToCart(product);
                onOpenCart();
              }}
              className="flex-1 bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <ShoppingBag className="w-5 h-5" />
              הוסף לעגלה
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg">
                <Truck className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">משלוח חינם</h4>
                <p className="text-xs text-slate-500">בהזמנה מעל ₪300</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg">
                <Shield className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">אחריות לשנתיים</h4>
                <p className="text-xs text-slate-500">כיסוי מלא</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg">
                <Clock className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">משלוח מהיר</h4>
                <p className="text-xs text-slate-500">2-3 ימי עסקים</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}