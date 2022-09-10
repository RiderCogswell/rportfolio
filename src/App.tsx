import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderMiddle } from './components/HeaderMiddle';
import { FooterSimple } from './components/Footer';
import { About } from './pages/About';
import { ContactIcons } from './pages/Contact';
import { ProjectList } from './components/ProjectList';
import { Home } from './pages/Home';

import './assets/index.css';


function App() {
  return (
    <Router>
      <div>
        <HeaderMiddle links={[
          {
            link: '/',
            label: 'Home'
          },
          {
            link: '/projects',
            label: 'Projects'
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
            path='/projects'
            element={<ProjectList />}
          />
          <Route 
            path='/contact'
            element={<ContactIcons />}
          />
        </Routes>

        <FooterSimple links={[

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
      </div>
    </Router>
  );
}

export default App;
