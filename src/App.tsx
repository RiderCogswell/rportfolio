import React from 'react';
import Nav from './components/NavbarMinimal'
import { Home } from './components/Home';
import { About } from './components/About'
import './assets/index.css';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
    </>
  );
}

export default App;
