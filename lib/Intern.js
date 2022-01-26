const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Intern extends Employee {
    constructor(){

        //call up attributes of parent class, employee 
        super ();

         //ATTRIBUTES of intern

        //interns's questions 
        this.internQuestions = [  
            {
                type: 'input',
                message: 'Enter engineer github username:',
                name: 'gitUser',
            },
        ];
    }

    //METHODS belonging to engineer

    
}

module.exports = Intern;