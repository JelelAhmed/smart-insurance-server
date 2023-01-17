import paystackAPI from "../api/paystack.js";
import axios from "axios";

const handleTransactionRef = async (req, res, db) => {

	// const { email, transaction_ref } = req.body;

	
	// const paystactAPI = axios.create({
	// 	baseURL: `https://api.paystack.co/`,
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer sk_test_effe1a84e394704b2de05798c22826640f4d9463`
	// 	},
	// });
	let transaction_ref = 1673952611099;
	
	await paystackAPI.get(`/transaction/verify/${transaction_ref}`)
		.then(res => {
			console.log(res.data.status);
		})
		.catch(err => {
			console.log(err);
		})


	// 	if (!email || !transaction_ref) {
	// 		return res.status(400).json('invalid payment details')
	// 	}
	// 	console.log(email, transaction_ref);
	//  db('payments')
	// 	 .returning('*')
	// 	 .insert({
	// 			email: email,
	// 			transaction_ref: transaction_ref,
	// 			created_on: new Date()
	// 	})
	// 		.then(response => {
	// 			res.json(response[2]);
	// 		})
	// 		.catch(err => res.status(400).json(err)) 

}
	
export default handleTransactionRef;