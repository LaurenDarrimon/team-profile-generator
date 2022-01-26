const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Engineer extends Employee {
    constructor(fullName, id, email){
       //ATTRIBUTES of engineer
       super (fullName, id, email); //call up attributes of parent class, employee 
       this.gitHub = ''; 
       this.role = "Engineer"
    }

    //METHODS belonging to engineer
    getGitHub(){
        return this.gitHub; 
    };

    getRole(){
        return this.role; 
    };

};

module.exports = Engineer;