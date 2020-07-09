import React from 'react';

import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

import Home from '../../containers/pages/Home/Home';
import WorkExperience from '../../containers/pages/WorkExperience/WorkExperience';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/work-experience'>EXPERIENCE</NavLink></li>
        <li>EDUCATION</li>
        <li>PROJECTS</li>
        <li>LEARNING</li>
      </ul>
    </nav>
  )
};

export default Navigation;
