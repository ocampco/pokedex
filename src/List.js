import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { transformList } from './transformResponse';
import { LIST_URL } from './config';
import styles from './List.module.css';

const List = () => {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className={styles.container}>
      <select className={styles.list}>
        { list.map(({ name, url, id }) => (
          <option key={id} className={styles.item} value={name}>
              <Link to={`/${name}`}>
                  {id} - {name}
                </Link>
            </option>
        ))}
      </select>
    </div>
  );
};

export default List;
