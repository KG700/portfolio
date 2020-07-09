import React from 'react';
import { Route } from 'react-router-dom';

import classes from './App.module.css';

import Navigation from '../components/Navigation/Navigation';
import Home from './pages/Home/Home';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Learning from './pages/Learning/Learning';


function App() {
  return (
    <>
      <Navigation />
      <Route path='/' exact component={Home} />
      <Route path='/work-experience' component={WorkExperience} />
      <Route path='/education' component={Education} />
      <Route path='/projects' component={Projects} />
      <Route path='/learning' component={Learning} />
    </>
  );
}

export default App;
