import React from 'react';
import { HeaderMiddle } from './components/HeaderMiddle';
import { About } from './components/About';
import { ContactIcons } from './components/Contact';
import { Home } from './components/Home';
import { FooterSimple } from './components/Footer';
import './assets/index.css';

function App() {
  return (
    <>
      <HeaderMiddle links={[
        {
          link: '#',
          label: 'Home'
        },
        {
          link: '',
          label: 'Projects'
        },
        {
          link: '##',
          label: 'LinkedIn'
        },
      ]} />
      <Home />
      <About />
      <FooterSimple links={[
        {
          link: '#',
          label: 'Contact'
        },
        {
          link: '#',
          label: 'Resume'
        },
        {
          link: '',
          label: 'Blog'
        },
        {
          link: 'https://opensource.org/licenses/MIT',
          label: 'License'
        },
      ]} />
    </>
  );
}

export default App;
