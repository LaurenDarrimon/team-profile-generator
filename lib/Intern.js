const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Intern extends Employee {
    constructor(fullName, id, email){
        //ATTRIBUTES of intern
        super (fullName, id, email); //call up attributes of parent class, employee         
        this.school = '';
        this.role = "Intern"
    }

     //METHODS belonging to intern 
    getSchool(){
        return this.school; 
    };

    getRole() {
         return this.role;            
    };
  
}

module.exports = Intern;