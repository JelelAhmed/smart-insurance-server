// import paystackAPI from "../api/paystack.js";
import axios from "axios";
import { response } from "express";

const handleTransactionRef = async (req, res, db) => {

	const { email, user_name, transaction_ref } = req.body;
	// let transaction_ref = 1673910727312;

	console.log(transaction_ref);

	const paystackAPI = axios.create({
		baseURL: `https://api.paystack.co/`,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer sk_test_effe1a84e394704b2de05798c22826640f4d9463`
		},
	});


	if (!email || !transaction_ref) {
		return res.status(400).json('invalid payment details')
	}


	
	await paystackAPI.get(`/transaction/verify/${transaction_ref}`)
		.then(response => {
			console.log(response.data.status);
			if(response.data.status === true) {
				console.log(email, transaction_ref);

				db.transaction(trx => { 
					trx.insert({
						transaction_ref: transaction_ref, 
						email: email,
						created_on: new Date()
					})
					.into('lists')
					.returning('email')
					.then(loginEmail => {
						console.log(loginEmail);
						return trx('login')
						 .returning('*')
						 .insert({
								email: email,
								// user_name: user_name,
							})
							.then(login => {
							  return login;
							})
					})
					.then(trx.commit)
					.catch(trx.rollback)
				})     
					// .catch(err => response.status(400).json(''));
			}
		})
		.catch(err => response.status(400).json(err));

}
	
export default handleTransactionRef;