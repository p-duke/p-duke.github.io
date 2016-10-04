import React, {Component} from 'react';
import {
  Grid,
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return(
    <Navbar inverse fixedTop className="navbar">
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Peter Duke</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="#">Profile</NavItem>
          <NavItem href="#">Experience</NavItem>
          <NavItem href="#">Portfolio</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Grid>
    </Navbar>
    );
  }
}

export default Navigation;
