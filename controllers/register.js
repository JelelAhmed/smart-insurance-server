const handleRegister = (req, res, db, bcrypt) => {
  const { name, email, password } = req.body;
	// console.log(name, email, password);
  if (!email || !name || !password) {
    return res.status(400).json('incorrect form submission');
  }

	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

	db.transaction(trx => { 
    trx.insert({
      hash: hash, 
      email: email,
    })
    .into('login')
    .returning('email')
    .then(loginEmail => {
			console.log(loginEmail);
      return trx('users')
       .returning('*')
       .insert({
          email: email,
          name: name,
          // joined: new Date()
        })
        .then(user => {
          res.json(user[0]);
        })
    })
    .then(trx.commit)
    .catch(trx.rollback)
  })     
    .catch(err => res.status(400).json(''));
}

export default handleRegister;