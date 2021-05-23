//import http from '../apis/apiservice';

import axiosInstance, { setNewHeaders } from '../apis/apiservice';
import { getCurrentUser } from './api-user';
import authHeader from './auth-header';


//register  method

const create = async (params, data) => {
	try {
		const response = axiosInstance.post('/classroom/course/new/'+ params.userId, data, { 
			headers: authHeader()
		});
		console.log(response);
		return response;
	} catch(err) {
		// statements
		console.log(err);
	}
}

//'/classroom/course/new/'+ params.userId, data


//courses list
const getItems = async (data) => {
	try {
		const response = axiosInstance.get('/classroom/course/', data, { 
			headers: authHeader()
		});
		//console.log(response);
		return await response;
	} catch(err) {
		// statements
		console.log(err);
	}
}



//updating a course
const updateItems = async (data) => {
	try {
		const response = axiosInstance.put(`/classroom/course/${data.id}`, { 
			headers: authHeader()
		});
		//console.log(response);
		return await response;
	} catch(err) {
		// statements
		console.log(err);
	}
}



//deleting a course
const deleteItems = async (id) => {
	try {
		const response = axiosInstance.delete(`/classroom/course/${id}`, { 
			headers: authHeader()
		});
		//console.log(response);
		return await response;
	} catch(err) {
		// statements
		console.log(err);
	}
}



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