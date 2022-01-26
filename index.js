// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const internal = require("stream");

//require js files in lib directory 
const Employee = require("./lib/Employee");  
const Manager = require("./lib/Manager");
const Engineer  = require("./lib/Engineer"); 
const Intern  = require("./lib/Intern");

//require template helper codes files 

const allTeamArray = []; //create empty array of all employees, we will push each completed team member object into. 

// Create arrays of questions for various user inputs
const newManagerQ = [  
    {
        type: 'list',
        message: 'Would you like to add a manager to the project?',
        name: 'managerYN',
        choices: ["Yes", "No"],
    },
];
 
const newRoleQuestions = [  
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'role',
        choices: [ "Manager", "Engineer", "Intern", "Done"],
    },
];

const questions = [  
    {
        type: 'input',
        message: 'Team Member Name',
        name: 'fullName',
    },
    {
        type: 'input',
        message: 'Employee ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email Address',
        name: 'email',
    },
]
   
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
        name: 'gitHub',
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

    inquirer.prompt(newManagerQ).then((response) => {
        const { managerYN } = response;

        if (managerYN === "Yes"){  //ask user if they'd like a new manager. 
            makeManager();   
        } else {
            newRole(response);  
        }

    })    
}

const makeManager = () => {
    inquirer.prompt(questions).then((response) => {
        const manager = new Manager(response.fullName, response.id, response.email);
        
        inquirer.prompt(managerQuestions).then((response) => {

            manager.office = response.office; 
            console.log(manager);
            allTeamArray.push(manager);
            newRole();
        })
    });
}

const makeEngineer = () => {
    inquirer.prompt(questions).then((response) => {
        const engineer = new Engineer(response.fullName, response.id, response.email);
        
        inquirer.prompt(engineerQuestions).then((response) => {

            engineer.gitHUb = response.gitHub; 
            console.log(engineer)
            allTeamArray.push(engineer)
            newRole();
        })
    });
}


const makeIntern = () => {
    inquirer.prompt(questions).then((response) => {
        const intern = new Intern(response.fullName, response.id, response.email);
        
        inquirer.prompt(internQuestions).then((response) => {

            intern.school = response.school; 
            console.log(intern)
            allTeamArray.push(intern)
            newRole();
        })
    });
}


const newRole = () => {
        inquirer.prompt(newRoleQuestions).then((response) =>{
            console.log(response);

            const { role } = response; //object destructuring to pull out role name 

        //write conditionals that determine which set of follow up questions to ask 
        if (role === "Manager"){
            makeManager();
        }
        if (role === "Engineer"){
            makeEngineer();
        }
        if (role === "Intern"){
            makeIntern();
        }
        if (role === "Done"){
        console.log("Your team is done! run write file fxn");
        console.log(allTeamArray);
            //call fxn to write the file with paramenters of the filename 
            //eventually we'll pass the returned HTML data from on other js files  
        }

        })
}

//writeToFile(response); 

init();  // Function call to initialize app

