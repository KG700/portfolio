import React from 'react';

import classes from './WorkExperience.module.css'
import Card from '../../../components/Card/Card';

const WorkExperience = () => {
  return (
    <div className={classes.WorkExperience}>
      <h2>Work Experience</h2>
      <div className={classes.Container}>
        <Card>
          <h3>Sky Ltd</h3>
          <h4>June 2015 to December 2019</h4>
          <h5> Principal Econometrician (March 2017 to December 2019) | <br /> Lead Econometrician (June 2015 to February 2017)</h5>
          <p>
            I was responsible for managing teams of up to 5 colleagues to deliver
            Econometric projects on time. I also became an expert amongst my colleagues
            on technical aspects of the role and I was always willing to help share
            this knowledge with everyone on the team. I created and delivered training
            decks to help new team members and willingly put time aside to go through my
            colleague's questions.
          </p>
        </Card>
        <Card>
          <h3>Ohal Ltd (now Gain Theory)</h3>
          <h4>June 2011 to May 2015</h4>
          <h5> Senior Analyst (January 2014 to April 2015) <br /> Analyst (September 2012 to January 2014) <br /> Graduate Analyst (August 2011 to September 2012)</h5>
          <p>
            I built Econometric models to answer key client questions about their sales
            drivers. I was also responsible for data collection and processing this data.
            I also learned to write Excel macros (VBA), and a little bit of JavaScript,
            HTML/CSS & Python.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default WorkExperience;
