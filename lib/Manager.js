const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Manager extends Employee {
    constructor(){

        //call up attributes of parent class, employee 
        super ();

        //ATTRIBUTES of manager

        //manager's questions 
        this.managerQuestions = [  
            {
                type: 'input',
                message: 'Manager Name:',
                name: 'managerName',
            },
            {
            type: 'input',
            message: 'Enter manager office number:',
            name: 'office',
            },
        ];
    }

    //METHODS belonging to manager


}


module.exports = Manager;