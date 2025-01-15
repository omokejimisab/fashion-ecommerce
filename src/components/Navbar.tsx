import React from 'react';
import { Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Men</a>
          <a href="#" className="hover:text-gray-300">Women</a>
          <a href="#" className="hover:text-gray-300">Accessories</a>
          <a href="#" className="hover:text-gray-300">Sale</a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white px-4 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </nav>
  );
}