import React from 'react';

import classes from './Home.module.css'
import Card from '../../../components/Card/Card';

const Home = () => {
    return (
      <div className={classes.Home}>
        <div className={classes.Container}>
          <h1>Karla Gardiner</h1>
          <h3>Econometrician turned Computer Scientist</h3>
          <Card>
            <p>After 8 years as an Econometrician I'm taking the leap into Software Development.
              I'm excited about turning my hobby into my career, and the endless potential to learn in this fast-changing industry.</p>
            <p>I am an enthusiastic, positive and self-motivated person, who enjoys taking on new challenges.</p>
            <p>Check out out my GitHub <a href='https://github.com/KG700/CV'>CV</a> to find out more.</p>
          </Card>
        </div>
      </div>
    )
}

export default Home;
