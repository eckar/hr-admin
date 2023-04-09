import EmployeeViewModel from "../viewmodel/EmployeeViewModel";
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
    constructor() {
        this.todoService = new EmployeeViewModel("Employees");
    }
    getAll() {
        const employees = this.todoService.allEmployees();
        console.log(employees);
    }
    getEmployeeById(idssn) {
        const employee = this.todoService.getEmployeeById(idssn);
        console.log(employee);
    }
    submitEmployee(employee) {
        const save = this.todoService.submitEmployee(employee);
        console.log(save);
    }
    updateEmployee(idssn, employee) {
        const update = this.todoService.updateEmployee(idssn, employee);
        console.log(update);
    }
    deleteEmployee(idssn, employee) {
        const deleteEmp = this.todoService.deleteEmployee(idssn, employee);
        console.log(deleteEmp);
    }
}
