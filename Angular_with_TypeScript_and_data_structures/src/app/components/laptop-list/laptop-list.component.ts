import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent {
  laptops: string[] = ["Acer Aspire A315-24P"];
  newLaptop: string = '';

  addLaptop() {
    if (this.newLaptop.trim()) {
      this.laptops.push(this.newLaptop);
      this.newLaptop = '';
    }
  }

  deleteLaptop(item: string) {
    this.laptops = this.laptops.filter(l => l !== item);
  }
}
