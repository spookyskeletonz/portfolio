import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.clickActOnMe = this.clickActOnMe.bind(this);
    this.clickGoChat = this.clickGoChat.bind(this);
    this.clickUsTube = this.clickUsTube.bind(this);
    this.clickOrgsApps = this.clickOrgsApps.bind(this);
  }

  clickActOnMe() {
    window.open('http://actonme.nsarkar.me', '_blank');
  }

  clickGoChat() {
    window.open('http://gochat.nsarkar.me', '_blank');
  }

  clickUsTube() {
    window.open('http://ustube.nsarkar.me', '_blank');
  }

  clickOrgsApps() {
    window.open('https://cserevueorgs.herokuapp.com/', '_blank');
  }

  render(){
    return(
      <div id="projects" className="content"> 
        <div className="contentTitle">//projects</div>
        <div className="card">
          <Card.Group>
            <Card color="black" raised onClick={this.clickActOnMe}>
              <Card.Content>
                  <Card.Header textAlign="center">ActOnMe</Card.Header>
                  <Card.Description>
                    an action item manager written in ReactJS, golang 
                    for api with a Postgres database
                  </Card.Description>
              </Card.Content>
            </Card>
            <Card color="black" raised onClick={this.clickGoChat}>
              <Card.Content>
                  <Card.Header textAlign="center">GoChat</Card.Header>
                  <Card.Description>
                    a chat client using Golang and ReactJS. very basic, 
                    made to learn websockets.
                  </Card.Description>
              </Card.Content>
            </Card>
            <Card color="black" raised onClick={this.clickUsTube}>
              <Card.Content>
                  <Card.Header textAlign="center">UsTube</Card.Header>
                  <Card.Description>
                    a synchronised youtube application, wherein 
                    each room contains users watching the same video 
                    with play/pause and video time synchronised, as 
                    well as a chat. written in Golang(server)/ReactJS(client)
                  </Card.Description>
              </Card.Content>
            </Card>
            <Card color="black" raised onClick={this.clickOrgsApps}>
              <Card.Content>
                  <Card.Header textAlign="center">CSE Revue 2018 Orgs Applications</Card.Header>
                  <Card.Description>
                    An informational single page application built in 
                    ReactJS. Note: Hosted on free Heroku dyno, 
                    please allow time to spin up (~30s)
                  </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Projects;
