import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export function ProductList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => 
        (category === 'all' || product.category === category) &&
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        return a.name.localeCompare(b.name);
      });
  }, [search, category, sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-8">
        <div className="relative flex-grow max-w-xl">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
        >
          <SlidersHorizontal size={20} />
          Filters
        </button>
        
        <div className={`lg:flex gap-4 w-full lg:w-auto ${showFilters ? 'block' : 'hidden'}`}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full lg:w-auto px-4 py-2 border rounded-lg capitalize"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="capitalize">{cat}</option>
            ))}
          </select>
          
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full lg:w-auto px-4 py-2 border rounded-lg mt-2 lg:mt-0"
          >
            <option value="name">Sort by Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}