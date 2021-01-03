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
            choices: ["View Department", "View Employee", "View Role",
                      "Add Department", /*"Add Employee", "Add Role",*/
                      "Exit APP"]
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
            case "Add Department":
                inquirer.prompt([
                {
                    name: "userresponse",
                    type: "list",
                    message: "What department would you like to add?",
                    choices: ["Sales", "Public Relations",
                              "Human Resources", "Quality Assurance",
                              "Research & Development",
                              "Exit APP"]
                }
                ]).then(function (data) {
                    switch (data.userresponse) {
                        case "Sales":
                            addDepartment("Sales");
                            break;
                        case "Public Relations":
                            addDepartment("Public Relations");
                            break;
                        case "Human Resources":
                            addDepartment("Human Resources");
                            break;
                        case "Quality Assurance":
                            addDepartment("Quality Assurance");
                            break;
                        case "Research & Development":
                            addDepartment("Research & Development");
                            break;
                        default:
                            break;                
                    }
            })              
                break;
            /*
            case "Add Employee":
                inquirer.prompt([
                {
                    name: "userresponse",
                    type: "string",
                    message: "Enter Employee Info, ",
                    message: "(FirstName LastName RoleID ManagerID): ",
                }
                ])/.then(function (data) {
                    addEmployee(data.userresponse);
                }    
            )    
                break;              
            case "Add Role":
                addRole();
                break;    
            */              
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

function addDepartment(req, res){
    //console.log("Add Department: ", req)
    connection.query("INSERT INTO DEPARTMENT (name) values (?)", [req], function(error, data) {
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

function addEmployee(req, res){
    //console.log("Add Employee: ", req)
    connection.query("INSERT INTO EMPLOYEE (First Name, Last Name, Employee ID, Manager ID) values = ?", [req], function(error, data) {
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
