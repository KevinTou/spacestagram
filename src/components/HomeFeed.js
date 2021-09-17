import { useState, useEffect } from 'react';
import { fetchImagesWithDemoKey } from '../utils/utility_helpers';

import Loading from './Loading';

const HomeFeed = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchImagesWithDemoKey()
      .then(({ data }) => {
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          setImages([data]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        const error_message = error?.response?.data?.error?.message;
        setError(error_message || 'Oops... something went wrong!');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <main>
      <p>Home Feed</p>
    </main>
  );
};

export default HomeFeed;
