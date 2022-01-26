//const Engineer  = require("./Engineer");
//const Manager  = require("./Manager");
//const Intern  = require("./Intern");
const inquirer = require("inquirer");

class Employee {
    constructor(){
        //ATTRIBUTES of employee
        //array of employee questions 
        this.fullName = '';
        this.id = ''; 
        this.email = ''; 
    }

    //METHODS belonging to employee
    getName(){
        inquirer
        //prompt user for name 
        .prompt(
            [
                {
                    type: 'input',
                    message: 'Team Member Name',
                    name: 'fullNamer',
                },
            ]) 
        .then((response) => {  //only after we get prompts, then 

           const { nameInput } = response; //object destructuring to pull out role name from repsonse
           this.fullName = nameInput; //store the name in the new instance of the object 
           this.getID();
        });
    };


    getID(){
        inquirer //prompt user for id
        .prompt(
            [
                {
                    type: 'input',
                    message: 'Employee ID',
                    name: 'id',
                },
            ]) 
        .then((response) => {  //only after we get user response, then 
    
           const { idInput } = response; //object destructuring to pull out id from repsonse
           this.id = idInput; //store the id in the new instance of the object 
           this.getEmail();
        });
    };

    getEmail() {
        inquirer //prompt user for email
        .prompt(
            [
                {
                    type: 'input',
                    message: 'Email Address',
                    name: 'email',
                },
            ]) 
        .then((response) => {  //only after we get user response, then 

           const { emailInput } = response; //object destructuring to pull out email from repsonse
           this.email = emailInput; //store the email in the new instance of the object 
           this.getRole();
        });
    };

    getRole() {
        inquirer  //prompt user for the next role
        .prompt(
            [
                {
                    type: 'list',
                    message: 'What type of team member would you like to add?',
                    name: 'role',
                    choices: [ "Manager", "Engineer", "Intern", "Done"],
                },
            ]) 
        .then((response) => {  //only after we get user response, then 
           console.log(response);
           const { idInput } = response; //object destructuring to pull out id from repsonse
           this.id = idInput; //store the id in the new instance of the object 
        });
    };
  
}


module.exports = Employee;