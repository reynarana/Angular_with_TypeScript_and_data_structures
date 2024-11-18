import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
})
export class FoodMenuComponent {
  food: string[] = ['Chicken'];
  newFood: string = '';

  addFoods() {
    if (this.newFood.trim()) {
      this.food.push(this.newFood);
      this.newFood = '';
    }
  }

  deleteFoods(food: string) {
    this.food = this.food.filter(f => f !== food);
  }
}
