import axiosInstance, { setNewHeaders } from '../apis/apiservice';
import authHeader from './auth-header';



const signin = async (data) => {
	const response = await axiosInstance.post('/auth/', data, { 
			headers: authHeader()
		});
	setNewHeaders(response);
	if (isAuthenticated()) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
	console.log(response.data);
	return response.data;
	
}


//refresh token api
export async function refreshToken(refresh) {
	const response = await axiosInstance.post('/refresh/', {
		refresh
	});
	setNewHeaders(response);
	return response;
}

const isAuthenticated = () => {
	const token = localStorage.getItem('access_token');
	return token;
}

const signout = async () => {
	try {
		//localStorage.removeItem('access_token');
		//localStorage.removeItem('refresh_token');
		localStorage.removeItem("user")
	} catch(err) {
		// statements
		console.log(err.stack);
	}
}



export {
	signin,
	signout,
};

