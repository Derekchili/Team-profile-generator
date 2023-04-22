// Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, 'Intern', id, email,)
        this.school = school;
    
    }
    addComment(comment) {
        this.comments.push(comment);
      }
}
module.exports = Intern;