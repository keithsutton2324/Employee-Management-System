var inquirer = require("inquirer")
var mysql = require("mysql");
require("console.table")

var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "Employeedb"
    });

connection.connect(function(err){
    if (err) throw err;
    console.log("DB connection");
    console.log(" Welcome to Keith's HR System")
    employeeNavbar()
})


function employeeNavbar() {
    inquirer.prompt([
        {
            name: "userresponse",
            type: "list",
            message: "What would you like to do?",
            choices: ["View Department", "View Employee", "View Role", "Exit APP"]
        }
    ]).then(function (data) {
        switch (data.userresponse) {
            case "View Department":
                displayDepartment();
                break;
            case "View Employee":
                displayEmployee();
                break;
            case "View Role":
                displayRole();
                break;
            default:
                process.exit(0);
        }
})  }

function displayDepartment(){
    connection.query("SELECT * FROM DEPARTMENT;",function(error,data){
        if ( error) throw error
        console.table(data)
        employeeNavbar()
    })
}

function displayEmployee(){
    connection.query("SELECT * FROM EMPLOYEE;",function(error,data){
        if ( error) throw error
        console.table(data)
        employeeNavbar()
    })
}
function displayRole(){
    connection.query("SELECT * FROM ROLE;",function(error,data){
        if ( error) throw error
        console.table(data)
        employeeNavbar()
    })
}
