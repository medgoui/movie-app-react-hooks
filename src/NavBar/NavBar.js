import React from 'react';
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../cinema.svg';
const NavBar = () => {

    return(
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <img
        alt="Pop Corn in red box"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
            />{' '}
            Movie App
    </Navbar.Brand>
    </Navbar>
    </>
    );
}

export default NavBar;