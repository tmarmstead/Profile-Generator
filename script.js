const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'Who is the Team Manager?',
        name: 'managerName',
      },
      {
        type: 'input',
        message: 'What is the Team Manager\'s employee ID?',
        name: 'managerId',
      },
      {
        type: 'input',
        message: 'What is the Team Manager\'s email?',
        name: 'managerEmail',
      },
      {
        type: 'input',
        message: 'What is the Team Manager\'s office number?',
        name: 'managerOfficeNumber',
      },
]

// Create function to write html page
function createHtmlPage(fileName, data) {
    fs.writeFile(path.join(__dirname, fileName), data)
}



// Create a function to initialize app

function init(){
  inquirer.prompt(questions)
  .then((data) => {
  writeToFile('./index.html', generateMarkdown(data)); 
    });
}



// Function call to initialize app
init();