import React from 'react';
import { ProductDetail } from '../../../core/product/domain/Product';
import './ProductInfo.css';

interface ProductInfoProps {
    product: ProductDetail;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <div className="product-info-details">
            <h2 className="info-title">Specifications</h2>
            <ul className="info-list">
                <li><strong>Brand:</strong> {product.brand}</li>
                <li><strong>Model:</strong> {product.model}</li>
                <li><strong>Price:</strong> {product.price} €</li>
                <li><strong>CPU:</strong> {product.cpu}</li>
                <li><strong>RAM:</strong> {product.ram}</li>
                <li><strong>OS:</strong> {product.os}</li>
                <li><strong>Display:</strong> {product.displayResolution}</li>
                <li><strong>Battery:</strong> {product.battery}</li>
                <li><strong>Cameras:</strong> {Array.isArray(product.primaryCamera) ? product.primaryCamera.join(', ') : product.primaryCamera} (Primary), {Array.isArray(product.secondaryCmera) ? product.secondaryCmera.join(', ') : product.secondaryCmera} (Secondary)</li>
                <li><strong>Dimensions:</strong> {product.dimentions}</li>
                <li><strong>Weight:</strong> {product.weight}</li>
            </ul>
        </div>
    );
};

export default ProductInfo;
