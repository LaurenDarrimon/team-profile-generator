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
        inquirer
        //prompt user for name 
        .prompt(
            [
                {
                    type: 'input',
                    message: 'Team Member Name',
                    name: 'fullName',
                },
            ]) 
        .then((response) => {  //only after we get prompts, then 

           const { fullName } = response; //object destructuring to pull out role name from repsonse
           this.fullName = fullName; //store the input name in the new instance of the object 
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
    
           const { id } = response; //object destructuring to pull out id from repsonse
           this.id = id; //store the input id in the new instance of the object 
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

           const { email } = response; //object destructuring to pull out email from repsonse
           this.email = email; //store the input email in the new instance of the object 
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
           const { role } = response; //object destructuring to pull the next role out from the repsonse

            return role; 
        });
    };

   
  
}


module.exports = Employee;