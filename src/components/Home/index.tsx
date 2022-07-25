import React from 'react';

export const Home = (): JSX.Element => {
    return(
        <section className='intro-design'>
          <div className='intro-to-me'>
            <h1 id='about' className='header'>Hi, I'm <span className='rider'>Rider</span></h1>
            <p className='intro'>
              I'm a Full-Stack Developer with interests in Mobile Development, Machine Learning, AR/VR, and Blockchain. 
            </p>
          </div>  
        </section>
    );
};