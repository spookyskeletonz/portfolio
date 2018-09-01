import React, { Component } from 'react';
import Projects from './Projects.js';
import AboutMe from './Aboutme.js';
import Contact from './Contact.js';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="ContentContainer">
        <Projects />
        <AboutMe /> 
        <Contact /> 
      </div>
    );
  }
}

export default ContentContainer;
