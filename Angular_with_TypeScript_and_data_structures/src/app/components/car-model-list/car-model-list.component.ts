import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
})
export class CarModelListComponent {
  carmodel: string[] = ['Toyota Vios'];
  newCarmodel: string = '';

  addCarmodel() {
    if (this.newCarmodel.trim()) {
      this.carmodel.push(this.newCarmodel);
      this.newCarmodel = '';
    }
  }

  deleteCarmodel(carmodel: string) {
    this.carmodel = this.carmodel.filter(cm => cm !== carmodel);
  }
}
