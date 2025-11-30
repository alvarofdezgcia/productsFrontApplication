import React, { useState, useEffect } from 'react';
import { ProductDetail } from '../../../core/product/domain/Product';
import './ProductActions.css';

interface ProductActionsProps {
  product: ProductDetail;
  onAddToCart: (colorCode: number, storageCode: number) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<number | null>(null);

  useEffect(() => {
    if (product.options.colors.length === 1) {
      setSelectedColor(product.options.colors[0].code);
    }
    if (product.options.storages.length === 1) {
      setSelectedStorage(product.options.storages[0].code);
    }
  }, [product]);

  const handleAdd = () => {
    if (selectedColor !== null && selectedStorage !== null) {
      onAddToCart(selectedColor, selectedStorage);
    }
  };

  const isButtonDisabled = selectedColor === null || selectedStorage === null;

  return (
    <div className="product-actions">
      <div className="action-group">
        <label>Storage:</label>
        <div className="options">
          {product.options.storages.map((storage) => (
            <button
              key={storage.code}
              className={`option-btn ${selectedStorage === storage.code ? 'active' : ''}`}
              onClick={() => setSelectedStorage(storage.code)}
            >
              {storage.name}
            </button>
          ))}
        </div>
      </div>

      <div className="action-group">
        <label>Color:</label>
        <div className="options">
          {product.options.colors.map((color) => (
            <button
              key={color.code}
              className={`option-btn ${selectedColor === color.code ? 'active' : ''}`}
              onClick={() => setSelectedColor(color.code)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      <button className="add-to-cart-btn" onClick={handleAdd} disabled={isButtonDisabled}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductActions;
