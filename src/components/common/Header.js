import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function LoggedInNavbar (props) {
    return (
        <Nav pullLeft>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <LinkContainer to="/main">
               <NavItem eventKey={4}>Vehiculos</NavItem>
            </LinkContainer>
        </Nav>
    );
}

function LoggedOutNavbar (props) {
    return (
        <Nav pullRight>
            <NavItem href="/signup">
                <span className="glyphicon glyphicon-user"></span>
                <span>&nbsp;Sign Up</span>
            </NavItem>
            <NavItem href="/login">
                <span className="glyphicon glyphicon-log-in"></span>
                <span>&nbsp;Log in</span>
            </NavItem>
            <LinkContainer to="/about">About</LinkContainer>
        </Nav>
    );
}

class HeaderComponent extends Component {
  render() {
    let isLoggedIn = true;
    let navbarContent = null;

    if (isLoggedIn === true) {
        navbarContent = <LoggedInNavbar/>;
    } else {
        navbarContent = <LoggedOutNavbar/>;
    }
    
    return (
        <Navbar>
            <div className="container">
                <Navbar.Header>
                    <Navbar.Brand href="/">
                        <a >
                            <span className="glyphicon icon-cars"></span>
                            <span>Manejo de vehiculos RASE</span>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                {/*Part of the navbar that will collapse in mobile view*/}
                <Navbar.Collapse>
                    {navbarContent}
                </Navbar.Collapse>
            </div>
        </Navbar>
      )
  }
}

export default HeaderComponent; // Don’t forget to use export default!