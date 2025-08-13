const mysql2 = require('mysql2')
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_ROOT;
const dbPassword = process.env.DB_PW

// configurations for creating mysql connection
const connection = mysql2.createConnection({
    host: dbHost,
    port: dbPort,
    database: dbName,
    user: dbUser,
    password: dbPassword
})

// executing connection
connection.connect(function (err) {
    if (err) {
        console.log("error occurred while connecting", err)
    } else {
        console.log("connection created with mysql successfully")
    }
})