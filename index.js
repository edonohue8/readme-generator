// const declarations
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username"
    }, {
        type: "input",
        name: "email",
        message: "Please provide your e-mail address"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "license",
        message: "Please select the license your project should have",
        default: "MIT"
    },
    {
        type: "input",
        name: "installation",
        message: "What terminal command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What terminal command should be run for testing?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What should the user know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What should the user know about contributing to the repo?",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("README file generated...");
            writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
        })
}

// function call to initialize program
init();
