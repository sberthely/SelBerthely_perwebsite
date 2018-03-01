import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

import Projects from './pages/projects.js'
import Hobbies from './pages/hobbies.js'
//import Traveling from './pages/traveling.js'
import Traveling from './pages/image_list.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [{loc:require("./images/Yosem1.png"), title: "Yosem1"},
               {loc:require("./images/Yosem2.png"), title: "Yosem2"}]
    };

  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <h2 className = "heading" id="projects">Projects</h2>
            <Projects />
          <h2 className = "heading" id="hobbies">Hobbies</h2>
            <Hobbies />
          <h2 className = "heading" id="traveling">Traveling</h2>
            <Traveling images = {this.state.images}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
