import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">

          <li className="nav-item nav-name"><a href="#">BSBG</a></li>
          <li className="nav-item nav-last"><a href="#footer" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#hobbies" className="nav-link">Hobbies</a></li>
          <li className="nav-item"><a href="#traveling" className="nav-link">Traveling</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
