// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: `What is the title of your project?`,
    },
    {
      type: "input",
      name: "github",
      message: `What's your GitHub User Name?`,
    },
    {
      type: "input",
      name: "email",
      message: `What is your email address?`,
    },
    {
      type: "input",
      name: "description",
      message: `Please enter a description of your project?`,
    },
    {
      type: "input",
      name: "install",
      message: `What is the installation process?`,
    },
    {
      type: "input",
      name: "usage",
      message: `How do you use the application?`,
    },
    {
      type: "list",
      message: "what license would you like to use? ",
      name: "license",
      choices: ["AAL", "ISC", "MIT", "NTP", "W3C"],
    },
    {
      type: "input",
      name: "testing",
      message: `How do you test the application?`,
    },
    {
      type: "input",
      name: "contributing",
      message: `What contribution notes do you have to add?`,
    },
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("README.md file created successfully!")
  );
};

// TODO: Create a function to initialize app
// async function init() {
//   let answers = await questions();
//   writeToFile(answers.fileName, generateMarkdown(answers));
// }
const init = () => {
  questions()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeToFile("README.md", generateMarkdown(answers)));
};

// Function call to initialize app
init();
