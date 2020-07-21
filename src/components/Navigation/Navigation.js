import React from 'react';

import classes from './Navigation.module.css';
import { Route, NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <div>
        <Route exact path="/:subpath" component={Logo} />
      </div>
      <ul>
        <li><NavLink to='/' exact activeClassName={classes.active}>HOME</NavLink></li>
        <li><NavLink to='/work-experience' activeClassName={classes.active}>EXPERIENCE</NavLink></li>
        <li><NavLink to='/education' activeClassName={classes.active}>EDUCATION</NavLink></li>
        {/*}
        <li><NavLink to='/projects' activeClassName={classes.active}>PROJECTS</NavLink></li>
        <li><NavLink to='/learning' activeClassName={classes.active}>LEARNING</NavLink></li>
        */}
      </ul>
    </nav>
  )
};

export default Navigation;
