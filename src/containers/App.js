import React from 'react';

import classes from './App.module.css';
import Card from '../components/Card/Card';
import Navigation from '../components/Navigation/Navigation';


function App() {
  return (
    <>
    <Navigation />
    <div className={classes.App}>
      <div className={classes.Container}>
        <h1>Karla Gardiner</h1>
        <h3>Econometrician turned Computer Scientist</h3>
        <Card>
          <p>After 8 years as an Econometrician I'm taking the leap into Software Development.
            I'm excited about turning my hobby into my career, and the endless potential to learn in this fast-changing industry.</p>
          <p>I am an enthusiastic, positive and self-motivated person, who enjoys taking on new challenges. Check out out my <a href='https://github.com/KG700/CV'>CV</a> to find out more</p>
        </Card>
      </div>
    </div>
    </>
  );
}

export default App;
