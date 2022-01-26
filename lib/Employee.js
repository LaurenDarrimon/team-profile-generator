//const Engineer  = require("./Engineer");
//const Manager  = require("./Manager");
//const Intern  = require("./Intern");
const inquirer = require("inquirer");

class Employee {
    constructor(){

        //ATTRIBUTES of employee
        //array of employee questions 
        this.questions = [  
            {
                type: 'list',
                message: 'What type of team member would you like to add?',
                name: 'role',
                choices: [ "Manager", "Engineer", "Intern", "Done"],
            },
        ];
        
    }

    //methods belonging to employee
}


module.exports = Employee;