const inquirer = require("inquirer");
const fs = require("fs");

const markDownTemplate = (answers) =>

`## **${answers.title}**
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
## Description
${answers.description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [question](#questions)

## Installation
To install necessary dependencies, run the following command : "${answers.command}"

## Usage
In order to use this application," ${answers.usage}"

## License

This project is licenced under the "${answers.license}" license

## Contributing

 contributors: "${answers.contributing}"
## Tests

To run tests, run this command : "${answers.test}"

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at
 [${answers.username}](https://github.com/${answers.username}/).

 https://github.com/${answers.username}/${answers.title}
`;



inquirer
    .prompt([
        {
            type:"input",
            name:"title",
            message: "What is the project Title?",
        },
        {
            type:"input",
            name:"description",
            message: "Please provide your project description : ",
        },
        {
            type:"input",
            name:"command",
            message: "Please provide the installation instruction for dependencies : ",
        },
        {
            type:"input",
            name:"usage",
            message: "Please provide the project usage information : ",
        },
        {
            type:"input",
            name:"contributing",
            message: "Please provide the project contributing parties : ",
        },
        {
            type:"rawlist",
            name:"license",
            message: "Please provide the project license : ",
            choices :["MIT", "ISC", "APACHE", "GPL", "BSD"],
        },
        {
            type:"input",
            name:"test",
            message: "Please provide your project test command : ",
        },
        {
            type:"input",
            name:"username",
            message: "What is your GitHub User name?  ",
        },
        {
            type:"input",
            name:"email",
            message: "What is your Email Id: ?  ",
        },
        
    ])

    .then((answers) => {
        const readmeContent = markDownTemplate(answers);
        fs.writeFile("README.MD", readmeContent, (err)=>
        err? console.log(err): console.log("Sucessfully created the File!!")
       
        );
    });