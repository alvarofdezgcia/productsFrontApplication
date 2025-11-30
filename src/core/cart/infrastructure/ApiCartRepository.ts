import { CartAddRequest, CartAddResponse } from '../domain/Cart';
import { CartRepository } from '../domain/CartRepository';
import axios from 'axios';

export class ApiCartRepository implements CartRepository {
  private baseUrl = 'https://itx-frontend-test.onrender.com/api';

  async addToCart(request: CartAddRequest): Promise<CartAddResponse> {
    const response = await axios.post<CartAddResponse>(`${this.baseUrl}/cart`, request);
    return response.data;
  }
}
