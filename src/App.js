import React, { useEffect, useState } from 'react';
import { transformList } from './transformResponse';
import { LIST_URL } from './config';
import './App.css';

const App = () => {
  const [list, setList] = useState();

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(LIST_URL);
      const json = await response.json();
      const results = transformList(json)

      setList(results);
    };

    fetchList();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <ul>
        { list && list.map(({ name, url, id }) => (<li key={id}>{id} - {name}</li>))}
      </ul>
    </div>
  );
};

export default App;
