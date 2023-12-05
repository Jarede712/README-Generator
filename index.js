// Required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Adjust the path as necessary

// Array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of the project:' },
    { type: 'input', name: 'installation', message: 'Describe the installation process:' },
    { type: 'input', name: 'usage', message: 'What is the usage of this project?' },
    { type: 'input', name: 'contributing', message: 'How can others contribute to your project?' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'list', name: 'license', message: 'Choose the license for your project:', 
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'Other', 'None'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub Username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md has been generated!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize application
init();
