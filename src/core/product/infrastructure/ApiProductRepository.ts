import { Product, ProductDetail } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';
import { LocalStorageCache } from '../../shared/infrastructure/LocalStorageCache';
import axios from 'axios';

export class ApiProductRepository implements ProductRepository {
  private baseUrl = 'https://itx-frontend-test.onrender.com/api';

  async getProducts(): Promise<Product[]> {
    const cacheKey = 'products_list';
    const cached = LocalStorageCache.get<Product[]>(cacheKey);
    if (cached) return cached;

    const response = await axios.get<Product[]>(`${this.baseUrl}/product`);
    const data = response.data;
    LocalStorageCache.set(cacheKey, data);
    return data;
  }

  async getProduct(id: string): Promise<ProductDetail> {
    const cacheKey = `product_${id}`;
    const cached = LocalStorageCache.get<ProductDetail>(cacheKey);
    if (cached) return cached;

    const response = await axios.get<ProductDetail>(`${this.baseUrl}/product/${id}`);
    const data = response.data;
    LocalStorageCache.set(cacheKey, data);
    return data;
  }
}
