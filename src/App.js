import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const name = 'Ching';
  const isNameShowing = true;
  return (
    <div className='App'>
      <h1 class="text-black text-3xl">Bonjour, {isNameShowing ? name : 'User Name'}</h1>
    </div>
  );
}

export default App;
