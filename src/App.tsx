import React from 'react';
import { HeaderMiddle } from './components/HeaderMiddle'
import { Home } from './components/Home';
import { About } from './components/About'
import { ContactIcons } from './components/Contact'
import './assets/index.css';

function App() {
  return (
    <>
      <HeaderMiddle links={[
        {
          link: 'https://ridercogswell.github.io/tunedin/',
          label: 'GitHub'
        },
        {
          link: ''
        }
      ]} />
      <Home />
      <About />
      <ContactIcons />
    </>
  );
}

export default App;
