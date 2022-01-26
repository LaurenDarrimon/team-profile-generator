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
        inquirer.prompt(  //prompt user for manager
            [
                {
                    type: 'input',
                    message: 'Enter manager office number:',
                    name: 'office',
                },
            ]) 
        .then((response) => {  //only after we get prompts, then 

        const { office } = response; //object destructuring to pull out office from repsonse
        this.office = office; //store the office in obj key 
        return this.office; 
        });
    };

    getRole(){
        return this.role; 
    };
}


module.exports = Manager;