const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const knex = require('knex');

// const register = require('./controllers/register');
// const signin = require('./controllers/signin');


// const db = knex({
//     client: 'pg',    
//     connection: {
//     connectionString : process.env.DATABASE_URL,
//     ssl: true,
//   },
// });

const app = express();

app.use(bodyParser.json());
app.use(cors());

// const argv = require('minimist')(process.argv.slice(2));
// const configFile = argv.config || 'config.json';
// const config = require(path.join(__dirname, configFile));

app.get('/', (req, res) => { res.send('it is working')});
// app.post('/signin', (req, res) => { signin.handleSignin(req,res, db, bcrypt)});
// app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
// app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)}); 



let port = 3002 || process.env.PORT;

app.listen(port, () => {
  console.log(`app is running on port ${port}}`);
});