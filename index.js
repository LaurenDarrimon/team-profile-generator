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

const allTeam = []; //create empty array of all employees, we will push each completed team member object into. 

// Create a function to initialize app
function init() {

    const manager = new Manager();

    manager.getName().then(() => {
        manager.getOffice().then(() => { 
            console.log(manager);  
        });
    });

};



init();  // Function call to initialize app

//writeToFile(response); 

//  .then(()manager.getRole(() => {});