// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//require js files in src directory - template helper codes 


    // Create an array of questions for user input
const questions = 
[  
  
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'role',
        choices: [ "Manager", "Engineer", "Intern", "Done"],
    },
    {
        type: 'input',
        message: 'Enter manager office number:',
        name: 'office',
    },
    {
        type: 'input',
        message: 'Enter engineer github username:',
        name: 'gitUser',
    },
    {
        type: 'input',
        message: 'Enter the school the intern attends:',
        name: 'school',
    },
];




// Create a function to initialize app
function init() {

    inquirer
     //prompt user for questions 

    .prompt(questions) 

    .then((response) => {  //only after we get prompts, then 
        console.log(response);
  
         //object destructuring to pull out role name 

        //call fxn to write the file with paramenters of the filename 
        //eventually we'll pass the returned HTML data from on other js files 
        //writeToFile(response); 
    });
}

init();  // Function call to initialize app