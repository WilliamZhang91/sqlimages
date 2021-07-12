const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'missionxdb.c7cxqkjagnrx.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'adminpassword',
    database: "mission_x"
})

db.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to db')
    }
})

app.get('/user', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        res.send(result)
    })
})

app.listen(4000)
