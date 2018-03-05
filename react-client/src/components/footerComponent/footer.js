import React, { Component } from 'react';
import BSBG from '../../../dist/images/BSBG.jpg'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div> </div>
        <div className="footer-1">
          <img src={BSBG} />
        </div>
        <div className="footer-2">
          <h3>Contact</h3>
          <p><a href="mailto:sberthely@berkeley.edu?Subject=Hello%20there!" target="_top"> sberthely@berkeley.edu</a></p>
          <p><a href="https://linkedin.com/in/sberthely" target="_blank" rel="noopener noreferrer" className="footer-link"> Linkedin</a></p>
          <p><a href="https://github.com/sberthely" target="_blank" rel="noopener noreferrer"> Github</a></p>
          <p>Check out this website repo <strong><a href="https://github.com/sberhely/SelBerthely_perwebsite" target="_blank" rel="noopener noreferrer">here on github</a></strong> © 2017</p>
        </div>
      </div>
    );
  }
}

export default Footer;
