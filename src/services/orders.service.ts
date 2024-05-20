import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.apiUrl; // Замените на URL вашего API

  constructor(private http: HttpClient) { }

  // Получить список всех заказов
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createOrder(order: CreateOrderInput): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Получить заказ по его ID
  getOrderById(id: string): Observable<Order> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Order>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Удалить заказ по его ID
  deleteOrder(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Обработка ошибок HTTP-запросов
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw new Error(error);
  }
}
