import React, { useState } from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import *as qs from 'qs';
// import apiservice from '../apis/apiservice';
//import AuthService from '../services/AuthServiceHelper';
//import { obtainToken, isAuthenticated } from '../services/AuthServiceHelper';
import { signin } from '../services/api-auth';





const Login = withRouter(({ history }) => {
	const [values, setValues] = useState({
		username: '',
		password: '',
		//loggedInStatus: NOT_LOGGED_IN,
		loading: false,
		redirect: false,
		error: {},
	});

	const handleChange = name => event => {
        setValues({
            ...values, [name]: event.target.value,
        })
    };


    // takes the input value from the state
    const login = async (e) => {
    	//alert("You're successfuly login!")
    	e.preventDefault();
    	setValues({
    		loading: true
    	})
    	const user = {
    		username: values.username || undefined,
    		password: values.password || undefined
    	}
        console.log(user)
    	try {

    		await signin(user).then(
                () => {
                    history.push('/classroom/greetings/add');
                    window.location.reload();
                },
                (error) => {
                    setValues({
                        loading: false
                    });
                });
    		//loggedInStatus: "LOGGED_IN"
            console.log(signin(user))
    	} catch(e) {
    		// statements
    		console.log(e);
    	}
    	//alert("You're" + loggedInStatus + "!");
    };
    


    return (
    	<div className="col-md-12">
    	  <div>
    	    <img
            	src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            	alt="profile-img"
            	className="profile-img-card"
          	/>
    		<form className="form-signin" onSubmit={ login }>
    		    <h3 className="form-signin-heading">Sign In</h3>
    		    <br/>
    		    <div className="card-body">
	    			<div className="form-group">
	    			    <label htmlFor="username">Username</label>
		    				<input
		    				  type="text"
		    				  name="username"
		    				  className="form-control"
		    				  value={values.name}
		    				  onChange={handleChange('username')}
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
		    				  onChange={handleChange('password')}
		    				  required
		    				/>
	    			</div>
	    			<div className="form-group">
                        {values.loading && (
	    					<span className="spinner-border spinner-border-sm"></span>
	    				)}
	    			    <input className="btn-info btn-block btn-lg" type="submit" value="Login" />
	    				
	    			</div>
    			</div>
    		</form>
    		<div className="text-center">
		    	Not registered yet? 
		    	<Link to="/classroom/signup/">
		    		Register
                </Link>
		    </div>
		   </div>
    	</div>
    );
})

export default Login;
