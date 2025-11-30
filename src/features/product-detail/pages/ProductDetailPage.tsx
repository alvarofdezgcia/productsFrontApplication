import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductDetail } from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import ProductActions from '../components/ProductActions';
import './ProductDetailPage.css';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error, handleAddToCart } = useProductDetail(id);

  if (loading) return <div className="loading">Loading...</div>;
  if (error || !product) return <div className="error">{error || 'Product not found'}</div>;

  return (
    <div className="product-detail-page">
      <div className="back-link">
        <Link to="/">← Back to list</Link>
      </div>
      <div className="product-detail-content">
        <div className="product-image-section">
          <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
        </div>
        <div className="product-data-section">
          <div className="product-header">
            <h1>
              {product.brand} {product.model}
            </h1>
            <p className="price">{product.price} €</p>
          </div>
          <ProductActions product={product} onAddToCart={handleAddToCart} />
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
