import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonPost = () => {
  return (
    <>
      {Array(3)
        .fill()
        .map((item, index) => (
          <div className='post-container' key={index}>
            <div className='post-image-container'>
              <Skeleton width={300} height={300} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Skeleton width={200} style={{ margin: '0.5rem 0' }} />
              <Skeleton width={100} />
            </div>
            <button className='post-like-button'>
              <Skeleton circle={true} height={30} width={30} />
            </button>
          </div>
        ))}
    </>
  );
};

export default SkeletonPost;
