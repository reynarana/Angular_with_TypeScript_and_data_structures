import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specification-list',
  templateUrl: './laptop-specification-list.component.html',
  styleUrls: ['./laptop-specification-list.component.css']
})
export class LaptopSpecificationListComponent {
  laptops: { brand: string; specs: string }[] = [
    { brand: 'Acer Aspire A315-24P', specs: 'Intel Core i3, 16GB RAM, 512GB SSD, Intel Iris Xe, 13.4-inch FHD+' },
  ];

  newLaptopBrand: string = '';
  newLaptopSpecs: string = '';

  addLaptop() {
    if (this.newLaptopBrand.trim() && this.newLaptopSpecs.trim()) {
      this.laptops.push({
        brand: this.newLaptopBrand,
        specs: this.newLaptopSpecs,
      });
      this.resetInputs();
    }
  }

  deleteLaptop(laptop: { brand: string; specs: string }) {
    this.laptops = this.laptops.filter(l => l.brand !== laptop.brand);
  }

  resetInputs() {
    this.newLaptopBrand = '';
    this.newLaptopSpecs = '';
  }
}
