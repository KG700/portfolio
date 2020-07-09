import React from 'react';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>HOME</li>
        <li>EXPERIENCE</li>
        <li>EDUCATION</li>
        <li>PROJECTS</li>
        <li>LEARNING</li>
      </ul>
    </nav>
  )
};

export default Navigation;
