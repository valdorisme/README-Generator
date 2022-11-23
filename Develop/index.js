// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');

// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "author",
            message: "Type in your name"
        },
        {
            type: "input",
            name: "username",
            message: "Type in your GitHub username"
        },
        {
            type: "input",
            name: "email",
            message: "Type in your email address"
        },
        {
            type: "input",
            name: "title",
            message: "Type in your project name"
        },
        {
            type: "input",
            name: "description",
            message: "Give a short description of your project"
        },
        {
            type: "input",
            name: "license",
            message: "What kind of license should your project have?"
        },
        {
            type: "input",
            name: "dependencies",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "repo",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contribution",
            message: "What does the user need to know about contributing to the repo?"
        }
    ]

    // console.log(inquirer)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        // console.log(fileName)
        // console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
