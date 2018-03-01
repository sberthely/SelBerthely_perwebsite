import React, { Component } from 'react';
//import { Document, Page } from 'react-pdf/build/entry.webpack';
//import { Document } from 'react-pdf';

// <Document file="CV.pdf" onLoadSuccess={this.onDocumentLoad}>
// </Document>
// <Document file="https://drive.google.com/open?id=1tL91tdN8pRoP71uhbUudg67T6zjUC0D1">
// </Document>

class Projects extends Component {

    render() {

      return (
        <div>
          <iframe src="https://docs.google.com/document/d/1gj8cRxuVeION8P9XmxrXTa2SmubDtC3L_1j28c0eKz4/edit" width="100%" height="400">
          </iframe>

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
