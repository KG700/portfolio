import React from 'react';

import classes from './WorkExperience.module.css'
import Card from '../../../components/Card/Card';

const WorkExperience = () => {
  return (
    <div className={classes.WorkExperience}>
      <h2>Work Experience</h2>
      <div className={classes.Container}>
        <Card>
          <h2>Sky Ltd</h2>
          <h3>June 2015 to December 2019</h3>
          <h4> Principal Econometrician (March 2017 to December 2019) | <br /> Lead Econometrician (June 2015 to February 2017)</h4>
          <p>
            While at Sky I was responsible for managing teams of up to 5 colleagues to deliver Econometric projects on time. I also became an expert amongst my colleagues on technical aspects of the role and I was always willing to help share this knowledge with everyone on the team. I developed training decks to help new team members and willingly put time aside to go through my colleague's questions.
          </p>
        </Card>
        <Card>
          <h2>Ohal Ltd (now Gain Theory)</h2>
          <h3>June 2011 to May 2015</h3>
          <h4> Senior Analyst (January 2014 to April 2015) <br /> Analyst (September 2012 to January 2014) <br /> Graduate Analyst (August 2011 to September 2012)</h4>
          <p>
            Alongside learning the art of building Econometric models to answer key client questions about their sales drivers, I was also responsible for data collection and processing this data. Since data comes in many different formats, this develped my problem solving ability by having to work out how to process data into a format we could use.
          </p>
          <p>
            Ohal also gave me the opportunity to learn to code in vba, then later to dabble in JavaScript, HTML/CSS & Python. I took on this new challenge with great enthusiasm, building macros that helped make my job easier, a browser based tool that we shared with stakeholders, plus I also built macros at home for fun.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default WorkExperience;
