const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const inquirer = require('inquirer');

const fs = require('fs');

const generatePage = require('../util/generateHtml');


const teamMembers = [];

function askQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?'
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers id?'
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?'
            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?'
            
        },
        {
            type: 'list',
            name: 'teamMemberType',
            message: 'Which type of team member do you want to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members.']
            
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
                        name: 'name',
                        message: 'What is the Engineers name?'
                        
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the Engineers id?'
                        
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the Engineers email?'
                        
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the Engineers GitHub?'
                        
                    },
                    {
                        type: 'list',
                        name: 'teamMemberType',
                        message: 'Which type of team member do you want to add?',
                        choices: ['Engineer', 'Intern', 'I do not want to add any more team members.']
                        
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
                name: 'name',
                message: 'What is the Interns name?'
                
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Interns id?'
                
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Interns email?'
                
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the Interns School?'
                
            },
            {
                type: 'list',
                name: 'teamMemberType',
                message: 'Which type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I do not want to add any more team members.']
                
            },
        ]).then(internAnswers => {
            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            teamMembers.push(intern);
            if (internAnswers.teamMemberType === 'Engineer') {
                askEngineerQuestions();
            } else if (internAnswers.teamMemberType === 'Intern') {
                askInternQuestions();
            } else {
                fs.writeFile("./index.html", generatePage(teamMembers), err => {
                    if (err) throw err;
                    console.log("Your team profile has been generated!");
                  });
                }        
       
        });
    }
}   
    askQuestion();

