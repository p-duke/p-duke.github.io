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
                  {/* <Media className="col-md-4">
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
                  </Media> */}
                  <div className="container-fluid">
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
                  </div>
                    <Media className="col-lg-12">
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
                        <br/>
                        <button type="button" className="btn btn-info btn-lg">
                          <span className="glyphicon glyphicon-save-file" aria-hidden="true"></span> Download Resume
                        </button>
                    </div>
                    <div className="col-md-4 text-center">
                        <Image width={246} height={246} src={require("../images/headshot.jpg")} circle />
                        {/* <img className="img-responsive img-circle" src={require("../images/headshot.jpg")} alt="My headshot"/> */}
                    </div>
                    <div className="col-md-4">
                        <h3>Details</h3>
                        <p>
                          <strong>Name:</strong>
                          <br/>
                          <i className="glyphicon glyphicon-user" aria-hidden="true"></i> Peter Duke
                          <br/>
                          <br/>
                          <strong>Born:</strong>
                          <br/>
                          <i className="glyphicon glyphicon-home" aria-hidden="true"></i> San Francisco, CA
                          <br/>
                          <br/>
                          <strong>Location:</strong>
                          <br/>
                          <i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i> Brooklyn, NY
                          <br/>
                          <br/>
                          <strong>Interests:</strong>
                          <br/>
                          <ul className="no-bullets">
                            <li><i className="fa fa-pencil-square-o"></i> Design</li>

                            <li><i className="glyphicon glyphicon-book" aria-hidden="true"></i> Reading</li>

                            <li><i className="fa fa-coffee"></i> Coffee</li>

                            <li><i className="glyphicon glyphicon-cutlery" aria-hidden="true"></i>  Cooking
                            </li>

                            <li><i className="glyphicon glyphicon-road" aria-hidden="true"></i>  Adventures</li>
                          </ul>
                        </p>

                    </div>
                </div>
            </div>
        </section>


        <section className="bg-experience" id="Experience">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Experience</h2>
                        <hr className="star-beige" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3><i className="fa fa-laptop"></i> Skills</h3>
                        <hr className="thin-line-primary"/>
                    </div>
                </div>
                <div className="row">
                  <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>skill set col 1</li>
                    <li>skill set col 1</li>
                    <li>skill set col 1</li>
                  </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>skill set col 1 star</li>
                    <li>skill set col 1 star</li>
                    <li>skill set col 1 star</li>
                  </ul>
                  </div>
                  <div className="clearfix visible-xs-block"></div>
                  <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>skill set col 2</li>
                    <li>skill set col 2</li>
                    <li>skill set col 2</li>
                  </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>skill set col 2 star</li>
                    <li>skill set col 2 star</li>
                    <li>skill set col 2 star</li>
                  </ul>
                  </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3><i className="fa fa-pencil"></i> Careers</h3>
                        <hr className="thin-line-primary"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3><i className="glyphicon glyphicon-education" aria-hidden="true"></i> Education</h3>
                        <hr className="thin-line-primary"/>
                    </div>
                </div>
            </div>
        </section>

        <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>3481 Melrose Place
                            <br/>Beverly Hills, CA 90210</p>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>About Freelancer</h3>
                        <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Peter Duke 2016
                    </div>
                </div>
            </div>
        </div>
    </footer>


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
