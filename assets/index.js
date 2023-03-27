// TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What tests were performed?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        choices: ["MIT", "Apache", "GNU", "BSD 2"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();




















//class example
// const generateHTML = function (name, location, bio, linkedin, github) {
//     return `<!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
    
//     <body>
//         <header>
//             <div>
//                 <h1>Hi! My name is ${name}</h1>
//                 <p>Bio: ${bio}</p>
//                 <p>I am from ${location}</p>
//                 <p>My github username is ${github}</p>
//                 <p>My linkedin account is ${linkedin}</p>
//             </div>
//         </header>
//     </body>
    
//     </html>`;
// }



// const inquirer = require('inquirer');

// inquirer.prompt([
//     {
//         type: 'name',
//         message: 'What is your name?',
//         name: 'name',
//     },
//     {
//         type: 'location',
//         message: 'What is your location?',
//         name: 'location',
//     },
//     {
//         type: 'bio',
//         message: 'Tell us about yourself',
//         name: 'bio',
//     },
//     {
//         type: 'linkedin',
//         message: 'What is your linkedin profile?',
//         name: 'linkedin',
//     },
//     {
//         type: 'github',
//         message: 'What is your github profile?',
//         name: 'github',
//     },
// ])
//     .then((response) => {
//         console.log(response);
//         const fs = require('fs');
//         const htmlPageContent = generateHTML(response.name, response.location, response.bio, response.linkedin, response.github);

//         fs.writeFile('index.html', htmlPageContent, (err) => {
//             err ? console.error(err) : console.log("Created index.html")
//         })
//     })

// console.log(inquirer)


