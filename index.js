var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeetracker"
})
connection.connect(function (error) {
    if (error) throw error
    console.log("connection", connection.threadId)

    menu()
})
// * Add departments, roles, employees

// * View departments, roles, employees

// * Update employee roles
function menu() {
    inquirer.prompt([{
        type: "list",
        message: "what would you like to do?",
        choices: ["add departments", "add roles", "add employees", "view departments", "view roles", "view employee", "update employee roles"],
        name: "selection"
    }]).then(function (userInput) {
        switch (userInput.selection) {
            case "add departments":
                addDepartment()
                break
            case "add roles":
                addRole()
                break
            case "add employees":
                addEmployee()
                break
            case "view departments":
                viewDepartments()
                break
            case "view roles":
                viewRoles()
                break
            case "view employee":
                viewEmployee()
                break
            case "update employee roles":
                updateEmployeeRole()
                break
        }
    })
}

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        message: "what is your depatment name",
        name: "departmentName"
    }]).then(function (userInput) {
        connection.query(``"insert into department(name)values(?)", userInput.departmentName, function (error, results) {
            console.log("department added")
            menu()
        })
    })

}
function addRole() {

}
function addEmployee() {

}
function viewDepartments() {

}
function viewRoles() {

}
function viewEmployee() {

}
function updateEmployeeRole() {

}