declare interface Order {
  id: string;
  orderName: string;
  quantity: number;
  unitPrice: number;
}

declare interface CreateOrderInput extends Omit<Order, "id"> {}
