import React from 'react';
import logo from '../../logo.svg';
import * as ReactBootstrap from "react-bootstrap";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootstrap.Container>
                    <ReactBootstrap.Navbar.Brand href="#home"><img src={logo} alt="" /></ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="me-auto">
                            <ReactBootstrap.Nav.Link href="#features">Categories</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="#pricing">Udemy Business</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.NavDropdown title="Teach on Udemy" id="collasible-nav-dropdown">
                                <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Divider />
                                <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                            </ReactBootstrap.NavDropdown>
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Nav>
                            <ReactBootstrap.Nav.Link href="#deets" className="login">Log In</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
                                <ReactBootstrap.Button variant="primary">Join for Free</ReactBootstrap.Button>{' '}
                            </ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>
        </div>
    );
};

export default Header;