import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'projects'}
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
    this.handleAboutMeClick = this.handleAboutMeClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleProjectsClick() {
    this.setState({
      activeItem: 'projects'
    });
    this.props.scrollToProjects();
  }

  handleAboutMeClick() {
    this.setState({
      activeItem: 'about me'
    });
    this.props.scrollToAboutMe();
  }

  handleContactClick() {
    this.setState({
      activeItem: 'contact'
    });
    this.props.scrollToContact();
  }

  render() {
    return(
      <div className="navigator">
        <Menu inverted vertical text size='massive'>
          <Menu.Item onClick={this.handleProjectsClick}><div className="menuItem">projects</div></Menu.Item>
          <Menu.Item onClick={this.handleAboutMeClick}><div className="menuItem">about me</div></Menu.Item>
          <Menu.Item onClick={this.handleContactClick}><div className="menuItem">contact</div></Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navigator
