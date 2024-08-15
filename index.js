// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
      },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'usage',
      },
    {
        type: 'input',
        message:'Any collaborators or third party resources?',
        name: 'contributions',
      },
    {
        type: 'input',
        message:'Please provide your github username',
        name: 'name',
      },
    {
        type: 'input',
        message:'Please provide your github username',
        name: 'creator',
      },
    {
        type: 'input',
        message:'Please provide your email address',
        name: 'email',
      },
    {
        type: 'list',
        message:'Did you use any of the following licenses?',
        choices: ['Apache 2.0','GNU 3.O', 'MIT', 'BSD2', 'BSD3', 'Boost1.0', 'MPL 2.0', 'none' ],
        name: 'license',
      },
    {
        type: "input",
        message: 'Test instructions?',
        name: "test",
      }
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('Success!')
)
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(function (responses) {
console.log(responses)
writeToFile('README.md', generateMarkdown(responses))
})
}

// Function call to initialize app
init();
