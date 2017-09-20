import React, { Component } from 'react';
import {Route, Switch, Link, withRouter } from 'react-router-dom';

import './App.css';

import Home from './components/views/Home';
import ProjectsPage from './components/ProjectsPage';
import Resume from './components/views/Resume';
import Contact from './components/views/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main>
          {
            /*
            BrowserRouter means we're configuring routes.
            Switch means only one of these three should ever show up.
            */
          }
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
