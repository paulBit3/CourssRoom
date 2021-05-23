import axiosInstance, { setNewHeaders } from '../apis/apiservice';

import authHeader from './auth-header';

const create = async (data) => {
	try {
		const response = axiosInstance.post('/users/register/', data, { 
			headers: authHeader()
		});
		//setNewHeaders(response);
		console.log(response);
		return response;
	} catch(err) {
		// statements
		console.log(err);
	}
}


const getCurrentUser = () => {
    try {
    	return JSON.parse(localStorage.getItem('user'));
    } catch(err) {
    	// statements
    	console.log(err.stack);
    }
}



export {
	create,
	getCurrentUser,
};