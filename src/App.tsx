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
          link: 'https://github.com/RiderCogswell',
          label: 'GitHub'
        },
        {
          link: 'https://www.linkedin.com/in/rider-cogswell-608086160/',
          label: 'LinkedIn'
        },
        {
          link: 'https://www.instagram.com/ridercogswell/',
          label: 'Instagram'
        },
      ]} />
      <Home />
      <About />
      <ContactIcons />
    </>
  );
}

export default App;
