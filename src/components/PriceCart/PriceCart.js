import React from 'react';
import { Button } from "react-bootstrap";
import './PriceCart.css'

const PriceCart = (props) => {
    const enrollCourses = props.enrollCourses;
    const totalPrice = enrollCourses.reduce((sum, course) => sum + course.price, 0)
    return (
        <div className="price-cart">
            <p className="fs-4 text-start">Total:</p>
            <p className="fs-5 text-start">{enrollCourses.length} Courses in Cart</p>
            <h1 className="fw-bold text-start">${totalPrice.toFixed(2)}</h1>
            <Button className="me-5 mt-2" variant="primary" size="lg" active>Checkout</Button>
        </div>
    );
};

export default PriceCart;