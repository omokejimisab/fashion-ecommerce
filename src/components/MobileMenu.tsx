import React from 'react';
import { Home, Search, ShoppingBag, Heart, User } from 'lucide-react';

export function MobileMenu() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
      <div className="grid grid-cols-5">
        <button className="flex flex-col items-center justify-center p-4 hover:bg-gray-50">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 hover:bg-gray-50">
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 hover:bg-gray-50">
          <ShoppingBag size={24} />
          <span className="text-xs mt-1">Cart</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 hover:bg-gray-50">
          <Heart size={24} />
          <span className="text-xs mt-1">Wishlist</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 hover:bg-gray-50">
          <User size={24} />
          <span className="text-xs mt-1">Account</span>
        </button>
      </div>
    </nav>
  );
}