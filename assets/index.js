// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
console.log(response);

// TODO: Create a function to write README file
.then((response) => {
    const readmePageContent = generateREADME(response);
    // response.title, response.location, response.description, response.installation, response.usage, response.contribution, response.tests, response.license, response.github, response.email
    fs.writeFile('README.md', readmePageContent, (err) => {
        err ? console.error(err) : console.log("Created README.md")
    })
})
console.log(inquirer)

const generateREADME = function
    (title, description, installation, usage, contribution, tests, license, github, email) {
    return `
        # ${title}
        ##Table of Contents
        [Installation](#installation)
        [Usage](#usage)
        [Contribution](#contribution)
        [Tests](#tests)
        [License](#license)
        [Questions](#questions)

        ##Discription
        ${description}

        ##Installation
        ${installation}

        ##Usage
        ${usage}

        ##Contribution
        ${contribution}

        ##Tests
        ${tests}

        ##License
        ${license}

        ##Questions
        If you have any questions about the repo, open an issue or contact me directly at ${email}.
        You can find more of my work at my [GitHub](https://github.com/${github})

        `
}


