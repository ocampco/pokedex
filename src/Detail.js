import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transformDetail } from './transformResponse';
import { DETAIL_URL } from './config';
import styles from './Detail.module.css';

const Image = ({
  image,
  name,
}) =>
  <div className={styles.imageBorder}>
    <div className={styles.imageBackground}>
      <img src={image} alt={name} className={styles.image} />
    </div>
  </div>;

const Atrributes = ({
    name,
    height,
    weight,
    types,
}) =>
  <>
    <div className={styles.attributes}>
      <h2 className={styles.name}>{name}</h2>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
      <div>type(s): {types}</div>
    </div>
  </>;

const Detail = () => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await fetch(`${DETAIL_URL}/${name}`);
      const json = await response.json();
      const results = transformDetail(json);

      setDetail(results);
      setIsLoading(false);
    };

    fetchDetail();
  }, [name]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Image
        image={detail.image}
        name={detail.name}
      />
      <Atrributes
        name={detail.name}
        height={detail.height}
        weight={detail.weight}
        types={detail.types}
      />
    </>
  )
};

export default Detail;
