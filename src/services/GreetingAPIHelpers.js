import http from '../apis/apiservice';


/* service that uses axios object above to send HTTP requests.*/

class GreetingEndpointService {
	getAll() {
		return http.get('/classroom/greeting');
	}

	get(id) {
		return http.get(`/classroom/greeting/${id}`);
	}

	create(data) {
		return http.post('/classroom/greeting/', data);
	}

	update(id, data) {
		return http.put(`/classroom/greeting/${id}`, data);
	}

	delete(id) {
		return http.delete(`/classroom/greeting/${id}`);
	}

	deleteAll() {
		return http.delete(`/classroom/greeting`);
	}

	findByID(id) {
		return http.get(`/classroom/greeting/${id}`);
	}
}

export default new GreetingEndpointService();