import { Component } from '@angular/core';
import {
  MatTableModule
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatIconButton],
  templateUrl: './view-orders.component.html',
  styleUrl: "./view-orders.component.css"
})
export class ViewOrdersComponent {
  dataSource: Order[] = [
    {id: "1", orderName: 'Order 1', quantity: 5, unitPrice: 10 },
    {id: "2", orderName: 'Order 2', quantity: 3, unitPrice: 20 },
    {id: "3", orderName: 'Order 3', quantity: 8, unitPrice: 15 }
  ];

  displayedColumns: string[] = ['id', 'orderName', 'quantity', 'unitPrice', 'actions'];

  deleteOrder(order: any) {
    // Здесь добавьте логику для удаления заказа
    console.log('Order deleted:', order);
  }
}
