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
	connection: {
	connectionString : 'postgres://postsmart_user:6qpCkrPgDGVwVPFoV2xjPSZvV7wE3cp9@dpg-cf3r70pa6gdmd1hfb370-a.frankfurt-postgres.render.com/postsmart',
	ssl: true,
},
});
// db.schema.dropTable('users')


// db.schema.hasTable('lists').then(function(exists) {
//   if (!exists) {
//     return db.schema.createTable('lists', function(t) {
//       t.increments('id').primary();
// 			t.string('email', 255);
//       t.string('transaction_ref');
//       t.string('created_on');

//     });
//   }
// });

// db.schema.hasTable('login').then(function(exists) {
//   if (!exists) {
//     return db.schema.createTable('login', function(t) {
//       t.increments('id').primary();
//       t.string('email', 255);
//     });
//   }
// });




// const pg = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });



const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// const argv = require('minimist')(process.argv.slice(2));
// const configFile = argv.config || 'config.json';
// const config = require(path.join(__dirname, configFile));

app.get('/', (req, res) => { res.send('it is working')});
app.post('/login', (req, res) => {handleSignin(req, res, db)});
app.post('/payments', (req, res) => {handleTransactionRef(req, res, db, bcrypt) });
app.post('/registers',(req, res) => {handleRegister(req, res, db, bcrypt) });
// app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)}); 

// handleTransactionRef();



let port = 3002 || process.env.PORT;

app.listen(port, () => {
  console.log(`app is running on port ${port}}`);
});