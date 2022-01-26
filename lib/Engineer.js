const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Engineer extends Employee {
    constructor(){
       //ATTRIBUTES of engineer
       super (fullName, id, email, role); //call up attributes of parent class, employee 

       

        //engineer's questions 
        this.engineerQuestions = [  
            {
                type: 'input',
                message: 'Enter engineer github username:',
                name: 'gitUser',
            },
        ];
    }

    //METHODS belonging to engineer

    
}

module.exports = Engineer;