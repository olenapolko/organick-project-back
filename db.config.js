const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
});

db.connect((error) => {
    if (error) throw error;
    console.log("Database Connected!");
});

module.exports = db;