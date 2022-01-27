// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const internal = require("stream");

//require js files in lib directory for object instantiation
const Employee = require("./lib/Employee");  
const Manager = require("./lib/Manager");
const Engineer  = require("./lib/Engineer"); 
const Intern  = require("./lib/Intern");

//require template helper codes file
const generateHTML  = require("./src/generateHTML");
const generateEngineer  = require("./src/generateEngineer");
const generateIntern  = require("./src/generateIntern");
const generateManager  = require("./src/generateManager");


const allTeamArray = []; //create empty array of all employees, we will push each completed team member object into. 
let allEngineers = ``;
let allInterns = ``;
let allManagers = ``;


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

            const { role, fullName, id, email, office } = manager; 
            const profileItemHTML = generateManager(role, fullName, id, email, office);

            allManagers += profileItemHTML;
        
            console.log(allManagers);

            newRole();
        })
    });
}

const makeEngineer = () => {

    inquirer.prompt(questions).then((response) => {
        const engineer = new Engineer(response.fullName, response.id, response.email);
        
        inquirer.prompt(engineerQuestions).then((response) => {

            engineer.gitHub = response.gitHub; 
            console.log(engineer)
            allTeamArray.push(engineer)

            const { role, fullName, id, email, gitHub } = engineer; 
            const profileItemHTML = generateEngineer (role, fullName, id, email, gitHub);

            allEngineers += profileItemHTML;

            console.log("we generated an engineer HTML")
            console.log(allEngineers)

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

            const { role, fullName, id, email, school } = intern; 
            const profileItemHTML  = generateIntern (role, fullName, id, email, school);

            allInterns += profileItemHTML;

            console.log(allInterns)

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
            
                const textHTML = generateHTML(allManagers, allEngineers, allInterns); 
                writeToFile(textHTML);
            }
    })
}

const writeToFile = (textHTML) => {
    fs.writeFile(`dist/devTeam.html`, textHTML, (err) =>
    err ? console.error(err) : console.log("Your team is done! Check the ./dist directory for your custom HTML file!")  
    //if there's an error, console error it, otherwise, show success 
    ); 
}

init();  // Function call to initialize app

