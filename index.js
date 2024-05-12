// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Describe your project',
    'What are the installation instructions?',
    'How should your project be used?',
    'Contributions?',
    'Test instructions?'
];
console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log('Success!')
)
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
