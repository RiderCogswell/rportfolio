import React from 'react';

const observer =  new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

export const About = (): JSX.Element => {
  return (
    <div className="hidden me">
      <div className="my-section">
          <div className="picture">
              <img src={require('../../assets/rider.JPG')} alt="Rider Cogswell" /> 
          </div>
      </div>
      <div className="my-story">
        <p>
          Born and raised in Oak Park, Sacramento + the Tenderloin District of San Francisco, I am not your traditional Software Engineer! I have a degree in Criminal Justice and Ethnic Studies from San Francisco State University and was certified through University of California, Davis Full-Stack Software Development Bootcamp, where I became invested in solving complex real world problems! <br /> <br />Follow me on <a className='link' href='https://github.com/RiderCogswell'>GitHub!</a>
        </p>
      </div>       
    </div>
  )
}