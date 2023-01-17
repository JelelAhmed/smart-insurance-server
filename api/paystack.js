import axios from "axios";

const paystackAPI = axios.create({
	baseURL: `https://api.paystack.co/`,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer sk_test_effe1a84e394704b2de05798c22826640f4d9463`
	},
});

export default paystackAPI;