const express = require('express');
const mysql = require('mysql');
const { db_config } = require('./db_config');
const {projects, technologies} = require('./data');

let connect = mysql.createConnection({
    host: db_config.db_host,
    user: db_config.db_username,
    password: db_config.db_password
});

connect.connect(err => {
    if(err) throw err;
    console.log('Connected!');
})

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
  next();
});


app.use('/api/projects/:id', (req, res, next) => {
    const id = +req.params.id;
    const project = projects.find(el => el.id === id);
    if(project !== undefined) res.status(200).json(project);
    else res.status(404).json('Resource cannot be found');

});

app.use('/api/projects', (req, res, next) => {

    res.status(200).json(projects);
});

app.use('/api/technologies', (req, res, next) => {


    res.status(200).json(technologies);
})

module.exports = app;