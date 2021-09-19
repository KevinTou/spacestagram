import React from 'react';

import Post from './Post';

const PostsContainer = ({ images }) => {
  return (
    <div className='posts-container'>
      {images.map((image) => (
        <Post key={image.title} image={image} />
      ))}
    </div>
  );
};

export default PostsContainer;
