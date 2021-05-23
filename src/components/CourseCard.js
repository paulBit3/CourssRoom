import React, {useState} from 'react';




const CourseCard = (props) => {


	//method button to enroll in a course 
	const renderEnrollButton = () => {
		if (props.title === "") {
			return (
				<button className="ui disable button btn btn-fix">
					Course Not Avilable
				</button>
			)
		} else {
			return (
				<a href={props.title}>
					<button className="ui button btn btn-fix">
						Enroll
					</button>
				</a>
			)
		}
	}

	return (
		<div className="card">
			<div className=" d-card-hero image">
				<img src={props.image} alt="course_image" />
			</div>
			<div className="content">
				<div className="header card-header">
					{props.title}
				</div>
				<div className="description">
					<p>{props.description}</p>
				</div>
				<div className="instructor">
					<p>{props.instructor}</p>
				</div>
				<div className="created">
					<p><label htmlFor="created">{"Added: " + 
                        new Date(props.created).toDateString()}</label></p>
				</div>
			</div>
			<div className="extra content">
				{/*<a href={props.title} target="_blank">
									<button className="ui button">
										Enroll
									</button>
								</a>*/}

				{renderEnrollButton()}
            </div>
		</div>
	);
};

export default CourseCard;