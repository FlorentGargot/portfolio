const express = require('express');
const mysql = require('mysql');
const { db_config } = require('./db_config');

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

app.use('/api/projects', (req, res, next) => {

    const projects= [{
        id: 1,
        name: 'Mon premier projet',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic? Blanditiis eos dignissimos veniam, dolore sint esse consequuntur harum perferendis eum quos. Est sequi cupiditate vitae soluta pariatur quod magnam iure sint hic laboriosam. Perferendis quae atque vitae eum voluptatibus.',
        dateAdded: new Date(),
        technologies: [1,2,3],
        anchorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusantium magnam amet beatae fuga animi vel ipsam hic facere doloremque!',
        imageUrl: './assets/images/code-informatique.jpg'
    },
    {
        id: 2,
        name: 'Mon projet Angular',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic? Blanditiis eos dignissimos veniam, dolore sint esse consequuntur harum perferendis eum quos. Est sequi cupiditate vitae soluta pariatur quod magnam iure sint hic laboriosam. Perferendis quae atque vitae eum voluptatibus.',
        dateAdded: new Date(),
        technologies: [4,5,6],
        anchorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusantium magnam amet beatae fuga animi vel ipsam hic facere doloremque!',
        imageUrl: './assets/images/source-code_featured-image.png'
    },    
    {
        id: 3,
        name: 'Mon projet React',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic? Blanditiis eos dignissimos veniam, dolore sint esse consequuntur harum perferendis eum quos. Est sequi cupiditate vitae soluta pariatur quod magnam iure sint hic laboriosam. Perferendis quae atque vitae eum voluptatibus.',
        dateAdded: new Date(),
        technologies: [3,6,7,8],
        anchorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusantium magnam amet beatae fuga animi vel ipsam hic facere doloremque!',
        imageUrl: './assets/images/Best-Code-and-Text-Editors.png'
    }];

    res.status(200).json(projects);
});

app.use('/api/technologies', (req, res, next) => {
    const technologies = [
        {
            id: 1,
            name: 'HTML',
            description: '',
            state: 4,
            color: "#0000c0",
            level: 4
        },        
        {
            id: 2,
            name: 'CSS',
            description: '',
            state: 4,
            color: "#0080c0",
            level: 4
        },        
        {
            id: 3,
            name: 'JavaScript',
            description: '',
            state: 4,
            color: "#008040",
            level: 3
        },        
        {
            id: 4,
            name: 'TypeScript',
            description: '',
            state: 4,
            color: "#200080",
            level: 4
        },        
        {
            id: 5,
            name: 'Angular',
            description: '',
            state: 4,
            color: "#c00040",
            level: 4
        },        
        {
            id: 6,
            name: 'SCSS',
            description: '',
            state: 4,
            color: "#c08040",
            level: 4
        },        
        {
            id: 7,
            name: 'React',
            description: '',
            state: 2,
            color: "#0000e0",
            level: 4
        },        
        {
            id: 8,
            name: 'JSX',
            description: '',
            state: 2,
            color: "#40c040",
            level: 4
        }
    ];

    res.status(200).json(technologies);
})

module.exports = app;