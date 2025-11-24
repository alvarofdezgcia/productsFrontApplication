import { CartAddRequest, CartAddResponse } from './Cart';

export interface CartRepository {
    addToCart(request: CartAddRequest): Promise<CartAddResponse>;
}
