import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

export class GetProductList {
  constructor(private repository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.repository.getProducts();
  }
}
