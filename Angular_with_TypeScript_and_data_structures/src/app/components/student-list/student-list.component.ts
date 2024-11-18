import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  students: string[] = ['John Doe'];
  newStudent: string = '';

  addStudent() {
    if (this.newStudent.trim()) {
      this.students.push(this.newStudent);
      this.newStudent = '';
    }
  }

  deleteStudent(student: string) {
    this.students = this.students.filter(s => s !== student);
  }
}
