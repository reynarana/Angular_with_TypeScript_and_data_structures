import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
})
export class GroceryListComponent {
  grocery: string[] = ['Frozen Food'];
  newGrocery: string = '';

  addGrocery() {
    if (this.newGrocery.trim()) {
      this.grocery.push(this.newGrocery);
      this.newGrocery = '';
    }
  }

  deleteGrocery(grocery: string) {
    this.grocery = this.grocery.filter(g => g !== grocery);
  }
}
