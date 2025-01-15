import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => addToCart(product)}
            className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
          <button className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
            <Eye size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-2 capitalize">{product.category}</p>
      </div>
    </div>
  );
}