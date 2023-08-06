import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { transformList } from './transformResponse';
import { LIST_URL } from './config';

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
    <ul>
      { !isLoading && list.map(({ name, url, id }) => (
          <li key={id}>
            <Link to={`/${name}`}>
              {id} - {name}
            </Link>
          </li>
      ))}
    </ul>
  );
};

export default List;
