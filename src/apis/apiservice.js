import React from 'react';
import axios from 'axios';



// Our api endpoint
/*We’re using axios because 
it allows us to define some parameters 
for certain API requests so that 
we don’t have to repeat much code*/

const accessToken = localStorage.getItem('access_token');
const API_URL = 'http://localhost:8000/api';

const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: accessToken ? 'JWT' + accessToken: null,
    	'Content-type': 'application/json',
    	'Accept': 'application/json'
    }
});

export function setNewHeaders(response) {
	axiosInstance.defaults.headers.common['Authorization'] = 'JWT' + response.data.access;
	localStorage.setItem("access_token", response.data.access);
	localStorage.setItem("refresh_token", response.data.refresh);
}


export default axiosInstance;