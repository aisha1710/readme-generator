const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
      choices: ["Perl", "ISC", "MIT", "IBM", "Mozilla"],
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

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("README.md file created successfully!")
  );
};

const init = () => {
  questions().then((answers) =>
    writeToFile("README.md", generateMarkdown(answers))
  );
};

init();
