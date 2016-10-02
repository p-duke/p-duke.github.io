import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import profilePic from '../images/profile.png';
import {
  Grid,
  Navbar,
  Jumbotron,
  Button,
  NavItem,
  Nav,
  NavDropdown,
  MenuItem,
  Image,
  Row
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
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
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>

        {/* Header Section */}
        <Jumbotron id="hero">
          <div id="hero-overlay"></div>
          <Grid fluid className="text-center">
          <div className="text-center">
            <h1 className="margin">Peter Duke</h1>
            <h2 className="margin">Web Developer</h2>
          </div>
          </Grid>
        </Jumbotron>

          <Grid fluid bsClass="container" className="bg-2">
            <h1>Resume</h1>
            {/* <Image rounded responsive src={profilePic} className="center-block" alt="profile-pic" /> */}
          </Grid>

          <Grid fluid bsClass="container" className="bg-4">
            <h1>Portfolio</h1>
          </Grid>
      </div>
    );
  }
}

export default App;
