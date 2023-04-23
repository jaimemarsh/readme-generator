const inquirer = require('inquirer');
const fs = require('fs');

//Input to add into a new README file
function prompts() {
    return inquirer.prompt([
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
}

//Readme layout
const generateREADME = function
    (response) {
    return `
        #${response.title}
        ##Table of Contents
        [Installation](#installation)
        [Usage](#usage)
        [Contribution](#contribution)
        [Tests](#tests)
        [License](#license)
        [Questions](#questions)

        ##Discription
        ${response.description}

        ##Installation
        ${response.installation}

        ##Usage
        ${response.usage}

        ##Contribution
        ${response.contribution}

        ##Tests
        ${response.tests}

        ##License
        ${response.license}

        ##Questions
        If you have any questions about the repo, open an issue or contact me directly at ${response.email}.
        You can find more of my work at my [GitHub](https://github.com/${response.github})

        `
}

//Readme file creation
async function init() {
    try {
        const response = await prompts();
        const readmePageContent = generateREADME(response);
        fs.writeFile('README.md', readmePageContent, (err) => {
            err ? console.error(err) : console.log("Created README.md")
        })
    } catch (err) { console.log(err) }
}
init();


