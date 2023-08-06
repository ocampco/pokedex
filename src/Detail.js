import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transformDetail } from './transformResponse';
import { DETAIL_URL } from './config';

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
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>Height: {height}</p>
    <p>Weight: {weight}</p>
    <div>Type(s):
      { types.map(
          (type) => <p key={type}>{type}</p>)
      }
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
