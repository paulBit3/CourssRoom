import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";

//import { create, isAuthenticated } from '../services/GreetingAPI';
import { create } from '../services/api-course';
import { getCurrentUser } from '../services/api-user';

//sweet alert
import Swal from 'sweetalert2';
window.Swal = Swal;
/*The Greetings component will just display GretingsList components*/

const Courses = () => {
	//initialize state
	const [state, setState] = useState({
		id: null,
		title: "",
		description:"",
		instructor: '',
		image: '',
		error: ''
	});
	//const [values, setValues] = useState(initialCourseState);

	const [submitted, setSubmitted] = useState(false);
	const [redirect, setRedirect] = useState(false);

	//const userID = getCurrentUser().user.id;
    //console.log (currentUser.user.username);
 

    
    //this method will handle photo and input 
    const handleChange = name => event => {
       const value = name === 'image'
       ? event.target.files[0]
       :event.target.value
       setState({ ...state, [name]: value })

    }

    //console.log(userID);



	//this function takes input value of the form state and send POST request to the web API
	const onSubmit = async(e) => {
	 	e.preventDefault();
	 	const instructor = getCurrentUser().user.id;
	 	// console.log(instructor)


	 	const courseData = new FormData();
	 	state.title && courseData.set('title', state.title);
	 	state.description && courseData.set('description', state.description);
	 	courseData.set('instructor', instructor);
	 	state.image && courseData.append('image', state.image);
        
	 	//const user = JSON.parse(localStorage.getItem('user'));

	 	await create({
	 		userId: instructor
	 		}, courseData)
		 	            .then((response) => {
		 	            	if (response.data) {
		 	            		Swal.fire({
		 	            			title: 'Course successfuly created!',
		 	            			icon: 'success',	
	                                timer: 1000,
		 	            		})
		 	            		console.log(response.data);
		 	            		setSubmitted(true);
		 	            		window.location.reload();
								setRedirect(true);

		 	            	}
		 	            })
					 	.catch((error => {
					 		console.log(error.response.data);
					 	}));
	}

	//redirect the user to the view, when successful shop creation
    // if (values.redirect) {
    //     return (<Redirect to = {'/classroom/cours'} />)
    // }

	//reinitialize state to redisplay the form
	// const newCourse = () => {
	//  	setValues(initialCourseState);
	// };


	return (
		<div>
			<div className="submit-form">
				    <div className="card bg-light">
				        <div className="card-header">Create New Course</div>
				        	<div className="card-body"> 
						   	 	<div className="form-group">
						   	 		<label htmlFor="title">Title</label>
						   	 		<input 
						   	 		  type="text"
						   	 		  className="form-control"
						   	 		  id="title"
						   	 		  required
						   	 		  value={state.title}
						   	 		  onChange={handleChange('title')}
						   	 		  name= "title"
						   	 		/>
						   	 	</div>

						   	 	<div className="form-group">
						   	 		<label htmlFor="description">Description</label>
						   	 		<textarea 
						   	 		    id="description"
									    rows="5" cols="33"
									    className="form-control"
									    required
						   	 		  	value={state.description}
						   	 		  	onChange={handleChange('description')}
						   	 		  	name= "description"
									/>

						   	 	</div>

						   	 	<div className="form-group">
						   	 		<input 
						   	 		  type="hidden"
						   	 		  id="instructor"
						   	 		  value={state.instructor}
						   	 		  name= "instructor"
						   	 		/>
						   	 	</div>
						   	 	
						   	 	<div className="form-group">
						   	 		<label htmlFor="image"></label>
						   	 		<span>{state.image ? state.image.name : ''}</span>
						   	 		<input 
						   	 		  name= "image"
						   	 		  type="file"
						   	 		  multiple
						   	 		  className="form-control"
						   	 		  id="image"
						   	 		  accept="image/*"
						   	 		  onChange={handleChange('image')}
						   	 		  required
						   	 		/>
						   	 	</div>
						   	 	
						   	</div>
				    		<button 
						   	 	onClick={onSubmit}
						   	 	className="btn btn-success">
						   	 	CREATE COURSE
						   	</button></div>
			</div>
		</div>

	);
};

export default Courses;
