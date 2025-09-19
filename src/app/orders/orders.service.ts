import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
    baseUrl = environment.apiUrl; 
  constructor(private httpClient:HttpClient) {

  }

  getOrdersForUser()
  {
    return this.httpClient.get<IOrder[]>(`${this.baseUrl}/orders`);
  }

  getOrderDetailed(id: number)
  {
    return this.httpClient.get<IOrder>(`${this.baseUrl}/orders/${id}`);
  }
}
