import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu } from 'lucide-react';

export function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button className="lg:hidden">
            <Menu size={24} />
          </button>
          
          <h1 className="text-xl font-bold">Fashion Store</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingBag size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}