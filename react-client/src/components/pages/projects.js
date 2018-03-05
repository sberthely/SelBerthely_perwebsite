import React, { Component } from 'react';
//import { Document, Page } from 'react-pdf/build/entry.webpack';

// <Document file="CV.pdf" onLoadSuccess={this.onDocumentLoad}>
// </Document>
// <Document file="https://drive.google.com/open?id=1tL91tdN8pRoP71uhbUudg67T6zjUC0D1">
// </Document>

class Projects extends Component {
  render() {
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <h3>My CV</h3>
          <iframe src="https://drive.google.com/file/d/1tL91tdN8pRoP71uhbUudg67T6zjUC0D1/preview" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="item">
          <h3>A Digital Currency for Mexico</h3>
          <iframe src="https://drive.google.com/file/d/1GeMjIwWRdPtjpXrR7LPtQWek35btuJbU/preview" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="item">
          <h3>Holdings of Mexican Securities since 2008</h3>
          <iframe src="https://drive.google.com/file/d/1NKl7W-4tLK9WbAkZgRO2-IopqgJ8zW37/preview" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="item">
          <h3>Evolution of Payment methods</h3>
          <iframe src="https://drive.google.com/file/d/1NUNWeYeylqAicQFVY52pxQhi1eCEgLVC/preview" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="item">
          <h3>An Algorithmic Approach to Movie Rating Classification using Natural Language Processing</h3>
          <iframe src="https://drive.google.com/file/d/1BpPaQBZZ7Vi-oPGrUZBDnLPQ5QYjdjY0/preview" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}


//Shows "Loading PDF", and then "Failed to load PDF"
// class Projects extends Component {
//   render() {
//     //const { pageNumber, numPages } = this.state;
//
//     return (
//       <div className="Projects">
//
//         <Document file="CV.pdf" onLoadSuccess={this.onDocumentLoad}>
//         </Document>
//       </div>
//     );
//   }
// }
export default Projects;
