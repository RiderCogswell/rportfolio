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
            link: 'https://www.linkedin.com/in/rider-cogswell-608086160/',
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
            link: 'https://docs.google.com/document/d/e/2PACX-1vQkec2EgNO5frafwLyynhdEyAxXb52QBDmpJXbEsbqo-RJ8y4mvQ_hmV5R6nyp9rR-uMWLR06r-xaJK/pub',
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
