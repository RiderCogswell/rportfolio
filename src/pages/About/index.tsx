import React from 'react';

export const About = (): JSX.Element => {
  return (
    <div className="me" id='about'>
      <div className="my-section">
          <div className="picture">
              <img src={require('../../assets/rider.JPG')} alt="Rider Cogswell" /> 
          </div>
      </div>
      <div className="my-story">
        <p>
          Born and raised in Oak Park, Sacramento + the Tenderloin District of San Francisco, I am not your traditional Software Engineer! I got my degree from San Francisco State University and was certified through University of California, Davis Full-Stack Software Development Bootcamp, where I became heavily invested in solving complex real world problems! <br /> <br />Follow me on <a rel='noreferrer' className='link' href='https://github.com/RiderCogswell' target='_blank'>GitHub!</a>
        </p>
      </div>       
    </div>
  )
}