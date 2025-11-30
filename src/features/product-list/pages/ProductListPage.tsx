import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductItem from '../components/ProductItem';
import SearchBar from '../../../ui/components/SearchBar/SearchBar';
import './ProductListPage.css';

const ProductListPage: React.FC = () => {
  const { products, loading, error, setSearchQuery } = useProducts();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-list-page">
      <div className="search-section">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && <div className="no-results">No products found</div>}
    </div>
  );
};

export default ProductListPage;
