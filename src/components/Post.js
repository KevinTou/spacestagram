import { useState } from 'react';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = ({ image: { title, date, explanation, url, media_type } }) => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike((prevState) => !prevState);
  };

  return (
    <article className='post-container'>
      <div className='post-image-container'>
        {media_type === 'image' ? (
          <img className='post-image' src={url} alt={title} />
        ) : (
          <iframe className='post-video' src={url} title={title}></iframe>
        )}
      </div>
      <h1 className='post-title'>{title}</h1>
      <p className='post-date'>{date}</p>
      {/* <p className="post-description">{explanation}</p> */}
      <button className='post-like-button' onClick={toggleLike}>
        <FontAwesomeIcon icon={like ? heartSolid : heartRegular} />
        {like && (
          <FontAwesomeIcon
            aria-hidden='true'
            className='animated-heart'
            icon={heartSolid}
          />
        )}
      </button>
    </article>
  );
};

export default Post;
