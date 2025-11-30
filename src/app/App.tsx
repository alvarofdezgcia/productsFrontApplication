import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainLayout from '../ui/layout/MainLayout';
import ProductListPage from '../features/product-list/pages/ProductListPage';
import ProductDetailPage from '../features/product-detail/pages/ProductDetailPage';
import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </CartProvider>
  );
};

export default App;
