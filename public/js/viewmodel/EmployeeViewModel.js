export default class EmployeeViewModel {
    constructor(resourceName) {
        this.resourceName = resourceName;
        this.url =
            "https://gateway.modularis.com/HRDemo/RESTActivityWebService/HRDemo.Example/Employees";
        this.apiKey = "2hKUv5UQSL1CR8RHfLgWbwFdvF9ohC0sBCknm3";
        this.contentType = "application/json;charset=UTF-8";
        this.customerId = "C93F949C-41B8-4C9E-95AA-B030B31F6F3F";
    }
    getEmployeeById(id) {
        const completeUrl = `${this.url}/${id}`;
        fetch(completeUrl, {
            method: "GET",
            headers: {
                "Content-type": this.contentType,
                CustomerID: this.customerId,
                APIKey: this.apiKey,
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    allEmployees() {
        fetch(this.url, {
            method: "GET",
            headers: {
                "Content-type": this.contentType,
                CustomerID: this.customerId,
                APIKey: this.apiKey,
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    submitEmployee(employee) {
        fetch(this.url, {
            method: "POST",
            body: JSON.stringify(employee),
            headers: {
                "Content-type": this.contentType,
                CustomerID: this.customerId,
                APIKey: this.apiKey,
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(employee));
    }
    updateEmployee(id, employee) {
        const updateUrl = `${this.url}/${id}`;
        fetch(updateUrl, {
            method: "PUT",
            body: JSON.stringify(employee),
            headers: {
                "Content-type": this.contentType,
                CustomerID: this.customerId,
                APIKey: this.apiKey,
            },
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    }
    deleteEmployee(id, employee) {
        const completeUrl = `${this.url}/${id}`;
        fetch(completeUrl, {
            method: "DELETE",
            body: JSON.stringify(employee),
            headers: {
                "Content-type": this.contentType,
                CustomerID: this.customerId,
                APIKey: this.apiKey,
            },
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    }
}
