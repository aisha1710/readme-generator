function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Badge
  
  ![Badge](http://img.shields.io/badge/license-${data.license}-blue.png)
  <br>

  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  
  ## License
  
  The application is authorized for usage in accordance with the ${data.license} license.
  
  Link: [${data.license}] https://opensource.org/licenses/${data.license}
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing  
  ${data.contributing}
  
  ## Tests
  ${data.testing}
  
  ## Questions
  ### If you have any questions, contact me at: 
  Github: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}`;
}

module.exports = generateMarkdown;
