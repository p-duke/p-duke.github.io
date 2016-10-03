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
            <hr className="thick-line"/>
            <h2 className="margin">Web Developer </h2>
            {/* <h3 className="margin">Designer by Night</h3>
            <hr className="thick-line"/> */}
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

        {/* Portfolio Section */}
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Portfolio</h2>
                        <hr className="star-primary" />
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-offset-3 portfolio-item">
                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={require('../images/mentor_search.png')} className="img-responsive" alt="" />
                        </a>
                    </div>
                </div> */}
                <div className="row">
                  <Media className="col-md-4">
                      <Media.Left align="middle">
                        <div className="portfolio-item">
                           <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                               <div className="caption">
                                   <div className="caption-content">
                                       <i className="fa fa-search-plus fa-3x"></i>
                                   </div>
                               </div>
                               <img className="img-responsive" src={require('../images/mentor_search.png')} alt=""/>
                           </a>
                        </div>
                      </Media.Left>
                  </Media>
                    <Media className="col-md-8">
                      <Media.Body>
                        <Media.Heading>Devconnect</Media.Heading>
                        <p>Selected as team lead for Devconnect, a hub for Dev Bootcamp graduates to connect and flourish in its thriving community plus extending the culture of learning through mentoring. An alumni can contribute to DBC's 2000+ community by posting any relevant information to our extensive forums section. The top trending and most recent forum posts will appear in a tabbed content section on the homepage. If an alumni decides to become a "mentor" they can tutor students who are seeking specific skill sets that the mentor has and later be endorsed for those skills earning badges based on a number of endorsements. The top mentors will appear on the homepage celebrating their achievements in the community. The application was built with Ruby on Rails, Python, Flask, React.js, HTML5, and Bootstrap CSS.</p>
                      </Media.Body>
                    </Media>
                </div>
            </div>
        </section>

        {/* <Grid fluid bsClass="container" className="bg-2">
          <h1>Contact</h1>
            <Image rounded responsive src={profilePic} className="center-block" alt="profile-pic" />
        </Grid> */}

        <section className="bg-about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Profile</h2>
                        <hr className="star-yellow" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h3>About me</h3>
                        <p>A former marketer turned full stack developer after working in the tech industry for four years. During that time helped clients and companies reach new customers with their brand. Took the leap into web development after pursuing programming for the past two years and never growing tired of learning a new concept or language. Now looking to have a greater impact by building software that enriches people's quality of life.</p>
                    </div>
                    <div className="col-md-4">
                        <Image src={require("../images/headshot.jpg")} responsive circle />
                    </div>
                    <div className="col-md-4">
                        <h3>Details</h3>
                        <p>
                          <strong>Name:</strong>
                          <br/>
                          Peter Duke
                          <br/>
                          <br/>
                          <strong>Location:</strong>
                          <br/>
                          Brooklyn, NY
                          <br/>
                          <br/>
                          <strong>Inspiration:</strong>
                          <br/>
                          Albert Einstein, Michael Faraday, Frank Gehry, William Gibson, Richard Feynman, Bill Nye, Ray Kurzweil and the list goes on...
                          <br/>
                        </p>
                        <div>
                        <a href="#">
                          <i class="fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i class="fa-linkedin-square" aria-hidden="true"></i>
                        </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>

      </div>
    );
  }
}

export default App;
