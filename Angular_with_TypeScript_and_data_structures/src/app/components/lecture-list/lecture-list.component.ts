import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent {

  lectures: { id: number; duration: string; course: string; day: string; year: number; teacher: string }[] = [
    { id: 1, duration: '3 Hours', course: 'SIA 2', day: 'Saturday', year: 2024, teacher: 'Mr. Jose Gayares III' },
  ];

  newDuration: string = "";
  newCourse: string = "";
  newDay: string = "";
  newYear: number = 2024;
  newTeacher: string = "";
  nextId: number = 3;

  addLecture() {
    if (
      this.newDuration.trim() &&
      this.newCourse.trim() &&
      this.newDay.trim() &&
      this.newYear >= 2024 &&
      this.newTeacher.trim()
    ) {
      this.lectures.push({ 
        id: this.nextId,
        duration: this.newDuration, 
        course: this.newCourse, 
        day: this.newDay, 
        year: this.newYear, 
        teacher: this.newTeacher 
      });
      this.nextId++;
      this.resetInputs();
    }
  }

  deleteLecture(lecture: { id: number }) {
    this.lectures = this.lectures.filter(l => l.id !== lecture.id);
  }

  resetInputs() {
    this.newDuration = "";
    this.newCourse = "";
    this.newDay = "";
    this.newYear = 2024;
    this.newTeacher = "";
  }
}
