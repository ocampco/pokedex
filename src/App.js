import React from 'react';
import List from './List';
import Detail from './Detail';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <List />
      <Detail />
    </div>
  );
};

export default App;
