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



//writeToFile(response); 


// Create a function to initialize app
function init() {

    inquirer.prompt(newManagerQ).then((response) => {
        const { managerYN } = response;

        if (managerYN === "Yes"){  //ask user if they'd like a new manager. 
            manager();   
        } else {
            newRole(response);  
        }

    })    
}


const manager = () => {
    inquirer.prompt(questions).then((response) => {
        const manager = new Manager(response.fullName, response.id, response.email);
        
        inquirer.prompt(managerQuestions).then((response) => {

            manager.office = response.office; 

            console.log(manager)

            allTeamArray.push(manager)
        })
    });
}




const newRole = () => {
        inquirer.prompt(newRoleQuestions).then((response) =>{
            console.log(response);

            const { role } = response; //object destructuring to pull out role name 

        //write conditionals that determine which set of follow up questions to ask 
        if (role === "Manager"){
        inquirer
            .prompt(managerQuestions)  //ask manager questions
            .then ((managerResponse) => {
                console.log(managerResponse);
            })
            .then (() => {
                newRole();  //ask again if there is another team member to add. 
            });
        }
        if (role === "Engineer"){
        inquirer
            .prompt(engineerQuestions) //ask engineer questions
            .then ((engineerResponse) => {
                console.log(engineerResponse);
            })
            .then (() => {
                newRole(); //ask again if there is another team member to add. 
            });
        }
        if (role === "Intern"){
        inquirer
            .prompt(internQuestions) //ask intern questions
            .then ((internResponse) => {
                console.log(internResponse);
            })
            .then (() => {
                newRole; ///ask again if there is another team member to add. 
            });
        }
        if (role === "Done"){
        console.log("Your team is done! run write file fxn");
            //call fxn to write the file with paramenters of the filename 
            //eventually we'll pass the returned HTML data from on other js files  
        }

        })
}

init();  // Function call to initialize app