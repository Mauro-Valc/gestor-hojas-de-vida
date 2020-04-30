import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation titulo="Mauro"></Navigation>
      <Navigation titulo="Mauro2"></Navigation>
      <Navigation titulo="Mauro5"></Navigation>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
