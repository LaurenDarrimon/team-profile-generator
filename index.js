// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//require js files in lib directory 
const Employee = require("./lib/Employee");  
//const Engineer  = require("./lib/Engineer"); 
//const Manager  = require("./lib/Manager");
//const Intern  = require("./lib/Intern");

//require template helper codes files 


const employee = new Employee();



// Create a function to initialize app
function init() {

    inquirer
     //prompt user for questions 

    .prompt(employee.questions) 

    .then((response) => {  //only after we get prompts, then 
        console.log(response);
  
        //const { role } = response; //object destructuring to pull out role name 
        
    });
}


init();  // Function call to initialize app

//writeToFile(response); 