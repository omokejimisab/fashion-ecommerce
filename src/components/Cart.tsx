import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                
                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 rounded-md hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="w-8 text-center">{item.quantity}</span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-md hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{total >= 100 ? 'Free' : '$10.00'}</p>
            </div>
          </div>
          
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>${(total + (total >= 100 ? 0 : 10)).toFixed(2)}</p>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors mt-6">
            Proceed to Checkout
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Free shipping on orders over $100
          </p>
        </div>
      </div>
    </div>
  );
}