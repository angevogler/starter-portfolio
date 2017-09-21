import React, { Component } from 'react';
import {Route, Switch, Link, withRouter } from 'react-router-dom';

import './App.css';

import Home from './components/views/Home';
import ProjectsPage from './components/ProjectsPage';
import Resume from './components/views/Resume';
import Contact from './components/views/Contact';
import Project from './components/Project'

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
              <Route path="/projects/:id" component={Project} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
