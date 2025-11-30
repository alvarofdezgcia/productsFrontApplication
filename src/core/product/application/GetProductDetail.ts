import { ProductDetail } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

export class GetProductDetail {
  constructor(private repository: ProductRepository) {}

  async execute(id: string): Promise<ProductDetail> {
    return this.repository.getProduct(id);
  }
}
