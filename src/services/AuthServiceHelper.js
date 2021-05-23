//import http from '../apis/apiservice';

import axiosInstance, { setNewHeaders } from '../apis/apiservice';




//register api method
// export async function signUp(data) {
// 	const response = await axiosInstance.post('/users/register/', data);
// 	localStorage.setItem('user', JSON.stringify(response.data));
// 	console.log(response);
// 	return response;
// }




//login api method
export async function loginUser(data) {
	try {
		const response = await obtainToken(data);
		return response;
	} catch(e) {
		// statements
		console.log("Cannot get token");
	}
}


//obtaining Token
export async function obtainToken(data) {
	const response = await axiosInstance.post('/auth/', data);
	setNewHeaders(response);
	console.log(response);
	return response;
}

//refresh token api
export async function refreshToken(refresh) {
	const response = await axiosInstance.post('/refresh/', {
		refresh
	});
	setNewHeaders(response);
	return response;
}


//remove token when user logout
export async function logoutUser(accessToken) {
	localStorage.removeItem('access_token');
	localStorage.removeItem('refresh_token');
}

//authentication method
export const isAuthenticated = () => {
	const token = localStorage.getItem('access_token');
	return token;
}

//getting current user
/*export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  }*/



// class AuthService {
// 	create(data) {
// 		return http.post('/auth/', data);
// 	};

// 	create_user(data) {
// 		return http.post('/users/create/', data);
// 	}
// }

// export default new AuthService();
