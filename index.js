import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser'
import knex from 'knex';
import path from 'path';

// import db from './database/database.js';

import handleTransactionRef from './controllers/handleTransactionRef.js';// const signin = require('./controllers/signin');
import handleRegister  from './controllers/register.js';
import handleSignin from './controllers/handleSignIn.js';


const db = knex({
	client: 'pg',    
// 	connection: {
// 	connectionString : process.env.DATABASE_URL,
// 	ssl: true,
// },
});

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// const argv = require('minimist')(process.argv.slice(2));
// const configFile = argv.config || 'config.json';
// const config = require(path.join(__dirname, configFile));

// app.get('/', (req, res) => { res.send('it is working')});
app.post('/login', (req, res) => {handleSignin(req, res, db)});
app.post('/payments', (req, res) => {handleTransactionRef(req, res, db, bcrypt) });
app.post('/registers',(req, res) => {handleRegister(req, res, db, bcrypt) });
// app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)}); 

// handleTransactionRef();



let port = 3002 || process.env.PORT;

app.listen(port, () => {
  console.log(`app is running on port ${port}}`);
});