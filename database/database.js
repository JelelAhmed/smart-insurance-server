import knex from 'knex';

// const db = knex({
// 	client: 'pg',    
// 	connection: {
// 		host : 'localhost',
// 		user : 'postgres',
// 		password: '1994',
// 		database : 'si-server'
// 	}
// });

// db.schema.dropTable('users')
// db.schema.dropTable('login')

// db.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     return db.schema.createTable('users', function(t) {
//       increments('id').primary();
//       string('first_name', 255);
//       string('last_name', 255);
// 			string('email', 255);
//       string('transRef');
//     });
//   }
// });

// db.schema.hasTable('login').then(function(exists) {
//   if (!exists) {
//     return db.schema.createTable('login', function(t) {
//       t.increments('id').primary();
//       t.string('email', 100);
//     });
//   }
// });

// export default db;
