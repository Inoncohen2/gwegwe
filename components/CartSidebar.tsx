import React from 'react';
import { X, Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, delta: number) => void;
}

export default function CartSidebar({ isOpen, onClose, cartItems, onRemove, onUpdateQty }: CartSidebarProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">עגלת קניות ({cartItems.length})</h2>
            <button 
              onClick={onClose}
              className="p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                  <X className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-500">העגלה שלך ריקה.</p>
                <button 
                  onClick={onClose}
                  className="text-sm font-semibold text-black underline underline-offset-4 hover:text-slate-600"
                >
                  המשך בקניות
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-slate-900 line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg">
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="p-1 hover:bg-slate-50 text-slate-600 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="p-1 hover:bg-slate-50 text-slate-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-slate-900">₪{(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-slate-100 px-6 py-6 bg-slate-50">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-slate-500">
                  <span>סכום ביניים</span>
                  <span>₪{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>משלוח</span>
                  <span>חינם</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 pt-3 border-t border-slate-200">
                  <span>סה״כ לתשלום</span>
                  <span>₪{subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                לקופה <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}