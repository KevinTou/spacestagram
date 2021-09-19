import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import Error from './Error';
import PostsContainer from './PostsContainer';
import SkeletonPost from './SkeletonPost';

import { fetchImagesWithDate } from '../utils/utility_helpers';

const HomeFeed = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const today = dayjs().toJSON().slice(0, 10);
    const tenDaysAgo = dayjs(today).subtract(10, 'day').toJSON().slice(0, 10);
    fetchImagesWithDate(tenDaysAgo, today)
      .then(({ data }) => {
        const sortedData = data.reverse();
        setImages(sortedData);
        setIsLoading(false);
      })
      .catch((error) => {
        const error_message = error?.response?.data?.error?.message;
        setError(error_message || 'Oops... something went wrong!');
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <main>
      {isLoading ? <SkeletonPost /> : <PostsContainer images={images} />}
    </main>
  );
};

export default HomeFeed;
