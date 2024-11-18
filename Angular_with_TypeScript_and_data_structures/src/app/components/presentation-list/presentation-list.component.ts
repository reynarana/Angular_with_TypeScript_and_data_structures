import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent {
  presentationItems: string[] = ["Mental Health Awareness and Its Importance"];

  newPresentation: string = '';

  addPresentation() {
    if (this.newPresentation.trim()) {
      this.presentationItems.push(this.newPresentation);
      this.resetInputs();
    }
  }

  deletePresentation(presentation: string) {
    this.presentationItems = this.presentationItems.filter(item => item !== presentation);
  }

  resetInputs() {
    this.newPresentation = '';
  }
}
