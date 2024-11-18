import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {

  items: { id: number; name: string; price: number; quantity: number }[] = [
    { id: 1, name: 'Laptop', price: 30000.99, quantity: 1 },
  ];

  newItemName: string = "";
  newItemPrice: number = 0;
  newItemQuantity: number = 1;
  nextId: number = 2;

  addItem() {
    if (this.newItemName.trim() && this.newItemPrice > 0 && this.newItemQuantity > 0) {
      this.items.push({
        id: this.nextId,
        name: this.newItemName,
        price: this.newItemPrice,
        quantity: this.newItemQuantity
      });
      this.newItemName = "";
      this.newItemPrice = 0;
      this.newItemQuantity = 1;
      this.nextId++;
    }
  }

  deleteItem(item: { id: number; name: string; price: number; quantity: number }) {
    this.items = this.items.filter(i => i.id !== item.id);
  }
}
