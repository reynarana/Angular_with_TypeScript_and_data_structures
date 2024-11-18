import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
})
export class SportsListComponent {
  sports: string[] = ['Badminton'];
  newSports: string = '';

  addSports() {
    if (this.newSports.trim()) {
      this.sports.push(this.newSports);
      this.newSports = '';
    }
  }

  deleteSport(sports: string) {
    this.sports = this.sports.filter(s => s !== sports);
  }
}