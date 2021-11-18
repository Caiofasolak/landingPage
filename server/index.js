const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'app_schema'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/insert', (request, response) => {
    const userName = request.body.userName;
    const userEmail = request.body.userEmail;
    const userWhats = request.body.userWhats;
    var userAuth = request.body.userAuth;
    if (request.body.userAuth === 'on')
        userAuth = 'YES';
    else
        userAuth = 'NO';


    const sqlInsert = 'INSERT INTO user (name, email, whatsapp, authorization) VALUES (?, ?, ?, ?);';
    db.query(sqlInsert, [userName, userEmail, userWhats, userAuth], (err, result) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("Server on port 3001");
});