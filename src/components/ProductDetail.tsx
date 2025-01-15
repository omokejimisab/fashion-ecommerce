import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
          
          <div className="space-y-4">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            
            <button className="w-full border border-gray-300 py-3 px-6 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Heart size={20} />
              Add to Wishlist
            </button>
          </div>
          
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Category: {product.category}</li>
              <li>Free shipping on orders over $100</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}