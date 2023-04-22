// Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHub){
    super(name, 'Engineer', id, email)
    this.gitHub = gitHub;
    }
    addComment(comment) {
      this.comments.push(comment);
    }
}
module.exports = Engineer;