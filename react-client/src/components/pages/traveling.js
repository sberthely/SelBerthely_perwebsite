import React, { Component } from 'react';
//import ImageListItem from './image_list_item';
import japan from '../../../dist/images/Japan.png';

class Traveling extends Component {
  render() {
    return (
      <div className="Traveling section flex-container">
      <div className="item">
          <img src={japan} className="thumb"/>
          <div className="traveling-overlay">
            <div className="text">
              <h3>Japan Journey</h3>
              <p><strong>Summer 2017</strong></p>
              <p>Tokio, Kyoto, Hiroshima, and Nara</p>
              <p>
              <a href="https://www.facebook.com/media/set/?set=a.10155534211069739.1073741838.688204738&type=1&l=484b49a95b" target="_blank" rel="noopener noreferrer">Check my FB Photos  <i className="fa fa-external-link"></i></a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={japan} className="thumb"/>
          <div className="traveling-overlay">
            <div className="text">
              <h3>Yosemite Journey</h3>
              <p><strong>Winter 2017</strong></p>
              <p>Yosemite National Park</p>
              <p>
              <a href="https://www.facebook.com/media/set/?set=a.10155534211069739.1073741838.688204738&type=1&l=484b49a95b" target="_blank" rel="noopener noreferrer">Check my FB Photos  <i className="fa fa-external-link"></i></a>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Traveling;

//
// <p className="traveling-item">Matt comes from <strong>humble beginnings</strong> in the countryside of <a href="https://en.wikipedia.org/wiki/Mountain_Lake,_New_Jersey" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Warren County, New Jersey <i className="fa fa-external-link"/></a>. <strong>After studying earth science and education</strong>, Matt became a teacher in New York City. He spent <strong>seven years teaching science</strong> to students in grades 8 - 12. Students generally agreed that his class was <strong>'lit'.</strong> Unfortunately, Matt was so <strong>dedicated</strong> to his career, doing everything from team leader to Regents Coordinator, that he ran out of opportunities -- <strong>so he began to look elsewhere</strong> and started coding. He immediately <strong>fell in love</strong>.</p>
// <p className="traveling-item">As a <strong>full stack engineer</strong>, Matt has demonstrated his ability to <strong>crush it</strong> on both the front end and back end. He is fluent in <strong>Ruby and JavaScript</strong> (currently learning Python). He is also quite competent with many <strong>modern frameworks</strong> such as React, Redux and Rails. <strong>Thankfully,</strong> the world of technology is so vast that Matt will <strong>never</strong> have to worry about running out of opportunities again!</p>
// <p className="traveling-item">Matt is <strong>passionate</strong> about technology, science, our planet, travel and making people laugh. He is currently <strong>a web development assistant instructor at C4Q </strong>but is open to opportunities as a software engineer. <a href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top" ><span>Let him know if you are interested!</span> <i className="fa fa-paper-plane" aria-hidden="true"/></a></p>

// const Traveling = (props) => {
//   return (
//     <ul className = "col-md-4 list-group">
//
//       <a href="https://linkedin.com/in/selberthely" target="_blank" rel="noopener noreferrer">
//       <FontAwesomeIcon icon={faCoffee} color="black" transform="grow-8"/></a>
//
//       <a href="mailto:sberthely@berkeley.edu?Subject=Hello%20there!" target="_top">
//       <FontAwesomeIcon icon={faEnvelope} color="black" transform="grow-8" /></a>
//
//     </ul>
//   );
// }



// import React, { Component } from 'react';
//
// class Traveling extends Component {
//   render() {
//     return (
//       <div className="Traveling">
//         <img src={ require('../images/Yosem1.png')} className="thumb"/>
//         <img src={ require('../images/Yosem2.png')} className="thumb"/>
//       </div>
//     );
//   }
// }
// export default Traveling;
