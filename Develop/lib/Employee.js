// Write code to define and export the Employee class
function Employee(name, id, email,) {
    // const employee = new Employee('Employee')
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
    this.getName = function(){
        return this.name
    }
    this.getId = function(){
        return this.id
    }
    this.getEmail = function(){
        return this.email
    }
    this.getRole = function(){
        return this.role
    }
}
module.exports = Employee;


 