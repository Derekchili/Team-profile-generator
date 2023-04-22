const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const inquirer = require('inquirer');

const generateHtml = require('../util/generateHtml');

const teamMembers = [];

function askQuestion() {
    console.log('Welcome to the team generator');
    console.log('use: npm run reset');
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the team managers id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the team managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the team managers office number?',
            name: 'officeNumber'
        },
        {
            type: 'list',
            message: 'Which type of team member do you want to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
            name: 'teamMemberType'
        },
    ]).then(managerAnswers => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        teamMembers.push(manager);
        switch (managerAnswers.teamMemberType) {
            case 'Engineer':
                askEngineerQuestions();
                break;
            case 'Intern':
                askInternQuestions();
                break;
            default:
                generateHtml(teamMembers);  
        }  
    });
           function askEngineerQuestions() {
            inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the Engineers name?',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers id?',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers email?',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers GitHub?',
                        name: 'github'
                    },
                    {
                        type: 'list',
                        message: 'Which type of team member do you want to add?',
                        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
                        name: 'teamMemberType'
                    },
                ]).then(engineerAnswers => {
                    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                    teamMembers.push(engineer);
                    if (engineerAnswers.teamMemberType === 'Engineer') {
                        askEngineerQuestions();
                    } else if (engineerAnswers.teamMemberType === 'Intern') {
                        askInternQuestions();
                    } else {
                        generateHtml(teamMembers);
                    }
                
            });
         
    };
    function askInternQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the Interns name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the Interns id?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the Interns email?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is the Interns School?',
                name: 'school'
            },
            {
                type: 'list',
                message: 'Which type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I do not want to add any more team members.'],
                name: 'teamMemberType'
            },
        ]).then(internAnswers => {
            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            teamMembers.push(intern);
            if (internAnswers.teamMemberType === 'Engineer') {
                askEngineerQuestion();
            } else if (internAnswers.teamMemberType === 'Intern') {
                askInternQuestions();
            } else {
                generateHtml(teamMembers);
            }
        });
    }
}   
    askQuestion();

