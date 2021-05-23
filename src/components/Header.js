import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

//import accessToken from '../apis/apiservice';
//import { isAuthenticated, logoutUser } from '../services/AuthServiceHelper';

import { signout } from '../services/api-auth';
import { getCurrentUser } from '../services/api-user';
//import GreetingsList from './GreetingsList';
import renderGreetings from './GreetingsList';






const Header = withRouter(({ history }) => {

	const currentUser = getCurrentUser()
    const greetingList = renderGreetings()




	const handleLogout = async () => {
		await signout();
    	history.push('/classroom/login');
    	window.location.reload();
    	
    };


	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-custom navbar-light bg-light ">
			    <div className="container-fluid">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">
			             CourssRoom 
			            </a>
			        </div>

				    <div className="navbar-nav">
				        <ul className="navbar-nav ml-auto">
				        	<li className="nav-item active">
				        		<div className="nav-link">
				        			<Link to={`/`}>Home</Link> 
				        			 <span className="sr-only">(current)</span>
				        		</div>
				        	</li>
				        </ul>
				        {currentUser ? (
				        	<ul className=" navbar-nav navbar-right ">
				        	    <li className="nav-item dropdown">
				                    <div className="nav-link 
				                       dropdown-toggle page-scroll"
				                       id="navbarDropdown"
				                       data-toggle="dropdown" 
				                       role="button" 
				                       aria-haspopup="true" 
				                       aria-expanded="false">{greetingList},</div>
				                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					                    <div className="dropdown-items-divide-hr"></div>
					                      <div className="dropdown-item">
					                      	<Link to={"/classroom/greetings/add"} className="title nav-link">Create Greeting</Link></div>
					                      <div className="dropdown-item">
					                      	<Link to={"/classroom/greetings"} className="title nav-link">Greetings</Link></div>
					                      <div className="dropdown-item">
					                      	<Link to={"/classroom/course/new/"} className="title nav-link">Create Course</Link></div>
					                      <div className="dropdown-item">
					                      	<Link to={"/classroom/course"} className="title nav-link">Courses</Link></div>
				                    </div>
				                </li>
				        	    <li className="nav-item">
					        	    <strong> 
					        	    	<Link to={"/"} className="title nav-link">
					        	    	   	{currentUser.user.username} 
					        	    	</Link>
					        	    </strong>
					        	</li>

					        	<li className="nav-item">
					        	    <div className="nav-link ">
					        	    	<Link to="/classroom/logout" onClick={handleLogout}>Logout</Link>
					        	    </div>
					        	</li>
				        	</ul>
				        	): (
					        <ul className=" navbar-nav navbar-right ">
					        	<li className="nav-item">
					        	    <div className="nav-link">
					        	    	<Link to="/classroom/login">Login</Link>
					        	    </div>
					        	</li>
					        </ul>
				        )}
				    </div>
			    </div>
			</nav>
		</div>
	);
})

 export default Header;