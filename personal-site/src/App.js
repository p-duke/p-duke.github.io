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
      <Navbar inverse fixedTop>
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
        {/* <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron> */}

        {/* Header Section */}
        <Grid fluid bsClass='container' className="container-fluid bg-1 text-center wrapper">
            <h3 className="margin">Who Am I?</h3>
            <Image rounded responsive src={profilePic} className="center-block" alt="profile-pic" />
            <h3>I'm an adventurer</h3>
        </Grid>



      </div>
    );
  }
}

export default App;
