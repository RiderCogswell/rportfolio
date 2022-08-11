import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderMiddle } from './components/HeaderMiddle';
import { About } from './pages/About';
import { ContactIcons } from './pages/Contact';
import { Home } from './pages/Home';
import { FooterSimple } from './components/Footer';
import './assets/index.css';

function App() {
  return (
    <Router>
      <>
        <HeaderMiddle links={[
          {
            link: '/',
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

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home />
                <About />
              </>
            }
          />
          <Route 
            path='/contact'
            element={<ContactIcons />}
          />
        </Routes>

        <FooterSimple links={[
          {
            link: '/contact',
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
    </Router>
  );
}

export default App;
