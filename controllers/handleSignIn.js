

const handleSignin = (req, res, db) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json('incorrect form submission');
  }
  db.select('email').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = true;
			console.log(email);
      if (isValid) {
       return db.select('*').from('lists')
          .where('email', '=', email)
          .then(user => {
            res.json(user)
          })
          .catch(err => res.status(400).json('unable to get user'))
      } else {
         res.status(400).json('wrong credentials');
        }
    }) 
    .catch(err => res.status(400).json('wrong credentials'))
}


export default handleSignin;

