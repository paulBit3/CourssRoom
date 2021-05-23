//import http from '../apis/apiservice';

import axiosInstance, { setNewHeaders } from '../apis/apiservice';
import { getCurrentUser } from './api-user';
import authHeader from './auth-header';


//register  method

const create = async (data) => {
	try {
		const response = axiosInstance.post('/classroom/greeting/add', data, { 
			headers: authHeader()
		});
		console.log(response);
		return response;
	} catch(err) {
		// statements
		console.log(err);
	}
}



//greeting list
const getItems = async () => {
	try {
		const response = axiosInstance.get('/classroom/greeting/', { 
			headers: authHeader()
		});
		//console.log(response);
		return await response;
	} catch(err) {
		// statements
		console.log(err);
	}
}



//updating a greeting
const updateItems = async (data) => {
	try {
		const response = axiosInstance.put(`/classroom/greeting/${data.id}`, { 
			headers: authHeader()
		});
		//console.log(response);
		return await response;
	} catch(err) {
		// statements
		console.log(err);
	}
}



//deleting a greeting
const deleteItems = async (id) => {
	try {
		const response = axiosInstance.delete(`/classroom/greeting/${id}`, { 
			headers: authHeader()
		});
		//console.log(response);
		return await response;
	} catch(err) {
		// statements
		console.log(err);
	}
}





// export async function update(id, data) {
// 	const response = await axiosInstance.post(`/classroom/greeting/${id}`, data);
// 	//localStorage.setItem('user', JSON.stringify(response.data));
// 	//console.log(response);
// 	return response;
// }


const isAuthenticated = () => {
	const token = localStorage.getItem('access_token');
	return token;
}

export {
	create,
	getItems,
	updateItems,
	deleteItems,
};