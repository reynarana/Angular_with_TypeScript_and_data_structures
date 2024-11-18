import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  eventItems: string[] = ["Bottle Of The Band"];

  newEvent: string = '';

  addEvent() {
    if (this.newEvent.trim()) {
      this.eventItems.push(this.newEvent);
      this.resetInputs();
    }
  }

  deleteEvent(event: string) {
    this.eventItems = this.eventItems.filter(item => item !== event);
  }

  resetInputs() {
    this.newEvent = '';
  }
}
