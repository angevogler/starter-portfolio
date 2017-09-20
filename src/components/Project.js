import React, { Component } from 'react';

class Project extends Component {
  render() {
    const project = this.props.project;

    return (
      <div>
        <h3>{project.name}</h3>
        <img src={project.image}/>
        <a href={project.github} target="_blank">
          <button>See Code</button>
        </a>
      </div>
    )
  }
}

export default Project;
