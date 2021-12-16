const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

startProgram();

async function startProgram() {
    const {choice} = await inquirer.prompt([{
        name: "choice",
        type: "list",
        message: "what do you want to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
       
    }])
console.log(choice);

switch (choice) {
    case "view all departments":
          showDepartments()  
        break;

    default:
        break;
}
switch (choice) {
    case "view all roles":
          showRoles()  
        break;

    default:
        break;
}
switch (choice) {
    case "view all employees":
          showEmployees()  
        break;

    default:
        break;
}
switch (choice) {
    case "add a department":
          addDepartment()  
        break;

    default:
        break;
}
switch (choice) {
    case "add an employee":
          addEmployee()  
        break;

    default:
        break;
}
switch (choice) {
    case "add a role":
          addRole()  
        break;

    default:
        break;
}
switch (choice) {
    case "update an employee role":
          updateRole()  
        break;

    default:
        break;
}

}
async function showDepartments(){
// create the connection
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
// query database
const [rows, fields] = await connection.execute("select * from department");
console.table(rows)};

async function showRoles(){
// create the connection
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
// query database
const [rows, fields] = await connection.execute("select * from employee_role");
console.table(rows)};

async function showEmployees(){
// create the connection
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
// query database
const [rows, fields] = await connection.execute("select * from employee");
console.table(rows)};

async function addDepartment(){
// create the connection
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
// query database
const [rows, fields] = await connection.execute("select * from department");
const newDepartmentChoices = rows.map(department =>({name:department.name, value:department}))
console.log(newDepartmentChoices);
const {choice} = await inquirer.prompt([{
    name: "choice",
    type: "list",
    message: "which department do you want to add?",
    choices: newDepartmentChoices,
    }])

console.log(choice)};

async function addEmployee(){
// create the connection
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
// query database
const [rows, fields] = await connection.execute("select * from employee");
const newEmployeeChoices = rows.map(employee =>({name:employee.name, value:employee}))
console.log(newEmployeeChoices);
const {choice} = await inquirer.prompt([{
    name: "choice",
    type: "list",
    message: "which employee do you want to add?",
    choices: newEmployeeChoices,
    }])

console.log(choice)};

async function addRole(){
// create the connection
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
// query database
const [rows, fields] = await connection.execute("select * from employee_role");
const newRoleChoices = rows.map(employee_role =>({name:employee_role.name, value:employee_role}))
console.log(newRoleChoices);
const {choice} = await inquirer.prompt([{
    name: "choice",
    type: "list",
    message: "which role do you want to add?",
    choices: newRoleChoices,
    }])

console.log(choice)};

async function updateRole(){
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employee_db'});
    // query database
    const [rows, fields] = await connection.execute("select * from employee_role");
    const updateRoles = rows.map(employee_role =>({name:employee_role.name, value:employee_role}))
    console.log(updateRoles);
    const {choice} = await inquirer.prompt([{
        name: "choice",
        type: "list",
        message: "which employee role do you want to add?",
        choices: updateRoles,
        }])
    
    console.log(choice)};