import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  country: string[] = ['Japan'];
  newCountry: string = '';

  addCountry() {
    if (this.newCountry.trim()) {
      this.country.push(this.newCountry);
      this.newCountry = '';
    }
  }

  deleteCountry(country: string) {
    this.country = this.country.filter(c => c !== country);
  }
}
