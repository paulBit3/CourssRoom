import React, {useState} from 'react';

//import { create, isAuthenticated } from '../services/GreetingAPI';
import { create } from '../services/api-greeting';
import { getCurrentUser } from '../services/api-user';

/*The Greetings component will just display GretingsList components*/

const Greetings = () => {
	//initialize state
	const initialGreetingState = {
		id: null,
		content: "",
		userID: ""
	};
	const [values, setValues] = useState(initialGreetingState);

	const [submitted, setSubmitted] = useState(false);

	const currentUser = getCurrentUser()
    //console.log (currentUser.user.username);
 

	//this function takes the new value in the input and sets it as the state
	const handleInputChange = name => event => {
        setValues({
            ...values, [name]: event.target.value,
        })
    };

	 //this function takes input value of the form state and send POST request to the web API
	const onSubmit = async(e) => {
	 	e.preventDefault();
	 	const greeting = {
	 		content: values.content || undefined
	 	}
        //console.log (greeting);
	 	await create(greeting).then((response) => {
    		setSubmitted(true);
			
    	    alert("Greeting successfuly created!");
			
    			
            window.location.reload();
            newGreeting();
        });
	}

	 //reinitialize state to redisplay the form
	 const newGreeting = () => {
	 	setValues(initialGreetingState);
	 	setSubmitted(false);
	 };


	return (
		<div className="submit-form">
			{submitted ? (
				<div>
					<div 
						className="alert alert-succes alert-dismissible fade show"
						role="alert"
					>
					Greeting Created!
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<button 
						className="btn btn-success"
						onClick={newGreeting}
					>
					 Create
					</button>
				</div>
			) : (
			    <div>
			        <div className="card bg-light">
			        	<div className="card-header">Create a greeting</div>
			        	<div className="card-body"> 
					   	 	<div className="form-group">
					   	 		<label htmlFor="content">Message</label>
					   	 		<input 
					   	 		  type="text"
					   	 		  className="form-control"
					   	 		  id="content"
					   	 		  required
					   	 		  value={values.content}
					   	 		  onChange={handleInputChange('content')}
					   	 		  name= "content"
					   	 		/>
					   	 	</div>
				   	 	</div>
			   	 	
			   	 	<button 
			   	 	   onClick={onSubmit}
			   	 	   className="btn btn-success">
			   	 	   CREATE GREETING
			   	 	</button></div>
			    </div>
			)}
		</div>
	);
};

export default Greetings;
