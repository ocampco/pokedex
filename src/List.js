import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { transformList } from './transformResponse';
import { LIST_URL } from './config';
import styles from './List.module.css';

const List = () => {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState('bulbasaur');

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(LIST_URL);
      const json = await response.json();
      const results = transformList(json);

      setIsLoading(false);
      setList(results);
    };

    fetchList();
  }, []);

  if (isLoading) return <div>Loading...</div>

  // TODO: Route better
  return (
    <div className={styles.container}>
      { !isLoading && <Navigate to={`/${selected}`} replace={true} /> }
      <label>select pokemon: </label>
      <select
        className={styles.list}
        onChange={(e) => setSelected(e.target.value)}
      >
        { list.map(({ name, url, id }) => (
          <option key={id} className={styles.item} value={name}>
            {id} - {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default List;
