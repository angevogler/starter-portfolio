import React, { Component } from 'react';

import Starbar from './Starbar';

class Project extends Component {

  render() {

    let projects = [{
      id: 0,
      name: "BBQ Chicken Pizza",
      image: "http://a.abcnews.com/images/US/ht_bbq_chicken_pizza_jef_120131_wmain.jpg",
      github: "https://sallysbakingaddiction.com/2014/03/11/homemade-bbq-chicken-pizza/",
    }, {
      id:1,
      name: "Chicken Bacon Ranch",
      image: "https://www.cscassets.com/recipes/large_cknew/large_50391.jpg",
      github: "https://www.sargento.com/recipes/pizza/chicken-ranch-pizza",
    }, {
      id: 2,
      name: "Margherita Pizza",
      image: "http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1416867304309.jpeg",
      github: "https://sallysbakingaddiction.com/2014/07/15/classic-margherita-pizza/"
    }, {
      id: 3,
      name: "Meat Lovers Pizza",
      image: "http://veryculinary.com/wp-content/uploads/2017/01/Meat-lovers-pizza.jpg",
      github: "http://iamafoodblog.com/the-ultimate-meat-lovers-pizza/",
    }]

    let id = this.props.match.params.id

        return(
          <div>
            <h3>{projects[id].name}</h3>
            <img src={projects[id].image}/>
            <a href={projects[id].github} target="_blank">
              <button>See Code</button>
            </a>
            <Starbar />
          </div>
        )
  }
}

export default Project;
