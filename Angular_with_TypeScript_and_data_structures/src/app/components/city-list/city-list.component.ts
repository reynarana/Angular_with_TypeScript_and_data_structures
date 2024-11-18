import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
})
export class CityListComponent {
  city: string[] = ['Caloocan City'];
  newCity: string = '';

  addCity() {
    if (this.newCity.trim()) {
      this.city.push(this.newCity);
      this.newCity = '';
    }
  }

  deleteCity(city: string) {
    this.city = this.city.filter(c => c !== city);
  }
}
