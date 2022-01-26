const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Manager extends Employee {
    constructor(fullName, id, email){

        //ATTRIBUTES of manager
        super (fullName, id, email);  //call up attributes of parent class, employee 
        this.office = ""; 
        this.role = "Manager"
    }

    //METHODS belonging to manager
    getOffice(){
        return this.office; 
    };

    getRole(){
        return this.role; 
    };
}


module.exports = Manager;