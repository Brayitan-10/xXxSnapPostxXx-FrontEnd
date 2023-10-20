import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarStyles.css';
import { NavLink, } from 'react-router-dom';
//import { useState } from 'react'; useNavigate => en react-router-dom
import navLogo from '../../../img/xXxSnapPostxXx-Logo.jpeg';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='nav-container'>
        <Navbar.Brand href=""><img className='snap-logo' src={navLogo} alt="" /></Navbar.Brand>
        <Navbar.Brand href="" className='nav-title'>xXxSnapPostxXx</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"
            style={{ maxHeight: '100px', display: "flex", gap: "0.5rem" }}
          >
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Home{" "}
            </NavLink>
            <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Sobre Nosotros{" "}
            </NavLink>
          </Nav>
          <NavLink
            style={{ maxHeight: '100px', gap: "0.5rem", marginLeft: "2.41em" }}
            to="/signIn" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Sign In{" "}
          </NavLink>
          <NavLink
            style={{ maxHeight: '100px', gap: "0.5rem", marginLeft: "1em" }}
            to="/signUp" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Sign Up{" "}
          </NavLink>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;