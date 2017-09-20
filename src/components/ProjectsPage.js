import React, { Component } from 'react';

import Project from './Project';
import Starbar from './Starbar';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [{
        name: "BBQ Chicken Pizza",
        image: "http://a.abcnews.com/images/US/ht_bbq_chicken_pizza_jef_120131_wmain.jpg",
        github: "https://sallysbakingaddiction.com/2014/03/11/homemade-bbq-chicken-pizza/",
      }, {
        name: "Chicken Bacon Ranch",
        image: "https://www.cscassets.com/recipes/large_cknew/large_50391.jpg",
        github: "https://www.sargento.com/recipes/pizza/chicken-ranch-pizza",
      }, {
        name: "Margherita Pizza",
        image: "http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1416867304309.jpeg",
        github: "https://sallysbakingaddiction.com/2014/07/15/classic-margherita-pizza/"
      }, {
        name: "Meat Lovers Pizza",
        image: "http://veryculinary.com/wp-content/uploads/2017/01/Meat-lovers-pizza.jpg",
        github: "http://iamafoodblog.com/the-ultimate-meat-lovers-pizza/",
      }]
    }
  }

  render() {
    const projects = this.state.projects;

    let project = [];
    for (let i = 0; i < projects.length; i++) {
      project.push(
        <div>
          <Project project={projects[i]}/>
          <h4>Rate this project:</h4>
          <Starbar />
        </div>
      )
    }

    return(
      <div>
        <h1>Projects</h1>
          {project}
      </div>
    )
  }
}

export default ProjectsPage;
