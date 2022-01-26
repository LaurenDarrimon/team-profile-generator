//const Engineer  = require("./Engineer");
//const Manager  = require("./Manager");
//const Intern  = require("./Intern");
const inquirer = require("inquirer");

class Employee {
    constructor(fullName, id, email){
        //ATTRIBUTES of employee
        //array of employee questions 
        this.fullName = fullName;
        this.id = id; 
        this.email = email; 
        this.role = `employee`;
    }

    //METHODS belonging to employee
    getName(){ 
        return this.fullName;
    };

    getID(){
        return this.id;
    };
  
    getEmail() {
        return this.email;
    };

    getRole() {
        return role;  
    };

  
}


module.exports = Employee;