import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent {
  animal: string[] = ['Dog'];
  newAnimal: string = '';

  addFruit() {
    if (this.newAnimal.trim()) {
      this.animal.push(this.newAnimal);
      this.newAnimal = '';
    }
  }

  deleteFruit(animal: string) {
    this.animal = this.animal.filter(a => a !== animal);
  }
}
