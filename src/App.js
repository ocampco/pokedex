import React from 'react';
import Detail from './Detail';
import Select from './Select';
import styles from './App.module.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        pokedex
      </h1>
        <Select />
        <Detail />
    </div>
  </div>
);

export default App;
