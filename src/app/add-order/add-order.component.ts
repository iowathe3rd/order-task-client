import {Component, HostListener, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddOrderDialogComponent } from "../add-order-dialog/add-order-dialog.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {OrderService} from "../../services/orders.service";

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {
  orderName: string = "";
  quantity: number = 0;
  unitPrice: number = 0;

  constructor(private orderService: OrderService, private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOrderDialogComponent, {
      width: '400px',
      data: { orderName: this.orderName, quantity: this.quantity, unitPrice: this.unitPrice }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  addOrder(order: CreateOrderInput): void {
    this.orderService.createOrder(order).subscribe(() => {
      console.log('Order added successfully');
    });
  }

  onSubmit() {
    const newOrder: CreateOrderInput = {
      orderName: this.orderName,
      quantity: this.quantity,
      unitPrice: this.unitPrice
    };
    this.addOrder(newOrder);
  }
}
