import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {
  employees: string[] = ['John Doe'];
  newEmployee: string = '';

  addEmployee() {
    if (this.newEmployee.trim()) {
      this.employees.push(this.newEmployee);
      this.newEmployee = '';
    }
  }

  deleteEmployee(employee: string) {
    this.employees = this.employees.filter(e => e !== employee);
  }
}
