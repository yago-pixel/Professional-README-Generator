// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide the steps required to install your project:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide usage information for your project:'
    },
    {   name: 'screenshot',
        type: 'input',
        message: 'Please provide the name of the screenshot you saved in the "assets/images" folder:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select the license(s) for your project:',
        choices: [
            {name: 'MIT', value: 'MIT'}, 
            {name: 'ApacheLicense2.0'},
            {name: 'TheUnlicense'}, 
            {name: 'GNUGPLv3'}, 
            {name: 'CCO1.0'}, 
            {name: 'None'}
        ]
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Please list all contributors to this project:'
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        let markdown = generateMarkdown(data)
        writeToFile("README.md", markdown)
    })
}

// Function call to initialize app
init();