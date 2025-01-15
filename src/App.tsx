import React from 'react';
import { CartProvider } from './context/CartContext';
import { MobileMenu } from './components/MobileMenu';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <Banner />
        <main className="flex-grow">
          <ProductList />
        </main>
        <Footer />
        <MobileMenu />
      </div>
    </CartProvider>
  );
}

export default App;