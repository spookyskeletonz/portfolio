import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ContentContainer from './ContentContainer';
import Navigator from './Navigator.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToProjects = this.scrollToProjects.bind(this);
    this.scrollToAboutMe = this.scrollToAboutMe.bind(this);
    this.scrollToContact = this.scrollToContact.bind(this);
    this.state = {}
  }

  scrollToProjects() {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }

  scrollToAboutMe() {
    document.getElementById("aboutme").scrollIntoView({behavior: "smooth"});
  }

  scrollToContact() {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  }

  render(){
    const { contextRef } = this.state;
    return (
      <div className="App" id="top">
        <Grid columns={2}>
          <Grid.Column width={4}>
            <div ref={this.handleContextRef}>
              <Navigator scrollToContact={this.scrollToContact} scrollToProjects={this.scrollToProjects} scrollToAboutMe={this.scrollToAboutMe}/>
            </div>
          </Grid.Column>
          <Grid.Column width={11}>
            <ContentContainer />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
