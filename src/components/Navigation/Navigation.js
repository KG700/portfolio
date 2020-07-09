import React from 'react';

import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

import Home from '../../containers/pages/Home/Home';
import WorkExperience from '../../containers/pages/WorkExperience/WorkExperience';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/work-experience'>EXPERIENCE</Link></li>
        <li>EDUCATION</li>
        <li>PROJECTS</li>
        <li>LEARNING</li>
      </ul>
    </nav>
  )
};

export default Navigation;
