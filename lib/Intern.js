const Employee  = require("./Employee");
const inquirer = require("inquirer");


class Intern extends Employee {
    constructor(){
        //ATTRIBUTES of intern
        super (fullName, id, email, role); //call up attributes of parent class, employee         
        school = '';
    }

     //METHODS belonging to intern 
    getSchool(){
        inquirer   //prompt user for school
        .prompt(
            [
                {
                    type: 'input',
                    message: 'School attending:',
                    name: 'school',
                },
            ]) 
        .then((response) => {  //only after we get prompts, then 

           const { school } = response; //object destructuring to pull out role name from repsonse
           this.school = school; //store the user input school name in the new instance of the object with key school 
           this.getID();
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

              //call the questions method on the specific role. 


           
        });
    };
  
}

module.exports = Intern;