import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
})
export class SoftwareListComponent {
  software: string[] = ['Visual Studio Code'];
  newSoftware: string = '';

  addSoftware() {
    if (this.newSoftware.trim()) {
      this.software.push(this.newSoftware);
      this.newSoftware = '';
    }
  }

  deleteSoftware(software: string) {
    this.software = this.software.filter(s => s !== software);
  }
}
