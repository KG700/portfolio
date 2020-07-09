import React from 'react';
import { Route } from 'react-router-dom';

import classes from './App.module.css';

import Navigation from '../components/Navigation/Navigation';
import Home from './pages/Home/Home';
import WorkExperience from './pages/WorkExperience/WorkExperience';

function App() {
  return (
    <>
      <Navigation />
      <Route path='/' exact component={Home} />
      <Route path='/work-experience' component={WorkExperience} />
    </>
  );
}

export default App;
