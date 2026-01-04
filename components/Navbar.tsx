import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md">
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg font-bold text-xl">
              M
            </div>
            <span className="hidden md:block font-bold text-lg tracking-tight text-slate-900">Modern Shop</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-black transition-colors">חנות</Link>
          <Link to="/" className="hover:text-black transition-colors">חדש באתר</Link>
          <Link to="/" className="hover:text-black transition-colors">מותגים</Link>
          <Link to="/" className="hover:text-black transition-colors">מבצעים</Link>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 left-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform -translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}