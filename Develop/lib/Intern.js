// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(getSchool) {
        super(getName, getRole, getID, getEmail,)
        this.getSchool = getSchool;
    
    }
    addComment(comment) {
        this.comments.push(comment);
      }
}