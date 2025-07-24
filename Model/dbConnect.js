const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect(function(err){
    if (err){
        console.log('Error.....', err.sqlMessage)
    }
    else{
        console.log("Connected.....")
    }
    })
 module.exports = connection;

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     port:3306,
//     password:"1234",
//     database:"customer"
// })

// connection.connect(function(err){
//     if (err){
//         console.log('Error.....', err.sqlMessage)
//     }
//     else{
//         console.log("Connected.....")
//     }
// })
// module.exports = connection;


