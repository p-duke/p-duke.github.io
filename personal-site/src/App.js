import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import profilePic from '../images/profile.png';
import cabinPic from '../images/cabin.png';

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
  Row,
  Carousel
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

        <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img className="img-responsive center-block" width={500} height={400} alt="900x500" src={cabinPic}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={500} height={400} alt="900x500" src={cabinPic}/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={500} height={400} alt="900x500" src={cabinPic}/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

        <Grid fluid bsClass="container" className="bg-2">
          <h1>Resume</h1>
            {/* <Image rounded responsive src={profilePic} className="center-block" alt="profile-pic" /> */}
        </Grid>

      </div>
    );
  }
}

export default App;
