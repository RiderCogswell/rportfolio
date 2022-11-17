import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Home = (): JSX.Element => {
  const [text] = useTypewriter({
    words: ['Functional Programming', 'Web Development', 'Deep Learning', 'AR/VR', 'Blockchain', 'Golang + Rust'],
    loop: 0,
    delaySpeed: 2000
  })

  return(
      <section className='intro-design'>
        <div className='intro-to-me'>
          <h1 className='header'>Hi, I'm <span className='rider' id='about'>Rider</span></h1>          
          
          <p className='intro'>
            Full-Stack Software Engineer with interests in <span>{text}</span><Cursor /> 
          </p>
        </div>  

        
      </section>
  );
};