// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const internal = require("stream");

//require js files in lib directory 
const Employee = require("./lib/Employee");  
const Manager = require("./lib/Manager");
const Engineer  = require("./lib/Engineer"); 
const Manager  = require("./lib/Manager");
const Intern  = require("./lib/Intern");

//require template helper codes files 

const allTeam = []; //create empty array of all employees, we will push each completed team member object into. 

// Create a function to initialize app
function init() {

const employee = new Employee();

employee.role = "Manager"; //set the role to manager to start with, so that first set of questions will be for manager.
    
employee.getName()
    .then(() => {
        if(employee.role === "Manager"){
            let manager  =  new Manager;
            manager.getOffice();
        }
        if(employee.role === "Engineer"){
            let engineer =  new Engineer;
            engineer.getGitHub();
        }
        if(employee.role === "Intern"){
            let intern  =  new Intern;
            intern.getSchool();
        }else{
            console.log("We're all done")
        }
    });


}


init();  // Function call to initialize app

//writeToFile(response); 