// Write code to define and export the Employee class
function Employee(name, id, email) {
        // const employee = new Employee('Employee')
        this.name = name;
        this.id = id;
        this.email = email;
        this.getRole = function(){
            return `Name: ${this.name}, ID: ${this.id}, Email: ${this.email},`
        }
    }

// class Employee {
//     constructor(name, getRole, id, email) {
//         this.name = name;
//         this.getRole =getRole;
//         this.id = id;
//         this.email = email;
        
//     } 
// }
module.exports = Employee;

  // getName() {
    //     return this.name;
    // }
    // getId() {
    //     return this.id;
    // }
    // getEmail() {
    //     return this.email;
    // }
    // getRole() {
    //     return 'Employee'
    // }

    // function Employee(name, id, email) {
    //     this.name = name;
    //     this.id = id;
    //     this.email = email;
    //     this.getRole = function(){
    //         return `Name: ${this.name}, ID: ${this.id}, Email: ${this.email}, getRole: ${this.Employee}`
    //     }
    // }