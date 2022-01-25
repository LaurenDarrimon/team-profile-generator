// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//require js files in src directory - template helper code






// Create an array of questions for user input
const questions = 
    [
        {
            type: 'list',
            message: 'What type of license does this project have?',
            name: 'license',
            choices: [ "MIT", "GNU GPLv3", "Apache-2.0" ],
        },
    ];

// Create a function to write README file
function writeToFile(repoName, markdownText) {

    fs.writeFile(`${repoName}README.md`, markdownText, (err) =>
    err ? console.error(err) : console.log('Success!')  //if there's an error, console error it, otherwise, show success 
    );
}

// Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)  //prompt user for questions 

    .then((response) => {  //only after we get prompts, then 
        //console.log(response);
  
        const { repoName } = response;  //object destructuring to pull out file name 

        //call fxn to write the file with paramenters of the filename and the returned data from generateMarkdown on other js file 
        writeToFile(repoName, generateMarkdown(response)); 
    });
}

// Function call to initialize app
init();