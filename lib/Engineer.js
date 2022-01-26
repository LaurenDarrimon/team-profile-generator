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
    getGithub(){
        inquirer.prompt(  //prompt user for gitHub
            [
                {
                    type: 'input',
                    message: 'Enter engineer GitHub username:',
                    name: 'gitHub',
                },
            ]) 
        .then((response) => {  //only after we get prompts, then 

        const { gitHub } = response; //object destructuring to pull out role name from repsonse
        this.gitHub = gitHub; //store the user input school name in the new instance of the object with key school 
        return this.gitHub; 
        });
    };

    getRole(){
        return this.role; 
    };

};

module.exports = Engineer;