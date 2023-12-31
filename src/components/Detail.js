import React, { useEffect, useState } from 'react';
import { transformDetail } from './../transformResponse';
import { DETAIL_URL } from './../constants/config';
import styles from './Detail.module.css';

const PLACEHOLDER_IMG_SRC = `${process.env.PUBLIC_URL}/pokeball.png`;

const Image = ({ children }) =>
  <div className={styles.imageBorder}>
    <div className={styles.imageBackground}>
      {children}
    </div>
  </div>;

const Atrributes = ({
  name = 'no pokemon selected',
  height = '?',
  weight = '?',
  types = '?',
}) =>
  <>
    <div className={styles.attributes}>
      <h2 className={styles.name}>{name}</h2>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
      <div>type(s): {types}</div>
    </div>
  </>;

const Detail = ({ name }) => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await fetch(`${DETAIL_URL}/${name}`);
      const json = await response.json();
      const results = transformDetail(json);

      setDetail(results);
      setIsLoading(false);
    };

    if (name) fetchDetail();
  }, [name]);

  return (
    <>
      <Image>
        <img
          className={styles.image}
          src={isLoading ? PLACEHOLDER_IMG_SRC : detail.image}
          alt={isLoading ? 'pokeball' : name}
        />
      </Image>
      { isLoading
        ? <Atrributes />
        : <Atrributes
            name={name}
            height={detail.height}
            weight={detail.weight}
            types={detail.types}
          />
      }
    </>
  )
};

export default Detail;
