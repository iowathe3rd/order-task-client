import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-add-order-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-order-dialog.component.html',
  styleUrls: ['./add-order-dialog.component.css']
})
export class AddOrderDialogComponent {
  orderName: string = "";
  quantity: string = "";
  unitPrice: string = "";
  constructor(
    public dialogRef: MatDialogRef<AddOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Логика отправки данных на сервер
    console.log('Order submitted:', this.data.orderName, this.data.quantity, this.data.unitPrice);
    this.dialogRef.close();
  }
}
