/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
//import PropTypes from "prop-types";


//import AuthService from '../services/AuthServiceHelper';
// import { signUp } from '../services/AuthServiceHelper';

import { create } from '../services/api-user';






const Signup = () => {
	const history = useHistory();
	const [values, setValues] = useState({
		username: '',
		password: '',
		open: false,
		redirect: false,
		successful: false,
		message: '',
		error:'',
	});
    const [successful, setSuccessful] = useState(false);
  	const [message, setMessage] = useState('');

	const handleInputChange = name => event => {
		setValues({ 
			...values, [name]: event.target.value,
		})
	};

	// takes the input value from the state
	const signup = async (e) => {
		e.preventDefault();
		const user = {
    		username: values.username || undefined,
    		password: values.password || undefined
    	}
		//const { username , password } = values;

		try {

    		await create(user).then((response) => {
    			setMessage(response.data.message);
    			setSuccessful(true);

    			alert("You're successfuly registered!")
				//console.log (user)
    			history.push('/classroom/login');
                window.location.reload();

    			
    		}, (error) => {
    			setSuccessful(false);
    		});
    		

    	} catch(error) {
    		console.log(error.stack);
    		//setValues({ ...values, error: res.data })
    	}
	};

	return (
		<div className="col-md-12">
		    <div>
    	       <img
            	  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            	  alt="profile-img"
            	  className="profile-img-card"
          	   />
				<form className="form-signin" onSubmit={ signup }>
	    		    <h3 className="form-signin-heading">Sign Up</h3>
	    		    <br/>
	    		    <div className="card-body">
		    			<div className="form-group">
		    			    <label htmlFor="username">Username</label>
			    				<input
			    				  type="text"
			    				  name="username"
			    				  className="form-control"
			    				  value={values.name}
			    				  onChange={handleInputChange('username')}
			    				  required
			    				/>
		    			</div>
		    			<div className="form-group">
		    				<label htmlFor = "password">Password</label>
			    				<input 
			    				  type="password"
			    				  name="password"
			    				  className="form-control"
			    				  value={values.password}
			    				  onChange={handleInputChange('password')}
			    				  required
			    				/>
		    			</div>
		    			<div className="form-group">
		    				<input className="btn-info btn-block btn-lg" type="submit" value="Sign Up" />
		    			</div>
	    			</div>
	    				
	    		</form>
	    		<div className="text-center">
			    	Have an account? 
			    	<Link to="/classroom/login/">
			    		Login
	                </Link>
			    </div>
			</div>
		</div>
	);
}

export default Signup;
