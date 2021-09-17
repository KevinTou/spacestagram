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
        setError(error_message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <p>Home Feed</p>
      {images.length > 0 && console.log(images)}
    </main>
  );
};

export default HomeFeed;
