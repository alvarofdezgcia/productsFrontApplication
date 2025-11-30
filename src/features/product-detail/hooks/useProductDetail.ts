import { useState, useEffect, useMemo } from 'react';
import { ProductDetail } from '../../../core/product/domain/Product';
import { GetProductDetail } from '../../../core/product/application/GetProductDetail';
import { ApiProductRepository } from '../../../core/product/infrastructure/ApiProductRepository';
import { AddToCart } from '../../../core/cart/application/AddToCart';
import { ApiCartRepository } from '../../../core/cart/infrastructure/ApiCartRepository';
import { useCart } from '../../../app/context/CartContext';

export const useProductDetail = (id: string | undefined) => {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setCount } = useCart();

  const productRepository = useMemo(() => new ApiProductRepository(), []);
  const getProductDetail = useMemo(
    () => new GetProductDetail(productRepository),
    [productRepository],
  );

  const cartRepository = useMemo(() => new ApiCartRepository(), []);
  const addToCart = useMemo(() => new AddToCart(cartRepository), [cartRepository]);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductDetail.execute(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, getProductDetail]);

  const handleAddToCart = async (colorCode: number, storageCode: number) => {
    if (!product) return;
    try {
      await addToCart.execute({
        id: product.id,
        colorCode,
        storageCode,
      });
      // Increment the cart count instead of replacing with API response
      setCount((prevCount) => prevCount + 1);
      alert('Product added to cart!');
    } catch (err) {
      alert('Failed to add to cart');
    }
  };

  return {
    product,
    loading,
    error,
    handleAddToCart,
  };
};
