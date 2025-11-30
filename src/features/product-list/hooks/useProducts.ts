import { useState, useEffect, useMemo } from 'react';
import { Product } from '../../../core/product/domain/Product';
import { GetProductList } from '../../../core/product/application/GetProductList';
import { SearchProducts } from '../../../core/product/application/SearchProducts';
import { ApiProductRepository } from '../../../core/product/infrastructure/ApiProductRepository';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const repository = useMemo(() => new ApiProductRepository(), []);
  const getProductList = useMemo(() => new GetProductList(repository), [repository]);
  const searchProducts = useMemo(() => new SearchProducts(), []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductList.execute();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [getProductList]);

  const filteredProducts = useMemo(() => {
    return searchProducts.execute(products, searchQuery);
  }, [products, searchQuery, searchProducts]);

  return {
    products: filteredProducts,
    loading,
    error,
    setSearchQuery,
  };
};
