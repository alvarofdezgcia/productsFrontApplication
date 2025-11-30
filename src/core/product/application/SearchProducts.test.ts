import { SearchProducts } from './SearchProducts';
import { Product } from '../domain/Product';

describe('SearchProducts', () => {
  const products: Product[] = [
    { id: '1', brand: 'Acer', model: 'Iconia Talk S', price: '170', imgUrl: '' },
    { id: '2', brand: 'Apple', model: 'iPhone X', price: '900', imgUrl: '' },
    { id: '3', brand: 'Samsung', model: 'Galaxy S9', price: '800', imgUrl: '' },
  ];

  const searchProducts = new SearchProducts();

  it('should return all products if query is empty', () => {
    const result = searchProducts.execute(products, '');
    expect(result).toEqual(products);
  });

  it('should filter by brand', () => {
    const result = searchProducts.execute(products, 'Acer');
    expect(result).toHaveLength(1);
    expect(result[0].brand).toBe('Acer');
  });

  it('should filter by model', () => {
    const result = searchProducts.execute(products, 'Galaxy');
    expect(result).toHaveLength(1);
    expect(result[0].model).toBe('Galaxy S9');
  });

  it('should be case insensitive', () => {
    const result = searchProducts.execute(products, 'iphone');
    expect(result).toHaveLength(1);
    expect(result[0].model).toBe('iPhone X');
  });

  it('should return empty array if no match', () => {
    const result = searchProducts.execute(products, 'Nokia');
    expect(result).toHaveLength(0);
  });
});
