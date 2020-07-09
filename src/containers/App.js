import React from 'react';

import classes from './App.module.css';

import Navigation from '../components/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}

export default App;
