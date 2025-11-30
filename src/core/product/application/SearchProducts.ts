import { Product } from '../domain/Product';

export class SearchProducts {
  execute(products: Product[], query: string): Product[] {
    if (!query) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.brand.toLowerCase().includes(lowerQuery) ||
        product.model.toLowerCase().includes(lowerQuery),
    );
  }
}
