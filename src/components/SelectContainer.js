import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Select, { SelectPlaceholder } from './Select';
import { transformList } from './../transformResponse';
import { LIST_URL } from './../config';
import styles from './SelectContainer.module.css';

const SelectContainer = ({ name }) => {
  const [list, setList] = useState();
  const [selectedName, setSelectedName] = useState(name);

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(LIST_URL);
      const json = await response.json();
      const results = transformList(json);

      setList(results);
    };

    if (!list) fetchList();
  }, [list]);

  return (
    <div className={styles.container}>
      { list && selectedName
        && <Navigate to={`/${selectedName}`} replace={true} />
      }
      <label>pokemon: </label>
      { list
        ? <Select
            handleChange={setSelectedName}
            selectedName={selectedName}
            list={list}
          />
        : <SelectPlaceholder />
      }
    </div>
  );
};

export default SelectContainer;
