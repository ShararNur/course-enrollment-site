import React from 'react';
import data from '../../fakeData/data.json';
import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Main.css'
import PriceCart from '../PriceCart/PriceCart';

const Main = () => {
    // console.log(data);
    const [courses, setCourses] = useState([]);
    const [enrollCourses, setEnrollCourses] = useState([]);

    useEffect(() => {
        setCourses(data);
    }, [])

    const handleEnrollNow = (clickToEnroll) => {
        // console.log("clicked", enrolledCourse);
        const newCourses = [...enrollCourses, clickToEnroll];
        setEnrollCourses(newCourses);
    }
    return (
        <div className="main-section">
            <div className="course-list">
                {
                    courses.map(course => <Course course={course} handleEnrollNow={handleEnrollNow} key={course.id}></Course>)
                }
            </div>
            <div className="price-cart">
                <PriceCart enrollCourses={enrollCourses}></PriceCart>
            </div>
        </div>
    );
};

export default Main;