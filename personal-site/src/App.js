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


        {/* Carousel Section */}
        {/* <div className="container-fluid">
          <Carousel>
            <Carousel.Item>
              <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/Homepage.png')}/>
              <Carousel.Caption className="carousel-text">
                <div className="overlay">
                  <h3>Homepage</h3>
                  <p>See what's trending including current top mentors.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/mentor_search.png')}/>
              <Carousel.Caption className="carousel-text">
                <div className="overlay">
                  <h3>Mentor Search</h3>
                  <p>Search for mentors that have skills you wish to learn.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-responsive center-block" width={900} height={500} alt="900x500" src={require('../images/user-profile.png')}/>
              <Carousel.Caption className="carousel-text">
                <div className="overlay">
                  <h3>Profile Page</h3>
                  <p>Create and Edit your profile including skills, bio, and goals.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div> */}

        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Portfolio</h2>
                        <hr className="star-primary" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/cabin.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/cake.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/circus.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/game.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/safe.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/submarine.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <Grid fluid bsClass="container" className="bg-2">
          <h1>Resume</h1>
            {/* <Image rounded responsive src={profilePic} className="center-block" alt="profile-pic" /> */}
        </Grid>

      </div>
    );
  }
}

export default App;
