// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
  constructor(getGitHub){
    super(getName, getRole, getID, getEmail)
    this.getGitHub = getGitHub;
    }
    addComment(comment) {
      this.comments.push(comment);
    }
}