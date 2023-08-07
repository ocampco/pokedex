import React from 'react';
import Detail from './Detail';
import List from './List';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          pokedex
        </h1>
          <Detail />
          <List />
      </div>
    </div>
  );
};

export default App;
