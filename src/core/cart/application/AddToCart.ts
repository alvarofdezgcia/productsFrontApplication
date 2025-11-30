import { CartAddRequest, CartAddResponse } from '../domain/Cart';
import { CartRepository } from '../domain/CartRepository';

export class AddToCart {
  constructor(private repository: CartRepository) {}

  async execute(request: CartAddRequest): Promise<CartAddResponse> {
    return this.repository.addToCart(request);
  }
}
