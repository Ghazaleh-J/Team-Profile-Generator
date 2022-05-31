const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = require("./template");

const inquirer = require("inquirer");
const fs = require("fs");


const employeeArray = [];

function init(){
    createManager()

}


function createManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?"
        }
    ]).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        employeeArray.push(manager)
        addMoreEmployees()
    }); 
}

function addMoreEmployees(){
    inquirer.prompt([
        {
            type: "list",
            name: "whatElse",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Exit"]
        }
    ]).then((answer) => {
        switch(answer.whatElse){
            case "Engineer":
                createEngineer();
                break;
                case "Intern":
                    createIntern();
                    break;
                    default:
                        exit();
        }
    })
}

function createEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's Github username?"
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employeeArray.push(engineer)
        addMoreEmployees()
    }); 
}

function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?"
        }
    ]).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employeeArray.push(intern)
        addMoreEmployees()
    }); 
}

function exit(){
    fs.writeFileSync('./dist/index.html',team(employeeArray))
}


init();