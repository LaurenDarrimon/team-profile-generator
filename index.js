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
];

const managerQuestions = 
[
    {
        type: 'input',
        message: 'Enter manager office number:',
        name: 'office',
    },
];

const engineerQuestions = 
[
    {
        type: 'input',
        message: 'Enter engineer github username:',
        name: 'gitUser',
    },
];

const internQuestions = 
[
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
  
        const { role } = response; //object destructuring to pull out role name 

        //write conditionals that determine which set of follow up questions to ask 
        if (role === "Manager"){
            inquirer
                .prompt(managerQuestions)
                .then ((managerResponse) => {
                    console.log(managerResponse);
                });
        }
        if (role === "Engineer"){
            inquirer
                .prompt(engineerQuestions)
                .then ((engineerResponse) => {
                    console.log(engineerResponse);
                });
        }
        if (role === "Intern"){
            inquirer
                .prompt(internQuestions)
                .then ((internResponse) => {
                    console.log(internResponse);
                });
        }
        if (role === "Done"){
            console.log("the code is done, run write file fxn");
               
        }

        //call fxn to write the file with paramenters of the filename 
        //eventually we'll pass the returned HTML data from on other js files 
        //writeToFile(response); 
    });
}

init();  // Function call to initialize app