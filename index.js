const inquirer = require('inquirer');
const fs = require('fs');

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
            name:"installation",
            message: "Please provide the installation instruction : ",
        },
        {
            type:"input",
            name:"projectusage",
            message: "Please provide the project usage information : ",
        },
        {
            type:"input",
            name:"projectparties",
            message: "Please provide the project contributing parties : ",
        },
        {
            type:"input",
            name:"test",
            message: "Please provide your project test : ",
        },
        {
            type:"input",
            name:"username",
            message: "What is your GitHub User name?  ",
        },
        {
            type:"input",
            name:"link",
            message: "What is your Github Repository Link? ",
        },
        {
            type:"input",
            name:"badges",
            message: "Please provide the bagges link that you want? ",
        },
        {
            type:"rawlist",
            name:"licence",
            message: "Please provide the project licence : ",
            choices :["MIT", "ISC"],
        },
    ])

    .then((answers) => {
        fs.writeFile("README.MD", answers, function (error,answers){
        if(error) console.log("error", error);
        }
       
        );
    });