let employee = {
    EmployeeNo: "empNo",
    EmploymentStartDate: "08-03-2023",
    SSN: 1234,
    PersonID: "1212",
    FirstName: "Juan",
    LastName: "Perez",
    Status: "active",
};
export default class EmployeeViewModel {
    getEmployeeById(id) {
        fetch("https://gateway.modularis.com/HRDemo/RESTActivityWebService/HRDemo.Example/Employees" +
            id, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                CustomerID: "C93F949C-41B8-4C9E-95AA-B030B31F6F3F",
                APIKey: "2hKUv5UQSL1CR8RHfLgWbwFdvF9ohC0sBCknm3",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    allEmployees() {
        fetch("https://gateway.modularis.com/HRDemo/RESTActivityWebService/HRDemo.Example/Employees", {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                CustomerID: "C93F949C-41B8-4C9E-95AA-B030B31F6F3F",
                APIKey: "2hKUv5UQSL1CR8RHfLgWbwFdvF9ohC0sBCknm3",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    submitEmployee(employee) {
        fetch("https://gateway.modularis.com/HRDemo/RESTActivityWebService/HRDemo.Example/Employees", {
            method: "POST",
            body: JSON.stringify(employee),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                CustomerID: "C93F949C-41B8-4C9E-95AA-B030B31F6F3F",
                APIKey: "2hKUv5UQSL1CR8RHfLgWbwFdvF9ohC0sBCknm3",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(employee));
    }
    deleteEmployee(id) {
        fetch("https://gateway.modularis.com/HRDemo/RESTActivityWebService/HRDemo.Example/Employees" +
            id, {
            method: "DELETE",
            body: JSON.stringify(employee),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                CustomerID: "C93F949C-41B8-4C9E-95AA-B030B31F6F3F",
                APIKey: "2hKUv5UQSL1CR8RHfLgWbwFdvF9ohC0sBCknm3",
            },
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    }
}
