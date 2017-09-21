import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DisplayProjects extends Component {
  render() {
    const project = this.props.project;
    // const projectId =

    return (
      <div>
        <Link to={ '/projects/' + project.id }>
        <div>
          <h3>{project.name}</h3>
          <img src={project.image}/>
        </div>
        </Link>
      </div>
    )
  }
}

export default DisplayProjects;
