import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { getItems } from '../services/api-course';

import CourseCard from './CourseCard';

//sweet alert
import Swal from 'sweetalert2';
window.Swal = Swal;

/*The Greetings component will just display GretingsList components*/


//our copyright function
function Copyright(){
    return (
        <div className="container-fluid" align="center">
            {'Copyright ©'}
            <Link color="inherit" to="/">Oficy Inc.
            </Link>{''}
            {new Date().getFullYear()}
            {'.'}
        </div>
    );
}




const CoursesList = () => {

	const [courseInfo, setCourseInfo] = useState([]);


	const fetchGreetings = async() => {
		getItems()
				.then((response) => {
					
					if (response.data) {
						setCourseInfo(response.data)
						Swal.fire({
							title: 'Loading courses from data base..',
							allowEscapeKey: false,
				 	        allowOutsideClick: false,
				 	        timer: 2000,
			                onOpen: () => {
			                    Swal.showLoading();
			                },
				 	    }).then(
				 	      () => {},
				 	      (dismiss) => {
				 	      	if (dismiss === 'timer') {
				 	      		Swal.fire({
				 	      			title: 'Completed!',
				 	      			type: 'success',
							        timer: 2000,
							        showConfirmButton: false
				 	      		})
				 	      	}
				 	      }
				 	    )
				 	    //console.log(response.data);
				 	}
				})
				.catch((error => {
					console.log(error.response.data);
				}));
		
	};


	// Function will returns a div containing all our 6 courses cards
	const CourseCards = () => {
		return (
			<div className="ui 3 stackable raised cards">
				{courseInfo.map(course => {
					if(!course) {
						return <div> Loading..</div>
					} else {
						return (
							<CourseCard
								title={course.title}
								description={course.description}
								instructor = {course.instructor}
								created = {course.created}
								image = {course.image}
								key = {course.title}
							/>
						)
					}
				})}
			</div>
		)
	};


	useEffect(() => {
		fetchGreetings();
	}, []);


	return (
		<>
			<div className="ui center aligned container-fluid">
				<h1 class="display-3 text-center text-dark my-3">All Courses</h1>
				<div class="container fluid pb-3" id="courses">
					<div class="row">
					 {CourseCards()}
					</div>
				 
				</div>
				
			</div>
			<br/>
			< Copyright />
		</>

	);
};

export default CoursesList;
