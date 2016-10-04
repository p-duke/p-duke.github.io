import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Footer from './Footer';

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
  Carousel,
  Media,
  Thumbnail
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
              <NavItem href="#">Profile</NavItem>
              <NavItem href="#">Experience</NavItem>
              <NavItem href="#">Portfolio</NavItem>
              <NavItem href="#">Contact</NavItem>
            </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>

        {/* Header Section */}
        <Jumbotron id="hero" className="vertical-center">
          <div id="hero-overlay"></div>
          <Grid className="text-center">
          <div id="hero-text" className="text-center">
            <h1 className="text-uppercase margin">Peter Duke</h1>
            <hr />
            <h2 className="margin">Full Stack Developer </h2>
            {/* <h3 className="margin">Designer by Night</h3>
            <hr className="thick-line"/> */}
          </div>
          </Grid>
        </Jumbotron>

        <Portfolio />

        <About />


        <Experience />

        <Footer />

        <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
            <a className="btn btn-primary" href="#page-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>

      </div>
    );
  }
}

export default App;






{/* <div id="main">
            <div id="atom">
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div id="nucleus"></div>
            </div>
        </div> */}
