import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../core/product/domain/Product';
import './ProductItem.css';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img
            src={product.imgUrl}
            alt={`${product.brand} ${product.model}`}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h3 className="product-brand">{product.brand}</h3>
          <p className="product-model">{product.model}</p>
          <p className="product-price">
            {product.price ? `${product.price} €` : 'Price not available'}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
