import React from 'react';
import img from './../img/rider.JPG'

export const About = (): JSX.Element => {
  return (
    <div className="me">
      <div className="my-section">
          <div className="picture">
              <img src={img} alt="Rider Cogswell" />
          </div>
      </div>
      <div className="my-story">
        <p>
          Born and raised in Oak Park, Sacramento + the Tenderloin District of San Francisco, I am not your traditional Software Engineer! I have a degree in Criminal Justice and Ethnic Studies from San Francisco State University and was certified through University of California, Davis Full-Stack Software Development Bootcamp, where I became invested in solving complex real world problems! <br /> Follow me on GitHub!
        </p>
      </div>       
    </div>
  )
}