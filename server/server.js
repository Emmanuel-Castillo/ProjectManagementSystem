const mysql2 = require('mysql2')
const express = require('express')
require('dotenv').config();

// Set up express to create an app and configure it to parse requests with JSON payloads
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// configurations for creating mysql connection
const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_ROOT,
    password: process.env.DB_PW
})

// executing connection
connection.connect(function (err) {
    if (err) {
        console.log("error occurred while connecting", err)
    } else {
        console.log("connection created with mysql successfully")
    }
})

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
})