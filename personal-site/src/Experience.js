import React, {Component} from 'react';

class Experience extends Component {
  render() {
    return(
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
    );
  }
}

export default Experience;
