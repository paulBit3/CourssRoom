/*retrieving data from server. In the case we access protected resources, 
the HTTP request needs Authorization header.*/



export default function authHeader () {
	const user = JSON.parse(localStorage.getItem('user'));
	try {
		if (user && user.token) {
			//return http auhtorization
			return { Authorization: 'Bearer ' + user.token };
		} else {
			//return empty object
			return {};
		}
	} catch(e) {
		// statements
		console.log(e);
	}
}