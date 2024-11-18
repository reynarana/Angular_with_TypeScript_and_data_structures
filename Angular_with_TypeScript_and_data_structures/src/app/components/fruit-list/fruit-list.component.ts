import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
})
export class FruitListComponent {
  fruits: string[] = ['PineApple'];
  newFruit: string = '';

  addFruit() {
    if (this.newFruit.trim()) {
      this.fruits.push(this.newFruit);
      this.newFruit = '';
    }
  }

  deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
