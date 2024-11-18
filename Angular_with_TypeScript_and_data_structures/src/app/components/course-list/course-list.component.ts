import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  course: string[] = ['BSIT'];
  newCourse: string = '';

  addCourse() {
    if (this.newCourse.trim()) {
      this.course.push(this.newCourse);
      this.newCourse = '';
    }
  }

  deleteCourse(course: string) {
    this.course = this.course.filter(f => f !== course);
  }
}
