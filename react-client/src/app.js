import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

import Homepage from './components/pages/homePage.js'

import NavBar from './components/headerComponent/navBar.js';
import Footer from './components/footerComponent/footer.js';

import Projects from './components/pages/projects.js'
import Hobbies from './components/pages/hobbies.js'
import Traveling from './components/pages/traveling.js'

import downarrow from '../dist/images/downarrow.png';
//var downarrow = require('../dist/images/downarrow.png');


class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar />
          <Homepage />

          <div className="down-arrow">
            <img className="downarrow" src={require('../dist/images/downarrow.png')} width="40" alt="downarrow"/>
          </div>

          <h2 className = "heading" id="projects">Projects</h2>
            <Projects />
          <h2 className = "heading" id="traveling">Traveling</h2>
            <Traveling />
          <h2 className = "heading" id="hobbies">Hobbies</h2>
            <Hobbies />
          <h2 className="heading" id="footer">Contact me</h2>
            <Footer />
      </div>
    );
  }
}

export default App;
