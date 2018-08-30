import React, { Component } from 'react';
//import Projects from 'Projects.js';
//import AboutMe from 'AboutMe.js';
//import Contact from 'Contact.js';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="ContentContainer">
        <h1 id="projects">projects</h1>
        <h1 id="aboutme">aboutme</h1>
        <h1 id="contact">contact</h1>
      </div>
    );
  }
}

export default ContentContainer;
