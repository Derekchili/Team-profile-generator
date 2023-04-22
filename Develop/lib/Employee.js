// Write code to define and export the Employee class
class Employee {
    constructor(name, getRole, id, email) {
        this.name = name;
        this.getRole =getRole;
        this.id = id;
        this.email = email;
        
    } 
}
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