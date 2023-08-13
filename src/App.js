import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';
import SelectContainer from './SelectContainer';
import styles from './App.module.css';

const App = () => {
  const { name } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          pokedex
        </h1>
        <SelectContainer name={name} />
        <Detail name={name} />
      </div>
    </div>
  );
};

export default App;
