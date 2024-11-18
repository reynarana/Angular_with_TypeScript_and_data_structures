import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent {

  students: { name: string; roomNumber: number }[] = [{name: 'Cruz, Reynalyn', roomNumber: 4}];
  newStudentName: string = "";
  newRoomNumber: number = 1;

  addStudent() {
    if (this.newStudentName.trim() && this.newRoomNumber > 0) {
      this.students.push({ name: this.newStudentName, roomNumber: this.newRoomNumber });
      this.newStudentName = "";
      this.newRoomNumber = 1;
    }
  }

  deleteStudent(student: { name: string; roomNumber: number }) {
    this.students = this.students.filter(s => s.name !== student.name);
  }
}
