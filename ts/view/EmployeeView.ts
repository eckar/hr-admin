import EmployeeViewModel from "../viewmodel/EmployeeViewModel";
import { Employee } from "../model/Employee";

let employee = {
  EmployeeNo: "empNo",
  EmploymentStartDate: "08-03-2023",
  SSN: 1234,
  PersonID: "1212",
  FirstName: "Juan",
  LastName: "Perez",
  Status: "active",
};

export default class EmployeeView {
  constructor() {}

  todoService = new EmployeeViewModel("Employees");

  getAll() {
    const employees = this.todoService.allEmployees();
    console.log(employees);
  }

  getEmployeeById(idssn: string) {
    const employee = this.todoService.getEmployeeById(idssn);
    console.log(employee);
  }

  submitEmployee(employee: Employee) {
    const save = this.todoService.submitEmployee(employee);
    console.log(save);
  }

  updateEmployee(idssn: string, employee: Employee) {
    const update = this.todoService.updateEmployee(idssn, employee);
    console.log(update);
  }

  deleteEmployee(idssn: string, employee: Employee) {
    const deleteEmp = this.todoService.deleteEmployee(idssn, employee);
    console.log(deleteEmp);
  }
}
