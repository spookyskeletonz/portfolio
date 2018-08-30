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
      <Menu vertical text >
        <Menu.Item
          name='projects'
          active={this.state.activeItem === 'projects'}
          onClick={this.handleProjectsClick}
        />
        <Menu.Item
          name='about me'
          active={this.state.activeItem === 'about me'}
          onClick={this.handleAboutMeClick}
        />
        <Menu.Item
          name='contact'
          active={this.state.activeItem === 'contact'}
          onClick={this.handleContactClick}
        />
      </Menu>
    );
  }
}

export default Navigator
