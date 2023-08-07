import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transformDetail } from './transformResponse';
import { DETAIL_URL } from './config';
import styles from './Detail.module.css';

const Image = ({ image, name }) =>
  <div className={styles.imageBorder}>
    <div className={styles.imageBackground}>
      <img src={image} alt={name} className={styles.image} />
    </div>
  </div>;

// TODO: Refactor signature
const Stats = ({
  detail: {
    name,
    height,
    weight,
    types,
    image,
  },
}) => (
  <>
    <Image image={image} name={name} />
    <div className={styles.attributes}>
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <div>Type(s):
        { types.map(
          (type) => <p key={type}>{type}</p>)
        }
      </div>
    </div>
  </>
);

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
      console.log('results=', results);
    };

    fetchDetail();
  }, [name]);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <Stats detail={detail} /> }
    </div>
  );
};

export default Detail;
