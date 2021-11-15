import React from 'react';
import './Course.css';
import { Button } from "react-bootstrap";

const Course = (props) => {
    // console.log(props.course.id);
    const { course_name, instructor_name, number_of_student, price, thumbnailUrl } = props.course;
    return (
        <div className="course-section">
            <div className="course-pic">
                <img src={thumbnailUrl} alt="" />
            </div>
            <div className="course-info">
                <h5>{course_name}</h5>
                <p className="instructor"><small>{instructor_name}</small></p>
                <h6>{props.course.rating} ({number_of_student})</h6>
                <h5 className="price">${price}</h5>
                <Button onClick={() => props.handleEnrollNow(props.course)} className="mt-1" variant="primary">Enroll Now</Button>
            </div>
        </div>
    );
};
export default Course;

