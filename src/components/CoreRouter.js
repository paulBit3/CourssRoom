import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Courses from './Courses';
import CoursesList from './CoursesList';
import Greetings from './Greetings';
import GreetingsList from './GreetingsList';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Header from './Header';

/* CoreRouter component will keep all of the 
   custom views and help render our custom react component */



   //router method
   const CoreRouter = () => {
   	   return (
   	   		<div>
                  <Header/>
   	   			<Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/classroom/signup" component={Signup} />
                     <Route path="/classroom/login" component={Login} />
                     <Route path="/classroom/course/new/" component={Courses} />
   	   				<Route path="/classroom/greetings/add" component={Greetings} />
                     <Route path="/classroom/course" component={CoursesList} />
                     <Route path="/classroom/greetings" component={GreetingsList} />
   	   			</Switch>
   	   		</div>
   	   )
   }

   export default CoreRouter;