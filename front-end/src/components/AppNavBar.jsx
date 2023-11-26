import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap"
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mern Crud Project</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">StudentList</NavLink>
            <NavLink className="nav-link" to="/save">CreateStudent</NavLink>
          </Nav>
        </Container>
        </Navbar>
        </>
    );
};

export default AppNavBar;