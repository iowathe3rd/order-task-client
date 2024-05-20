import {Component, OnInit} from '@angular/core';
import {
  MatTableModule
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {OrderService} from "../../services/orders.service";


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatIconButton],
  templateUrl: './view-orders.component.html',
  styleUrl: "./view-orders.component.css"
})
export class ViewOrdersComponent implements OnInit{
  constructor(private orderService: OrderService) {}

  dataSource: Order[] = [];

  ngOnInit(): void {
    this.loadOrders();
  }

  displayedColumns: string[] = ['id', 'orderName', 'quantity', 'unitPrice', 'actions'];

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe(orders => {
      this.dataSource = orders;
    });
  }

  deleteOrder(order: Order): void {
    this.orderService.deleteOrder(order.id).subscribe(() => {
      this.dataSource = this.dataSource.filter(o => o.id !== order.id);
    });
  }

}
