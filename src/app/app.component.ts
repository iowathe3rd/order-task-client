import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OrderService} from "../services/orders.service";
import {ViewOrdersComponent} from "./view-orders/view-orders.component";
import {AddOrderComponent} from "./add-order/add-order.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ViewOrdersComponent,
    AddOrderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Orderly';

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.orderService.getAllOrders()
      .subscribe(orders => this.orders = orders);
  }
}
