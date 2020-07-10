import React from 'react';

import classes from './Education.module.css';
import Card from '../../../components/Card/Card';

const Education = () => {
  return (
    <div className={classes.Education}>
      <h2>My Education</h2>

      <div className={classes.Container}>
        <Card>
          <h3>Makers Academy</h3>
          <h4>Feb 2020 - May 2020</h4>
          <p>Skills learned:
            <ul>
              <li>Languages: JavaScript, Ruby</li>
              <li>Web frameworks: Sinatra, Rails</li>
              <li>Tesing frameworks: Rspec, Capybara, Jasmine</li>
              <li>Theory: OOP, SOLID, DRY</li>
              <li>Process: TDD, pair programming, Agile</li>
            </ul>
          </p>
        </Card>
        <Card>
          <h3>University of Auckland</h3>
          <h4>2008 - 2010</h4>
          <p>Masters with First Class Honours in Economics (1:1)</p>
          <h4>Awards:</h4>
          <ul>
            <li>H R Rodwell Scholarship in Economics (2010)</li>
            <li>NZARES Post Graduate Award (2010) </li>
            <li>Flying Officer Alfred P Fogerty Memorial Scholarship (2009)</li>
          </ul>
        </Card>
        <Card>
          <h3>University of Otago</h3>
          <h4>2002 - 2005</h4>
          <p>Bachelor of Commerce in Economics</p>
          <p>Bachelor of Arts in Psycohology</p>
        </Card>
      </div>
    </div>
  )
}

export default Education;
