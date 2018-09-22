const inquirer = require("inquirer");
const mysql = require ("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err}`);
    }
    console.log("Connected!");
});