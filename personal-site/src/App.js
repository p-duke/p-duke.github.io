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

        <Jumbotron>
          <Grid fluid className="parallax text-center">
          <div className="text-center">
            <h1 className="margin title">Peter Duke</h1>
            {/* <Image rounded responsive src={profilePic} className="center-block" alt="profile-pic" /> */}
            <h2 className="margin subhead">Web Developer</h2>
          </div>
          </Grid>
          <div className="overlay"></div>
        </Jumbotron>
        <Grid fluid bsClass='container' className="text-center">
          <p>Here's something else</p>
        </Grid>
      </div>
    );
  }
}

export default App;
