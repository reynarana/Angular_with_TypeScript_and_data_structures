import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent {

  furnitureItems: string[] = ["Bed"];
  newFurniture: string = ''; 

  addFurniture() {
    if (this.newFurniture.trim()) {
      this.furnitureItems.push(this.newFurniture);
      this.resetInputs();
    }
  }

  deleteFurniture(furniture: string) {
    this.furnitureItems = this.furnitureItems.filter(item => item !== furniture);
  }

  resetInputs() {
    this.newFurniture = '';
  }
}
