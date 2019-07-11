import React from 'react';

import './App.css';
import NavBar from './Components/NavBarMenu/NavBar/NavBar';

import BurgerBuilder from './container/BurgerBuilder';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <BurgerBuilder/>
    </div>
  );
}

export default App;
